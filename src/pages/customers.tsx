import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import Container from "../components/Layout/Container";
import LightBox from "../components/LightBox";
import Listing from "../components/Listing";
import Search from "../components/Listing/Search";
import { PageContext } from "../contexts/PageContext";
import SearchContextProvider from "../contexts/SearchContext";

interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.titleHandler("Customers");
  }, [pageContext]);

  return (
    <Container>
      <SearchContextProvider>
        <Search />
        <Listing
          apiUrl="/api/customers.json"
          sortBy={(customers: any) => {
            return customers.sort((a: any, b: any) =>
              a.index < b.index ? -1 : a.index > b.index ? 1 : 0
            );
          }}
          limit={12}
          renderWith={(customer: any) => {
            return (
              <Card
                key={customer.index}
                title={customer.name}
                MoreDetail={() => {
                  return (
                    <>
                      <p>{customer.gender}</p>
                      <p>{customer.address}</p>
                      <p>{customer.phone}</p>
                    </>
                  );
                }}
              >
                <p>{customer.index}: {customer.email}</p>
                <LightBox 
                  thumb={customer.picture + "?c" + Math.random()} 
                  large={customer.picture.replace(/200/g, '960') + "?c" + Math.random()}
                  alt={`${customer.name}`}
                />
              </Card>
            );
          }}
        />
      </SearchContextProvider>
    </Container>
  );
};

export default Customers;