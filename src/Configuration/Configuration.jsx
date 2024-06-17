import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Overview/Overview.css";
import "./Configuration.css"

const Configuration = () => {
    return (
        <>
            <section id="configuration">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="overlay"></div>
                            <div className="config-wrapper">
                                <div className="confHead">
                                    <h2 className="confHeading text-center text-light">Configuration</h2>
                                    <div className="divider"></div>
                                </div>
                                <div className="confBody text-center">
                                    <table className="w-100 mt-3">
                                        <thead>
                                            <tr className="bg">
                                                <th className="confTitle">Configuration</th>
                                                <th className="confTitle">Area (Sq. Ft.)</th>
                                                <th className="confTitle">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border">2 BHK</td>
                                                <td className="border">825</td>
                                                <td className="border"><a className="btn btn-primary">Get Price</a></td>
                                            </tr>
                                            <tr>
                                                <td className="border">4 BHK</td>
                                                <td className="border">1660</td>
                                                <td className="border"><a className="btn btn-primary">Get Price</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Configuration;