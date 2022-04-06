import React, { useState } from "react";
import Button from "../Button";
import "./index.scss";

interface CardProps {
  title: string;
  MoreDetail?: () => React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
}

const Card: React.FC<CardProps> = ({ title, MoreDetail, children }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="card">
      <div className="card-inner">
        <h4>
          <b>{title}</b>
        </h4>
        {children}
        {showMore && <div className="more-info">{MoreDetail?.()}</div>}
        <div className="action">
          <Button type="link-btn" onClick={() => setShowMore(!showMore)}>
            {!showMore ? "More Details" : "Hide Details"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
