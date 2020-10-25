import React from 'react';
import {useTheme} from '../../ThemeContext';
import './Divider.scss'
const Divider = () => {
    const darkTheme = useTheme();
    const themeStyles= {
        backgroundColor: darkTheme ? "#fff" : "#1C2833" ,
    }
    return(
        <div style={themeStyles}className="divider"></div>
    )
}


export default Divider;