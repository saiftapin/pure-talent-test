import React from "react";

interface ContentProps {
    children?: React.ReactNode | React.ReactNode[];
}

const Content: React.FC<ContentProps> = ({children}) => {
    return (  
        <div style={{
            display: "flex",
            flexGrow: 1,
            flexShrink: 1,
            overflow: "scroll"
        }}>
            <div id="top-pos" style={{
                padding: "15px",
                flex: 1
            }}>
                {children}
            </div>
        </div>
    );
}
 
export default Content;