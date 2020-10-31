import React from 'react';
import './HomePage.scss'
import Categories from '../../components/Categories/Categories'
import Divider from '../../components/Divider/Divider';
import Payment from '../../components/Payment/Paymen';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

const HomePage = () => (
    <div className="homepage">
        <Categories/>
        <Divider/>
        <Payment/>
        <Divider/>
        <CustomerReviews/>
        <Divider/>
        <PopularProducts/>
        <Divider/>
    </div>
)

export default HomePage;