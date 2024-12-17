import React from "react";

const Button = ({text, color, children}) => {

    // 이벤트 객체
    function onClickButton(e){
        console.log(e);
        console.log(text);
    }

    return (
        <button
            onClick={onClickButton}
            style={{color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
}


export default Button;