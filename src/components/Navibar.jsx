import React from "react";
import { Navbar, Nav, Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"




export default function NaviBar() {
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand>Ermolov TEST</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link> <Link to="/"> Home </Link> </Nav.Link>
                        <Nav.Link> <Link to="/users"> Users </Link> </Nav.Link>
                        <Nav.Link> <Link to="/about"> About </Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2"> Log in </Button>
                        <Button variant="primary"> Sign out </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}