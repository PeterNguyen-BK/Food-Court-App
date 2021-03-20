import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Foods from './components/Foods';
import { CartProvider } from './contexts/CartContext';
import { NavProvider } from './contexts/NavContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart';

const App = () => {

  return (
    <Router>
      <CartProvider>
        <NavProvider>
          <div className="App">
            <header className="App-header">
            </header>
            <NavBar />
            <Switch>
              <Route path="/" exact component = {Foods}/>
              <Route path="/cart/" exact component = {Cart}/>
            </Switch>
          </div>
        </NavProvider>
      </CartProvider>
    </Router>
  );
    
}

export default App;
