import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'font-awesome/css/font-awesome.min.css';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="pt-5 pb-3 bg-dark">
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className="qr-wrapper">
                                <img src="public/images/qr.jpeg" alt="QR" />
                                <p className="mt-2 text-light">P52100024682</p>
                            </div>
                        </Col>
                        <Col md={10} lg={8}>
                            <div className="footer-info-wrapper text-center">
                                <img src="public/images/logo.png" alt="Footer Logo" className="w-25"/>
                                <div className="contact-wrapper">
                                    <p className="text-light mt-3 mb-1">For any inquiries, questions, or to register your interest, please contact us using the details below</p>
                                    <p className="text-light"><FontAwesomeIcon icon={faBuilding} /> Tyni Audyogic Wasahat, Kondhwa, Pune, Maharashtra 411048</p>

                                    <div className="divider-line"></div>
                                </div>
                                <div className="rera-wrapper mt-3">
                                    <p className="mb-1 text-light">MahaRERA Registration No: P52100024682 | The project name is Wellwisher Abode.</p>
                                    <p className="text-light">For more details visit the website: <a href="https://maharera.mahaonline.gov.in" className="text-light text-decoration-none">https://maharera.mahaonline.gov.in</a></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;