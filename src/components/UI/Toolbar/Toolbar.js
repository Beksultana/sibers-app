import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import "./Toolbar.css"
const Toolbar = () => {
    return (
        <Navbar  dark light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Contacts</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterNavLink} to="/" exact>Contacts</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Toolbar;