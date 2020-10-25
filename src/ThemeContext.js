import React , { useContext,createContext,useState } from 'react';

const ThemeContext = createContext()
const ThemeContextUpdate = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeContextUpdate)
}

export const ThemeProvider = ({children}) => {
    const [darkTheme,setDarkTheme] = useState(true)
    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    ) 
}