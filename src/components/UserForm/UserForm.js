import React,{useState} from 'react';
import './UserForm.scss';
import {useTheme} from '../../ThemeContext';

const UserForm = () => {
    const darkTheme = useTheme()
    const [formState,setFormState] = useState({
        username:'',
        password:''
    })
    
    const handleChange = (e) => {
        setFormState({...formState,
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    return (
        <form className="form">
            <input 
                id="username"
                type="text"
                placeholder="username"
                required
                name="username"
                value={formState.username}
                onChange={handleChange}
                style={{color : darkTheme ? "#fff" : "#1C2833"}}
            />
            <input 
                type="password"
                placeholder="password"
                required
                name="password"
                value={formState.password}
                onChange={handleChange}
                style={{color : darkTheme ? "#fff" : "#1C2833"}}
            />
        </form>

    )
}
    


export default UserForm;