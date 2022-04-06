import React from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import './style.scss';

interface ContainerProps {
  children?: React.ReactNode | React.ReactNode[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Container;
