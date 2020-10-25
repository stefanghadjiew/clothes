import React,{useState} from 'react';
import './Review.scss';
import {FaStar} from 'react-icons/fa';
import {RiArrowUpSFill} from 'react-icons/ri';

const Review = ({reviewer}) => {
    const [open,setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    return(
        <div className="review">
            <img src={reviewer.image} alt="reviewer"/>
            <h6>{reviewer.name}</h6>
            <div className="rating-container">
                <FaStar style={{color:'#F4D03F'}}/>
                <FaStar style={{color:'#F4D03F'}}/>
                <FaStar style={{color:'#F4D03F'}}/>
                <FaStar style={{color:'#F4D03F'}}/>
            </div>
            <button className="review-btn" onClick={handleClick}>
                <RiArrowUpSFill className={open ? 'open icon-btn' : 'icon-btn'}/>
            </button>
            {/* <div className="comment">
                <p>{reviewer.comment}</p>
            </div> */}
        </div>
    )
}

export default Review;