import React, { useContext, useRef, useState } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { NavContext } from '../contexts/NavContext';
import { FiShoppingCart } from 'react-icons/fi';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import user from './user.svg';

const NavBar = () => {
    const {Foods, addToCart} = useContext(CartContext);
    const {Filters, handlePageChange, handleFilterChange} = useContext(NavContext);
    // const {searchTerm, handleSearchTerm} = useContext(NavContext);
    const [Term, setTerm] = useState('');
    const typingTimeoutRef = useRef(null);
    const handleSearchTerm = (e) => {
        const value = e.target.value;
        setTerm(value);
    }

    const clickSearchBtn = (e) => {
        if (!handleFilterChange) return;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const obj = {
                term: Term
            };
            handleFilterChange(obj.term);
        }, 300); 
    }

    const preventRefresh = (e) => {
        e.preventDefault();
        if (!handleFilterChange) return;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const obj = {
                term: Term
            };
            handleFilterChange(obj.term);
        }, 300); 
    }

    const toHomePage = () => {
        localStorage.removeItem('Filters');
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className="ml-4">
                <Link to="/" style={{ textDecoration: 'none', color: 'rgba(0,0,0,.5)' }} onClick={toHomePage}>Food Court</Link>
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
                    <Form inline className="w-50 ml-5" onSubmit={preventRefresh}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-75" value={Term} onChange={handleSearchTerm}/>
                        <Button variant="outline-success" onClick={clickSearchBtn}>Search</Button>
                    </Form>
                    <Nav className="mr-0" style={{width: '200px'}}>
                        <img src={user} style={{width: '12%'}} className="mr-sm-2" />
                        <NavDropdown title="Your Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign up</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign in with Facebook</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign in with Google</NavDropdown.Item>
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