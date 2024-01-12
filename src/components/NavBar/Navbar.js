import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Outlet, Link} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/Home'>MacCompras!</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='Home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='Productos'>Productos</Nav.Link>
                        <Nav.Link as={Link} to='Nosotros'>Nosotros</Nav.Link>
                        <CartWidget/>
                    </Nav>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default NavBar;
