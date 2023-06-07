import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{cursor:'default'}}>
            <Container>
                <Navbar.Brand>Delivery</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Shop</Nav.Link>
                    <Nav.Link href="/shopping_cart">Shopping Cart</Nav.Link>
                    {/*<Nav.Link href="/coupons">Coupons</Nav.Link>*/}
                </Nav>
                {/*<Nav className = 'ml-auto'>*/}
                {/*    <Nav.Link href="/history">Shopping History</Nav.Link>*/}
                {/*</Nav>*/}
            </Container>
        </Navbar>
    )
};

export default NavBar;