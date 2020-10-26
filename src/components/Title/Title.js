import React from 'react';
import './Title.scss';

const Title = ({text}) => {
    const splitChars = text.split('')
    const title = splitChars.map((l,i) => (
        <span key={i}>{l}</span>
    ))
    return (
        <h1>{title}</h1>
    )
}

export default Title;