import React from 'react';
import './PopularProducts.scss';
import Title from '../Title/Title';
import {useData} from '../../DataContext';
import PopularProduct from '../PopularProduct/PopularProduct';

const PopularProducts= () => {
    const {menData,womenData,childrenData}= useData()
    const menHats = menData.items[0].hats.filter(hat => hat.id < 3)
    const menShoes = menData.items[1].shoes.filter(shoe => shoe.id<3)
    const menJackets = menData.items[2].jackets.filter(jacket => jacket.id<3)
    const womenHats = womenData.items[0].hats.filter(hat=>hat.id<3)
    const womenShoes = womenData.items[1].shoes.filter(shoe=>shoe.id<3)
    const womenJackets = womenData.items[2].jackets.filter(jacket=>jacket.id<3)
    const childrenHats = childrenData.items[0].hats.filter(hat => hat.id<3)
    const childrenShoes = childrenData.items[1].shoes.filter(shoe => shoe.id<3)
    const childrenJackets = childrenData.items[2].jackets.filter(jacket => jacket.id<3)
    return (
        <div className="popular-products-wrapper">
            <Title text="On Sale"/>
            <PopularProduct data={menHats}/>
            <PopularProduct data={menShoes}/>
            <PopularProduct data={menJackets}/>
            <PopularProduct data={womenHats}/>
            <PopularProduct data={womenShoes}/>
            <PopularProduct data={womenJackets}/>
            <PopularProduct data={childrenHats}/>
            <PopularProduct data={childrenShoes}/>
            <PopularProduct data={childrenJackets}/>
        </div>
    )
}

export default PopularProducts;