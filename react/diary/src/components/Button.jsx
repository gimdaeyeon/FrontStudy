import React from 'react';
import './Button.css'

const Button = ({text, type="DEFAULT", onClick}) => {
    return (
        <button onClick={onClick} className={`button button_${type}`}>
            {text}
        </button>
    );
};

export default Button;