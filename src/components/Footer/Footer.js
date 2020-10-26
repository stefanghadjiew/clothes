import React from 'react';
import './Footer.scss';
import {FaTwitter,FaFacebookF,FaYoutube} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import Title from '../Title/Title';
import {Link} from 'react-router-dom';
import {useTheme} from '../../ThemeContext';

const Footer = () =>{
    const darkTheme = useTheme();
    const themeStyle = {
        backgroundColor : darkTheme ? "#1C2833" : "#fff",
        color : darkTheme ? "#fff" : "#1C2833",
        transition:'all .3s ease'
    }
    return(
    <div className="footer">
        <Title text="Clothes"/>
        <div className="social-icons">
            <Link to="#" className="link">
                <FaTwitter className="footer-icon twitter" style={themeStyle}/>
            </Link>
            <Link to="#" className="link">
                <FaFacebookF className="footer-icon facebook" style={themeStyle}/>
            </Link>
            <Link to="#" className="link">
                <FaYoutube className="footer-icon youtube" style={themeStyle}/>
            </Link>
            <Link to="#" className="link">
                <AiFillInstagram className="footer-icon instagram" style={themeStyle}/>
            </Link>
        </div>
        <div className="support-wrapper">
            <div className="support">
                <h6>Support</h6>
                <h6>Contact Us</h6>
                <h6>FAQ</h6>
                <h6>Downloads</h6>
                <h6>Locale A Deaker</h6>
                <h6>Products Registration</h6>
            </div>
            <div className="support">
                <h6>Clothes</h6>
                <h6>About us</h6>
                <h6>Clothes Design</h6>
                <h6>Careers</h6>
                <h6>Newsroom</h6>
                <h6>Access</h6>
            </div>
        </div>
        <div className="contact">
            <input type="e-mail" placeholder="Enter your e-mail address"/>
        </div>
    </div>

    )
}
  
export default Footer;