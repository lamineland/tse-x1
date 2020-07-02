import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MenuBar() {
    return (
        <div>
            <Navbar variant="dark">
                <Link to="/">
                <Navbar.Brand>
                    <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Terranga Skills Engineering
                </Navbar.Brand>
                </Link>
                <Nav className="ml-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#produits">Produits</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MenuBar