import React from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

interface ContainerProps {
  children?: React.ReactNode | React.ReactNode[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Container;
