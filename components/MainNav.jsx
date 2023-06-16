import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'

export default function MainNav() {
    return (
        <>
        <Navbar className="fixed-top" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Harikrishna Paresh Patel</Navbar.Brand>
            <Nav className="me-auto">
                <Link href="/" passHref legacyBehavior><Nav.Link>Movies</Nav.Link></Link>
                <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
            </Nav>
            </Container>
         </Navbar>
         <br/><br/>
        </>
    )
}