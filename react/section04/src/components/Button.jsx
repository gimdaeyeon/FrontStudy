import React from "react";

const Button = ({text, color, children}) => {
    return (
        <button style={{color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
}


export default Button;