import React from "react";
import './style.scss';
interface ContentProps {
  children?: React.ReactNode | React.ReactNode[];
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="content">
      <div id="top-pos">{children}</div>
    </div>
  );
};

export default Content;