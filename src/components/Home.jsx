import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Slider from "./Slider";
import ocean from '../img/ocean.jfif'
import Jumbotron from "./Jumbotron";
import ocean1 from '../img/ocean1.jpg'



export default function Home() {
    return (

        <>
            <Slider />
            <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>

                <Row>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={ocean} />
                            <Card.Body>
                                <Card.Title>Тест карточки</Card.Title>
                                <Card.Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas suscipit ullam maiores. Odit, blanditiis praesentium!
                                    Deleniti accusantium eaque ipsa,
                                    nihil deserunt ad quidem quae expedita ducimus sunt id, voluptas animi.
                                </Card.Text>
                                <Button variant="primary">Узнать подробнее </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={ocean} />
                            <Card.Body>
                                <Card.Title>Тест карточки</Card.Title>
                                <Card.Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas suscipit ullam maiores. Odit, blanditiis praesentium!
                                    Deleniti accusantium eaque ipsa,
                                    nihil deserunt ad quidem quae expedita ducimus sunt id, voluptas animi.
                                </Card.Text>
                                <Button variant="primary">Узнать подробнее </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={ocean} />
                            <Card.Body>
                                <Card.Title>Тест карточки</Card.Title>
                                <Card.Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas suscipit ullam maiores. Odit, blanditiis praesentium!
                                    Deleniti accusantium eaque ipsa,
                                    nihil deserunt ad quidem quae expedita ducimus sunt id, voluptas animi.
                                </Card.Text>
                                <Button variant="primary">Узнать подробнее </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={ocean} />
                            <Card.Body>
                                <Card.Title>Тест карточки</Card.Title>
                                <Card.Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas suscipit ullam maiores. Odit, blanditiis praesentium!
                                    Deleniti accusantium eaque ipsa,
                                    nihil deserunt ad quidem quae expedita ducimus sunt id, voluptas animi.
                                </Card.Text>
                                <Button variant="primary">Узнать подробнее </Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>

            <Container style={{marginBottom: "30px"}}>
                <Row>
                    <Col md={7}>
                        <img src={ocean1} height={400} />
                        
                    </Col>


                    <Col md={5}>
                        <h2>Выносим Текст с Карточкой - пример!</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quas suscipit ullam maiores. Odit, blanditiis praesentium!
                            Deleniti accusantium eaque ipsa,
                            nihil deserunt ad quidem quae expedita ducimus sunt id, voluptas animi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quas suscipit ullam maiores. Odit, blanditiis praesentium!
                            Deleniti accusantium eaque ipsa,
                            nihil deserunt ad quidem quae expedita ducimus sunt id, voluptas animi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quas suscipit ullam maiores. Odit, blanditiis praesentium!
                            Deleniti accusantium eaque ipsa,
                            nihil deserunt ad quidem quae expedita ducimus sunt id, voluptas animi.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}