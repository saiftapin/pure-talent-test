import React, { useCallback, useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { useSearchParams } from 'react-router-dom';
import './style.scss';
import Button from "../../Button";

interface SearchProps {
    
}
 
const Search: React.FC<SearchProps> = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const searchContext = useContext(SearchContext);
    const [searchParams, setSearchParams] = useSearchParams();

    /* sync search text with url param search */
    useEffect(() => {
        if(searchQuery === "" && searchParams.get("search") !== searchQuery){
            let txt = searchParams.get("search");
            if(txt){
                setSearchQuery(txt)
                searchContext.searchHandler(txt)
            }
        }
    }, [searchQuery, searchContext, searchParams])

    const doSearchChange = useCallback((search) => {
        setSearchQuery(search)
        setSearchParams({page: "1", search });
        searchContext.searchHandler(search)
    }, [searchContext, setSearchParams])

    const onClear = useCallback(() => {
        doSearchChange("")
    },[doSearchChange])

    const handleOnChange = useCallback((event) => {
        doSearchChange(event.target.value.replace(/[^a-zA-Z0-9@]+/, '') || "")
    },[doSearchChange])

    const onSearch = useCallback(() => {
        searchContext.searchHandler(searchQuery)
    },[searchContext, searchQuery])

    return (
        <div id="search-div">
            <input className="search-input" type="text" value={searchQuery} onChange={handleOnChange}/>
            {searchQuery.length > 0 && <Button type='clear-btn' onClick={onClear}>&times;</Button>}
            <Button onClick={onSearch}>Search</Button>
        </div>
    );
}
 
export default Search;