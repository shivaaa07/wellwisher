import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import './Location.css'

const Location = () => {
    return (
        <>
            <section id="location">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="LocationHead">
                                <h2 className="over-heading">Location</h2>
                                <div className="divider"></div>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-4 order2">
                            <div className="accordionWrapper">
                                <Accordion defaultActiveKey={['0']}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Connectivity</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Katraj - 5KM</li>
                                                <li>Market Yard - 5.1KM</li>
                                                <li>Camp - 7.4KM</li>
                                                <li>Swargate - 7.5KM</li>
                                                <li>Magarpatta - 10KM</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Health Care</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Care Hospital - 1KM</li>
                                                <li>Prime Hospital - 3KM</li>
                                                <li>Ruby Hall Clinic - 4.5KM</li>
                                                <li>Commond Hospital - 6.6KM</li>
                                                {/* <li>Magarpatta - 10KM</li> */}
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Shopping and Entertainment</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>D-Mart - 2KM</li>
                                                <li>Dorabjee's Mall - 3KM</li>
                                                <li>Kumar Pacific - 3KM</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Restaurant</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Jyoti Restaurant - 2.4KM</li>
                                                <li>Bliss Bakery Cafe - 3.4KM</li>
                                                <li>Betos's Bar and Kitchen - 3.8KM</li>
                                                <li>Area 37 Club - 4.3KM</li>
                                                <li>Corinthians Club - 6.8KM</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mapWrapper mt-2 order1">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7569.122678916164!2d73.89049009568525!3d18.45821565740776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea575435f737%3A0x3d76788ba35aa3bb!2sTyni%20Audyogic%20Wasahat%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1718270475996!5m2!1sen!2sin" style={{border:"0", height:"400px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-100"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Location;
