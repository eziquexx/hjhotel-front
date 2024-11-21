import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonEx({ id, className, children, action = null, type = "button", url = null }) {
    const nav = useNavigate();

    const handleClick = () => {
        if (action) {
            action(); // action 실행
        }
        if (url) {
            nav(url); // url로 라우팅
        }
    };

    return (
        <button id={id} className={className} onClick={handleClick} type={type}>
            {children}
        </button>
    );
}

export default ButtonEx;
