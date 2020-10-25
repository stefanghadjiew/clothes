import React from 'react';
import './CategoriesCard.scss';
import Button from '../Button/Button';

const CategoriesCard = ({title,data}) => (
    <div className="card" style={{backgroundImage:`url(${data.categoryImg})`}}>
        <h1 style={{transition:'transform .3s ease'}}>{title}</h1>
        <Button text='Visit'/>
    </div>
)

export default CategoriesCard;