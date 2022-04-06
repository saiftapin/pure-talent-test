import React from "react";
import { Customer } from "../../types";
import Card from "../Card";
import LightBox from "../LightBox";

interface CustomerCardProps {
  customer: Customer;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
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
      <p>
        {customer.index}: {customer.email}
      </p>
      <LightBox
        thumb={customer.picture + "?c" + Math.random()}
        large={customer.picture.replace(/200/g, "960") + "?c" + Math.random()}
        alt={`${customer.name}`}
      />
    </Card>
  );
};

export default CustomerCard;
