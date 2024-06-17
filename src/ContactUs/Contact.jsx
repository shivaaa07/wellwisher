import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css"

const ContactUs = () => {
  return (
    <>
      <section id="contact">
        <Container fluid>
          <Row>
            <Col md={6} className="ps-0 pe-0">
              <div className="mapWrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7569.122678916164!2d73.89049009568525!3d18.45821565740776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea575435f737%3A0x3d76788ba35aa3bb!2sTyni%20Audyogic%20Wasahat%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1718270475996!5m2!1sen!2sin"
                  style={{ border: "0", height: "450px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-100"
                ></iframe>
              </div>
            </Col>
            <Col md={6} className="bg-secondary ps-0 bg-img">
              <div className="LocationHead mt-4">
                <h2 className="over-heading">Contact Us</h2>
                <div className="divider"></div>
              </div>
              <div className="fromWrapper offset-md-3 mb-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGroupPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Phone Number"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="primary" type="submit" className="col-md-offset-3">
                        Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
