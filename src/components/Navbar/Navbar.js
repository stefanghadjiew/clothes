import React , {useState} from 'react';
import './Navbar.scss';
import { GiFluffySwirl } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { ImMan } from 'react-icons/im';
import { ImWoman } from 'react-icons/im';
import { FaChild } from 'react-icons/fa';
import { CgDarkMode } from 'react-icons/cg';
import {Link} from 'react-router-dom';
import { useTheme,useThemeUpdate } from '../../ThemeContext';

const Navbar = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const [menu,setMenu] = useState(false)
    const openMenu = () => {
        setMenu(true)
        document.body.style.overflow="hidden"
    }
    const closeMenu = () => {
        setMenu(false)
        document.body.style.overflow="visible"
    }
    const themeStyle = {
        backgroundColor : darkTheme ? "#1C2833" : "#fff",
        color : darkTheme ? "#fff" : "#1C2833"
    }
    return (
        <>
            <div className="nav" style={themeStyle}>
                <div className="nav-logo">
                    <GiFluffySwirl className="nav-logo-icon"/>
                    <h1 className="nav-logo-text">Clothes</h1>
                </div>
                <div className="menu-icon-theme-wrapper">
                <CgDarkMode onClick={toggleTheme} className="nav-menu-icon"/>
                { menu ?
                    <AiOutlineClose className="nav-menu-icon" onClick={closeMenu}/>
                    : 
                    <AiOutlineMenu onClick={openMenu} className='nav-menu-icon'/>
                }
                </div>
            </div>
            <div style={themeStyle} className={ menu ? "menu open" : "menu" }>
                {[
                    {icon: <AiFillHome className="nav-menu-icon"/>,link:"/clothes",text:"Home"},
                    {icon: <FaUser className="nav-menu-icon"/>,link:"/clothes/login",text:"Log In"},
                    {icon: <ImMan className="nav-menu-icon"/>,link:"/clothes/men",text:"Men"},
                    {icon: <ImWoman className="nav-menu-icon"/>,link:"/clothes/women",text:"Women"},
                    {icon: <FaChild className="nav-menu-icon"/>,link:"/clothes/children",text:"Children"},
                ].map((item,index) =>(
                    <div key={index} className="menu-link-wrapper">
                        {item.icon}
                        <Link onClick={closeMenu} className="menu-link"  style={darkTheme ? {color:'#fff'} : {color:'#1C2833'}} to={item.link}>{item.text}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Navbar;