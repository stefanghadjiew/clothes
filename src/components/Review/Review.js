import React,{useState,useRef} from 'react';
import './Review.scss';
import {FaStar} from 'react-icons/fa';
import {RiArrowUpSFill} from 'react-icons/ri';
import {useTheme} from '../../ThemeContext';
const Review = ({reviewer}) => {
    const [open,setOpen] = useState(false)
    const [height,setHeight] = useState('0px')
    const content = useRef(null)
    const darkTheme = useTheme()
    const btnStyle = {
        color : darkTheme ? '#fff' : '#1C2833',
        height:'30px',
        width:'30px',
        transition:'all .3s ease',
        transform: open ? 'rotate(180deg)' : ''
    }
   
   
    const handleClick = () => {
        setOpen(!open)
        setHeight(
            open ? '0px' : `${content.current.scrollHeight}px`
        )
    }
    return(
        <>
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
                    <RiArrowUpSFill style={btnStyle}/>
                </button>
            </div>
            <div ref={content} style={{maxHeight:`${height}`}} className="content">
                {reviewer.comment}
            </div>
        </>
    )
}

export default Review;