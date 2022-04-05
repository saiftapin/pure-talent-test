import React, { useState } from "react";
import './style.scss';

interface LightBoxProps {
    thumb: string,
    large: string,
    alt: string
}

const LightBox: React.FC<LightBoxProps> = ({
    thumb, large, alt
}) => {
    const [showThumb, setShowThumb] = useState<boolean>(true)
    return ( 
        <>
        { showThumb && <div className="lb-thumb" onClick={() => setShowThumb(false)}>
            <img
                  src={thumb}
                  alt={alt}
                />
        </div> }
        { !showThumb && <div className="lb-popup" onClick={() => setShowThumb(true)}>
            <img
                  src={large}
                  alt={alt}
                />
        </div> }
        </>

    );
}
 
export default LightBox;