import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
/* import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage'; */  
import {useTheme} from './ThemeContext';
import './App.css'


const App = () => {
  const darkTheme = useTheme();
  const themeStyle = {
    backgroundColor : darkTheme ? "#1C2833" : "#fff",
    color : darkTheme ? "#fff" : "#1C2833",
    transition:'all .3s ease'
}
  return(
    <div style={themeStyle} className="app">
    <Navbar/>
      <Switch>
        <Route exact path="/clothes" component={HomePage}/>
        <Route exact path="/clothes/auth" component={AuthenticationPage}/>
       {/*  <Route exact path="/clothes/products" component={ProductsPage}/>
        <Route exact path="/clothes/products/:productId" component={ProductPage}/> */}
      </Switch>
    <Footer/>
  </div>
  )
}

export default App;
