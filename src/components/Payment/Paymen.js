import React from 'react';
import './Payment.scss';
import Button from '../Button/Button';
import Title from '../Title/Title';
const Payment = () => {
   return (
        <div className="payment-wrapper">
            <div className="title">
                <Title text="Secure Payments Guaranteed!"/>
            </div>
            <div className="image-wrapper"></div>
            <div className="payment-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula arcu, posuere in gravida ac, finibus sed ipsum. Vivamus nisi</p>
            </div>
            <Button text="Get Started" width="250px"/>
        </div>
    )
}

export default Payment;