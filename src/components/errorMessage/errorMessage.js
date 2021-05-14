import React from 'react';
import './errorMessage.css';
import img from './error.png'

const ErrorMessage = () => {
    return (
        <>
        <img className='gifPorn' src={img} alt='error'></img>
    <span className='error'>Something goes wrong</span>
    </>
    
    )
}


export default ErrorMessage;