import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from "react-bootstrap";
import 'swiper/css';
import 'swiper/css/pagination';
import './AmenitiesGallery.css';
import { Pagination } from 'swiper/modules';
import "../Configuration/Configuration.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import 'bootstrap/dist/css/bootstrap.min.css';


const AmenitiesGallery = () => {

    Fancybox.bind("[data-fancybox='amenities']", {
        // Your custom options
        transitionEffect: "slide",
        loop: false,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });
      

    return (
        <>
            <section id="ameGallery">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2 className="ameHeading text-center">Amenities</h2>
                            <div className="divider"></div>
                        </Col>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mt-4 d-none d-sm-none d-lg-block"
                    >
                        <SwiperSlide>
                            <Col lg={12}>
                                <Row>
                                    <Col lg={7}>
                                        <div className="fancyImgWrapper me-1">
                                            <a href="http://localhost/wellwisher-group/images/aminities/Badminton.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/Badminton.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="fancyImgWrapper ms-1">
                                            <a href="http://localhost/wellwisher-group/images/aminities/pool.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/pool.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col lg={4}>
                                        <div className="fancyImgWrapper ms-1">
                                            <a href="http://localhost/wellwisher-group/images/aminities/Basketball.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/Basketball.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="fancyImgWrapper ms-1">
                                            <a href="	http://localhost/wellwisher-group/images/aminities/Cricket.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="	http://localhost/wellwisher-group/images/aminities/Cricket.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="fancyImgWrapper ms-1">
                                            <a href="http://localhost/wellwisher-group/images/aminities/Minifootball.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/Minifootball.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Col lg={12}>
                                <Row>
                                    <Col lg={7}>
                                        <div className="fancyImgWrapper me-1">
                                            <a href="http://localhost/wellwisher-group/images/aminities/Badminton.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/Badminton.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="fancyImgWrapper ms-1">
                                            <a href="http://localhost/wellwisher-group/images/aminities/pool.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/pool.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col lg={4}>
                                        <div className="fancyImgWrapper">
                                            <a href="http://localhost/wellwisher-group/images/aminities/Basketball.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/Basketball.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="fancyImgWrapper">
                                            <a href="	http://localhost/wellwisher-group/images/aminities/Cricket.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="	http://localhost/wellwisher-group/images/aminities/Cricket.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="fancyImgWrapper">
                                            <a href="http://localhost/wellwisher-group/images/aminities/Minifootball.jpg" data-fancybox="amenities" data-caption="Badminton">
                                                <img src="http://localhost/wellwisher-group/images/aminities/Minifootball.jpg" />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                    </Swiper>

                {/* ************************************* Mobile View ************************  */}

                    <Swiper
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper d-block d-lg-none mt-3"
                    >
                        <SwiperSlide>
                            <div className="fancyImgWrapper me-1">
                                <a href="http://localhost/wellwisher-group/images/aminities/Badminton.jpg" data-fancybox="amenities" data-caption="Badminton">
                                    <img src="http://localhost/wellwisher-group/images/aminities/Badminton.jpg" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fancyImgWrapper ms-1">
                                <a href="http://localhost/wellwisher-group/images/aminities/pool.jpg" data-fancybox="amenities" data-caption="Badminton">
                                    <img src="http://localhost/wellwisher-group/images/aminities/pool.jpg" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fancyImgWrapper ms-1">
                                <a href="http://localhost/wellwisher-group/images/aminities/Basketball.jpg" data-fancybox="amenities" data-caption="Badminton">
                                    <img src="http://localhost/wellwisher-group/images/aminities/Basketball.jpg" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fancyImgWrapper ms-1">
                                <a href="	http://localhost/wellwisher-group/images/aminities/Cricket.jpg" data-fancybox="amenities" data-caption="Badminton">
                                    <img src="	http://localhost/wellwisher-group/images/aminities/Cricket.jpg" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fancyImgWrapper ms-1">
                                <a href="http://localhost/wellwisher-group/images/aminities/Minifootball.jpg" data-fancybox="amenities" data-caption="Badminton">
                                    <img src="http://localhost/wellwisher-group/images/aminities/Minifootball.jpg" />
                                </a>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AmenitiesGallery;