import React, { useContext } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import user from './user.svg';

function NavBar() {
    const {Foods, addToCart} = useContext(CartContext);
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className="ml-4">
                <Link to="/" style={{ textDecoration: 'none', color: 'rgba(0,0,0,.5)' }}>Food Court</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-3 mr-5">
                        <NavDropdown title="Food Type" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Noodle</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Snack</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Rice</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline className="w-50 ml-5">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-75"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="mr-0" style={{width: '200px'}}>
                        <img src={user} style={{width: '12%'}} className="mr-sm-2" />
                        <NavDropdown title="Your Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link to="/cart/" style={{ textDecoration: 'none', color: 'rgba(0,0,0,.5)' }}>
                            <FiShoppingCart /> ({Foods.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)})
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;