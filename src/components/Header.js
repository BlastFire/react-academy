import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => (
    <div>
        <Navbar color="info" light toggleable>
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/courses">Courses</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
)

export default Header