import React from 'react';
import { useData } from '../../DataContext';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import './Categories.scss'

const Categories = () => {
    const {menData,womenData,childrenData} = useData();
    return (
        <div className="categories-wrapper">
            <CategoriesCard title="Men" data={menData}/>
            <CategoriesCard title="Women" data={womenData}/>
            <CategoriesCard title="Children" data={childrenData}/>
        </div>
    )
}

export default Categories;