import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
/* import AuthenticationPage from './pages/AuthenticationPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';  */


const App = () => (
  <>
    <Navbar/>
      <Switch>
        <Route exact path="/clothes" component={HomePage}/>
       {/*  <Route exact path="/clothes/auth" component={AuthenticationPage}/>
        <Route exact path="/clothes/products" component={ProductsPage}/>
        <Route exact path="/clothes/products/:productId" component={ProductPage}/>  */}
      </Switch>
    {/* <Footer/> */}
  </>
)

export default App;
