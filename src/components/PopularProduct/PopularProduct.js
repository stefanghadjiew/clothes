import React from 'react';
import './PopularProduct.scss';
import Button from '../Button/Button';

const PopularProduct = ({data}) => {
    const dataToRender = data.map(item =>(
        <div className="card" key={item.id} style={{backgroundImage:`url(${item.img})`}}>
            <div className="banner"><h3>On Sale</h3></div>
            <div className="btn-wrapper">
                <Button text="Details" width="250px" path={`${item.path}`}/>
            </div>
                
        </div>
    ))
    
    return (
        <> 
        {dataToRender}
        </> 
    )
}
 

   


export default PopularProduct