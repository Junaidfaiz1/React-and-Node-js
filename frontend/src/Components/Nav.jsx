import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="primary">
            <Navbar.Brand href="#">Website Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                {/* Left-hand Side Links */}
                <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">News</Nav.Link>
                    <Nav.Link href="#home"></Nav.Link>
                    <Nav.Link href="#about">Blogs</Nav.Link>
                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action1">Service 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action2">Service 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">More Services</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                {/* Right-hand Side Form */}
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-0"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>

                {/* User Authentication Options */}
                <Nav>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
