import React from 'react';
import {Switch, Route} from 'react-router-dom';
/* import HomePage from './pages/Homepage';
import AuthenticationPage from './pages/AuthenticationPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage'; */
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar/>
      <Switch>
       {/*  <Route exact path="/clothes" component={HomePage}/>
        <Route exact path="/clothes/auth" component={AuthenticationPage}/>
        <Route exact path="/clothes/products" component={ProductsPage}/>
        <Route exact path="/clothes/products/product" component={ProductPage}/> */}
      </Switch>
  </>
)

export default App;
