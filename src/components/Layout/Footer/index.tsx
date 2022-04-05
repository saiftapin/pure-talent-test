import React from "react";

interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return (  
        <footer style={{
            display: "flex",
            flexGrow: 0,
            flexShrink: 0,
            alignItems: "center",
            height: "60px",
            justifyContent: "center",
            backgroundColor: "#333",
            color: "#FFF"
        }}>
            &copy; 2022 - PureTalents
        </footer>
    );
}
 
export default Footer;