import React, { useContext } from "react";
import { PageContext } from "../../../contexts/PageContext";

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    const pageContext = useContext(PageContext)
    return (  
        <header style={{
            display: "flex",
            flexGrow: 0,
            flexShrink: 1,
            alignItems: "center",
            height: "60px",
            justifyContent: "center",
            backgroundColor: "#7232fa",
            color: "#FFF"
        }}>
            <h2>{pageContext.title || "🚀 Unknown Title"}</h2>
        </header>
    );
}
 
export default Header;