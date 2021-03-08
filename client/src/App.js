import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Foods from './components/Foods';
import { CartProvider } from './contexts/CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart';

class App extends Component {

  render() {
    return (
      <Router>
        <CartProvider>
          <div className="App">
            <header className="App-header">
            </header>
            <NavBar />
            <Switch>
              <Route path="/" exact component = {Foods}/>
              <Route path="/cart/" exact component = {Cart}/>
            </Switch>
          </div>
        </CartProvider>
      </Router>
    );
  }
}

export default App;
