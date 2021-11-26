import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"


const Styles = styled.div`
a, navbar-brand, navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
        color: white
    }
}
`

export default function NaviBar() {


const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
    
    return (

        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Ermolov TEST</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link> <Link to="/"> Home </Link> </Nav.Link>
                                <Nav.Link> <Link to="/users"> Users </Link> </Nav.Link>
                                <Nav.Link> <Link to="/about"> About </Link> </Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="mr-2" onClick={handleShow}> Log in </Button>
                                <Button variant="primary" onClick={handleShow}> Sign out </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>

            <Modal show={show} onClick={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title> Залогиниться </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group countroldId="fromBascEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Введите email" />
                        </Form.Group>
                        <Form.Group countroldId="fromBascPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль" />
                        </Form.Group>
                        <Form.Group countroldId="fromBascCheckbox">
                            <Form.Check type="checkbox" label="Запомнить меня" />
                        </Form.Group>
                    </Form>
                    </Modal.Body>

            </Modal>
        </>
    )
}