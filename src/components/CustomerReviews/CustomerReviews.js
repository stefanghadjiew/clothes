import React from 'react';
import {useData} from '../../DataContext';
import {useTheme} from '../../ThemeContext';
import './CustomerReviews.scss';
import Review from '../Review/Review';
const CustomerReviews = () => {
    const darkTheme = useTheme()
    const {reviewers} = useData()
    const themeStyle = {
        backgroundColor : darkTheme ? "#1C2833" : "#fff",
        color : darkTheme ? "#fff" : "#1C2833"
    }
    return (
        <div style={themeStyle} className="reviews-wrapper">
            <Review reviewer={reviewers[0]}/>
            <Review reviewer={reviewers[1]}/>
            <Review reviewer={reviewers[2]}/>
            <Review reviewer={reviewers[3]}/>
            <Review reviewer={reviewers[4]}/>
        </div>
    )
}

export default CustomerReviews;