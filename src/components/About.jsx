import React from "react";
import { Container, ButtonToolbar, ButtonGroup, Button, SplitButton, Dropdown, Breadcrumb, Form, Row, Col  } from "react-bootstrap";
export default function About() {
    return (

        <>
            <Container>
            <h1> Это группа кнопок</h1>
                <ButtonToolbar aria-label="Toolbar with button groups" style={{ marginBottom: "100px" }}>
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                </ButtonGroup>
            </ButtonToolbar>

            <h1> Это Select</h1>
            {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                (variant) => (
                    <SplitButton style={{ marginBottom: "100px" }}
                        key={variant}
                        id={`dropdown-split-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title={variant}
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>
                ),
            )}

            <h1> Это Хлебные крошки </h1>

                <Breadcrumb style={{ marginBottom: "100px" }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                

                <h1> Это Форма </h1>

                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>



            </Container>
        </>
    )
}