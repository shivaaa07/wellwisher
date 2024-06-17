import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css"

const AboutUS = () => {
    return (
        <>
            <section id="aboutUs">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={12}>
                            <div className="headWrapper">
                                <h2 className="over-heading">About Us</h2>
                                <div className="divider"></div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-3">
                            <div className="aboutInfo">
                                <p className="card">
                                Embark on a remarkable journey with Wellwisher Group, a prominent real estate developer renowned for its unwavering commitment to excellence in Pune and Mumbai. With an impressive legacy of over 15 years, we have been crafting exceptional homes that redefine the notion of quality construction. Our reputation precedes us as we seamlessly blend world-class amenities with our signature touch, creating Wellwisher Abode that inspire and elevate.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutUS;