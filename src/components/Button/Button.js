import React from 'react';
import './Button.scss';
import { useTheme } from '../../ThemeContext';
import {Link} from 'react-router-dom';
const Button = ({text,path,width}) => {
    const darkTheme = useTheme()
    const btnStyle = {
        backgroundColor : darkTheme ? "#1C2833" : "#fff",
        color : darkTheme ? "#fff" : "#1C2833",
        width:width,
    }
    return(
    <Link style={{textDecoration:'none'}} to={`${path}`}>
        <button style={btnStyle} className="button">
            {text}
        </button>
    </Link>
    )
}

export default Button;