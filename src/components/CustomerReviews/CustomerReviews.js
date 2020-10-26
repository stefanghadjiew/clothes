import React from 'react';
import {useData} from '../../DataContext';

import './CustomerReviews.scss';
import Review from '../Review/Review';
import Title from '../Title/Title';
const CustomerReviews = () => {
    const {reviewers} = useData()
    return (
        <div className="reviews-wrapper">
            <Title text="Customer Reviews"/>
            <Review reviewer={reviewers[0]}/>
            <Review reviewer={reviewers[1]}/>
            <Review reviewer={reviewers[2]}/>
            <Review reviewer={reviewers[3]}/>
            <Review reviewer={reviewers[4]}/>
        </div>
    )
}

export default CustomerReviews;