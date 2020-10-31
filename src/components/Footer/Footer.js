import React from 'react';
import './Footer.scss';
import {FaTwitter,FaFacebookF,FaYoutube} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import Title from '../Title/Title';
import {Link} from 'react-router-dom';
import {useTheme} from '../../ThemeContext';
import Button from '../Button/Button';

const Footer = () =>{
    const darkTheme = useTheme();
    const themeStyle = {
        backgroundColor : darkTheme ? "#1C2833" : "#fff",
        color : darkTheme ? "#fff" : "#1C2833",
        transition:'all .3s ease'
    }
    const linkStyle ={
        first: {
            textDecoration:'none',
            opacity: '.5',
            color:'inherit',
            marginBottom : '10px'
        },
        rest : {
            textDecoration:'none',
            color:'inherit',
        }
    }
    return(
    <div className="footer">
        <div className="title-container">
            <Title text="Clothes"/>
        </div>
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
                {["Support","Contact Us","FAQ","Downloads","Locale A Dealer","Products Registration"].map((item,index) => (
                    <Link key={index} to="#" style={(index === 0) ? linkStyle.first : linkStyle.rest}>
                        <h6>{item}</h6>
                    </Link>
                ))}
            </div>
            <div className="support">
                {["Clothes","About us","Clothes Design","Careers","Newsroom","Access"].map((item,index) => (
                    <Link key={index} to="#" style={(index === 0) ? linkStyle.first : linkStyle.rest}>
                        <h6>{item}</h6>
                    </Link>
                ))}
              
            </div>
        </div>
        <div className="contact">
            <input style={{color : darkTheme ? "#fff" : "#1C2833"}} type="e-mail" placeholder="e-mail address"/>
            <Button text="Submit" width="200px"/>
        </div>
    </div>

    )
}
  
export default Footer;