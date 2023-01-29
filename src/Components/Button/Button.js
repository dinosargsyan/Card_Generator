import React from 'react';
import './Button.scss';

const Button = ({ children, onClick }) => {
    return (
        <div className='buttons-container'>
            <button className='button' onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;