import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Overview.css'
import Amenities from "../AmenitiesCards/Amenities";

const Overview = () => {

    const data = [
       { 
            title: "18+ Ultra-Modern Amenities",
            images: "/public/icons/7.png"
       },
       {
            title: "Just 2 mins from NIBM Road",
            images: "/public/icons/road.png"
       },
       {
            title: "The Biggest Carpet Area of 825 Sq.ft.",
            images: "/public/icons/area.png"
       }       
    ];

    const secondAmenities = [
        {
            title: "Entrance lobby",
            images: "/public/icons/hotel.png"
        },
        {
            title: "Attractive Interest free EMI",
            images: "/public/icons/signing.png"
        },
        {
            title: "Covered car parking",
            images: "/public/icons/car-parking.png"
        }
    ]

    return (
        <>
            <Container>
                <Row className="mt-5 mb-5">
                    <Col lg={6} className="order2">
                        <div className="overInfoWrapper ">
                            <h2 className="over-heading">Overview</h2>
                            <div className="divider"></div>
                            <div className="overBody">
                                <p>
                                    Embark on a remarkable journey with Wellwisher Group, a prominent real estate developer renowned for its unwavering commitment to excellence in Pune and Mumbai. With an impressive legacy of over 15 years, we have been crafting exceptional homes that redefine the notion of quality construction. Our reputation precedes us as we seamlessly blend world-class amenities with our signature touch, creating Wellwisher Abode that inspire and elevate.
                                </p>
                                <div className="d-xs-block d-flex gap-3">
                                    <Amenities finalData={data}/>
                                    <Amenities finalData={secondAmenities}/>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="order1">
                        <div className="img-wrapper ">
                            <img src="./public/overview.jpg" alt="Overview" className="d-none d-sm-block d-xs-block overImg"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Overview;