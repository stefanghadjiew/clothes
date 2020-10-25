import React from 'react';
import './HomePage.scss'
import { useTheme } from '../../ThemeContext';
import Categories from '../../components/Categories/Categories'
import Divider from '../../components/Divider/Divider';
import Payment from '../../components/Payment/Paymen';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';

const HomePage = () => {
    const darkTheme = useTheme()
    const themeStyle = {
        backgroundColor : darkTheme ? "#1C2833" : "#fff",
        color : darkTheme ? "#fff" : "#1C2833"
    }
    return(
        <div style={themeStyle} className="homepage">
            <Categories/>
            <Divider/>
            <Payment/>
            <Divider/>
            <CustomerReviews/>
            <Divider/>
        </div>
    )
}

export default HomePage;