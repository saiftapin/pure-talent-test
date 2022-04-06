import React, { useContext } from "react";
import { PageContext } from "../../../contexts/PageContext";
import './style.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const pageContext = useContext(PageContext);
  return (
    <header>
      <h2>{pageContext.title || "🚀 Unknown Title"}</h2>
    </header>
  );
};

export default Header;
