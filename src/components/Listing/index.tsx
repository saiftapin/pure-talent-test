import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SearchContext } from "../../contexts/SearchContext";
import Paging from "./Paging";
import axios from "axios";
import { useQuery } from "react-query";
import "./style.scss";
import { useSearchParams } from "react-router-dom";

interface ListingProps {
  apiUrl: string;
  limit?: number;
  renderWith?: (data: any) => {};
  sortBy?: (record: any) => any;
}

const Listing: React.FC<ListingProps> = ({
  apiUrl,
  limit = 20,
  renderWith,
  sortBy,
}) => {
  const [page, setPage] = useState<number>(1);
  const [recordCount, setRecordCount] = useState<number>(1);
  const searchContext = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(apiUrl).then((res) => res.data)
  );

  useEffect(() => {
    setPage(parseInt(searchParams.get("page") || "", 10) || 1);
  }, [searchContext, searchParams]);

  const listRecords = useMemo(() => {
    let { records, total } = filterRecords(
      data,
      searchContext.query,
      page,
      limit
    );
    setRecordCount(total);
    return sortBy ? sortBy(records) : records;
  }, [searchContext, data, page, limit, sortBy]);

  const pageClick = useCallback(
    (page) => {
      setPage(page);
      setSearchParams({
        search: searchParams.get("search") || "",
        page: `${page}`,
      });
    },
    [setSearchParams, searchParams]
  );

  if (isLoading || isFetching) return <>{"Loading..."}</>;

  if (error) return <>{"An error has occurred: " + (error as any).message}</>;

  if (listRecords.length > 0) {
    return (
      <>
        {searchContext.query.length > 0 && (
          <div className="search-info">
            Search result for{" "}
            <strong>
              <i>{searchContext.query}</i>
            </strong>{" "}
            ({recordCount} records found)
          </div>
        )}
        <div className="grid el">{listRecords?.map?.(renderWith)}</div>
        <Paging
          page={page}
          limit={limit}
          total={recordCount}
          onClick={pageClick}
        />
      </>
    );
  } else {
    return (
      <>
        <div>No Record Found</div>
      </>
    );
  }
};

export default Listing;

const filterRecords = (
  data: any,
  search: string,
  page: number,
  limit: number
) => {
  let records = [];
  if (data && data.length > 0) {
    if (search.length > 0) {
      const searchText = search.toLowerCase();
      records = data.filter(
        (c: any) =>
          c.name
            .toLowerCase()
            .split(" ")
            .reduce(
              (sum: number, name: string) =>
                sum + (name.indexOf(searchText) === 0 ? 1 : 0),
              0
            ) > 0
      );
    } else {
      records = [...data];
    }
  }

  const start = (page - 1) * limit;
  const total = records.length;
  let end = start + limit;
  if (end > total) {
    end = total;
  }

  return {
    records: records.slice(start, end) || [],
    total,
  };
};