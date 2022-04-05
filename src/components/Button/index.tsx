import React from "react";
import './style.scss';

interface ButtonProps {
    children: string;
    onClick: () => void;
    type?: 'normal' | 'clear-btn' | 'link-btn' | 'page-btn' | 'page-btn-sel';
}
 
const Button: React.FC<ButtonProps> = ({
    children, onClick, type='normal'
}) => {
    return ( 
        <button type="button" className={`btn ${type}`} onClick={onClick}>
            {children}
        </button>
    );
}
 
export default Button;