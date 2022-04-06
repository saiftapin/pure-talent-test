import React, { useContext, useEffect } from "react";
import CustomerCard from "../components/CustomerCard";
import Container from "../components/Layout/Container";
import Listing from "../components/Listing";
import Search from "../components/Listing/Search";
import { PageContext } from "../contexts/PageContext";
import SearchContextProvider from "../contexts/SearchContext";
import { Customer } from "../types";

interface CustomersProps {}

const sortCustomerById = (customers: Customer[]) => {
  return customers.sort((a: any, b: any) =>
    a.index < b.index ? -1 : a.index > b.index ? 1 : 0
  );
}

const Customers: React.FC<CustomersProps> = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.titleHandler("Customer Listing");
  }, [pageContext]);

  return (
    <Container>
      <SearchContextProvider>
        <Search />
        <Listing
          apiUrl="/api/customers.json"
          sortBy={sortCustomerById}
          limit={12}
          renderWith={(customer: Customer) => {
            return <CustomerCard key={customer.index} customer={customer} />;
          }}
        />
      </SearchContextProvider>
    </Container>
  );
};

export default Customers;