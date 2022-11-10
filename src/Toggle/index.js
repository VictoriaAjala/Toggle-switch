import React from 'react';
import "./style.css";

export default function Toggle() {
    return <div className='toggle'>
        <div className='notch'></div>
        <div>
            <div className='shape sm'></div>
            <div className='shape sm'></div>
            <div className='shape md'></div>
            <div className='shape lg'></div>
        </div>
    </div>
}