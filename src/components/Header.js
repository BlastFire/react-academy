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
                {
                    props.userIn ?
                        <NavItem>
                            <NavLink tag={Link} to="/top5">Top 5 Courses</NavLink>
                        </NavItem>
                        : ""
                }
            </Nav>
            <Nav className="d-flex flex-row-reverse" navbar>
                {
                    props.userIn ?
                        <NavItem>
                            <NavLink tag={Link} to="/logout">Logout</NavLink>
                        </NavItem> :
                        <NavItem>
                            <NavLink tag={Link} to="/login">Login</NavLink>
                        </NavItem>
                }
            </Nav>
        </Navbar>
    </div>
)

export default Header