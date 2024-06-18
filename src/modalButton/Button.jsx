import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalButton = ({ btnName, btnStyle }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("Brochure Title", btnName);

  return (
    <>
      <section id="modal-button">
        <Container>
          <Row>
            <Col md={12}>
              <div className="modal-wrapper">
                <Button variant="primary" onClick={handleShow} className={btnStyle}>
                  {btnName}
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{btnName}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="form-wrapper">
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
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="text-center">
                          <Button
                            variant="primary"
                            type="submit"
                            className="col-md-offset-3"
                          >
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Modal.Body>
                  {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer> */}
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ModalButton;
