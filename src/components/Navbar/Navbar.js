import React , {useState} from 'react';
import './Navbar.scss';
import { GiFluffySwirl } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { ImMan } from 'react-icons/im';
import { ImWoman } from 'react-icons/im';
import { FaChild } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState(false)
    const handleMenu = () => {setMenu(!menu)}
    return (
        <>
            <div className="nav">
                <div className="nav-logo">
                    <GiFluffySwirl className="nav-logo-icon"/>
                    <h1 className="nav-logo-text">Clothes</h1>
                </div>
                { menu ?
                    <AiOutlineClose className="nav-menu-icon" onClick={handleMenu}/>
                    : 
                    <AiOutlineMenu onClick={handleMenu} className='nav-menu-icon'/>
                }
            </div>
            <div className={ menu ? "menu open" : "menu" }>
                {[
                    {icon: <AiFillHome className="nav-menu-icon"/>,link:"/clothes",text:"Home"},
                    {icon: <AiOutlineUserAdd className="nav-menu-icon"/>,link:"/clothes/login",text:"Log In"},
                    {icon: <ImMan className="nav-menu-icon"/>,link:"/clothes/men",text:"Men"},
                    {icon: <ImWoman className="nav-menu-icon"/>,link:"/clothes/women",text:"Women"},
                    {icon: <FaChild className="nav-menu-icon"/>,link:"/clothes/children",text:"Children"},
                ].map((item,index) =>(
                    <div key={index} className="menu-link-wrapper">
                        {item.icon}
                        <Link onClick={handleMenu} className="menu-link" to={item.link}>{item.text}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Navbar;