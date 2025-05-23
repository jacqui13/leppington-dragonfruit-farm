"use client"
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" style={{ position: "sticky", zIndex: 1 }}>
            <Container>
                <Image src="/dragon_fruit.png" width={40} height={40} alt="dragonfruit emoji" />
                <Navbar.Brand href="/home">
                    Leppington Dragonfruit Farm
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/visit-us">Visit Us</Nav.Link>
                        <Nav.Link href="/updates">Harvest Updates</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;