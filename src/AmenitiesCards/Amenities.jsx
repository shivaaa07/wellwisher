import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Amenities.css'

const Amenities = ({finalData}) => {

    console.log(finalData.images,'final data');
    
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>    
                        { 
                            finalData.map((ele, index) => (
                                <div className="iconWrapper" key={index}>
                                    <img src={ele.images} alt="Ultra Modern Amenities" className="overviewIcons"/>
                                    <div className="iconTitle">
                                        <p className="mb-0">{ele.title}</p>
                                    </div>
                                </div>
                             ))
                            }
                      
                        {/* <div className="iconWrapper">
                            <img src="./public/icons/7.png" alt="Ultra Modern Amenities" className="overviewIcons"/>
                            <div className="iconTitle">
                                <p className="mb-0">18+ Ultra-Modern Amenities</p>
                            </div>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Amenities;