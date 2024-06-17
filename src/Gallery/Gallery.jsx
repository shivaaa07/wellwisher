import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

const Gallery = () => {


    Fancybox.bind("[data-fancybox='gallery']", {
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
            <section id="gallery">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2 className="over-heading">Gallery</h2>
                            <div className="divider"></div>
                        </Col>
                        <Col md={12}>
                            <div className="tabsWrapper">
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                    >
                                    <Tab eventKey="home" title="Elevation">
                                        <div className="tabBody">
                                        <Swiper
                                            slidesPerView={3}
                                            spaceBetween={30}
                                            freeMode={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            breakpoints={{
                                                '@0.00': {
                                                  slidesPerView: 1,
                                                  spaceBetween: 10,
                                                },
                                                '@0.75': {
                                                  slidesPerView: 2,
                                                  spaceBetween: 20,
                                                },
                                                '@1.00': {
                                                  slidesPerView: 3,
                                                  spaceBetween: 40,
                                                },
                                                '@1.50': {
                                                  slidesPerView: 3,
                                                  spaceBetween: 50,
                                                },
                                            }}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                              }}
                                            modules={[FreeMode, Pagination]}
                                            className="mySwiper"
                                        >
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/ele/ele1.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/ele/ele1.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/ele/ele2.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/ele/ele2.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/ele/ele3.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/ele/ele3.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/ele/ele2.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/ele/ele2.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Interior">
                                        <div className="tabBody">
                                            <Swiper
                                                slidesPerView={3}
                                                spaceBetween={30}
                                                freeMode={true}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                breakpoints={{
                                                    '@0.00': {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                    },
                                                    '@0.75': {
                                                    slidesPerView: 2,
                                                    spaceBetween: 20,
                                                    },
                                                    '@1.00': {
                                                    slidesPerView: 3,
                                                    spaceBetween: 40,
                                                    },
                                                    '@1.50': {
                                                    slidesPerView: 3,
                                                    spaceBetween: 50,
                                                    },
                                                }}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                modules={[FreeMode, Pagination]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/gal1.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/gal1.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/gal2.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/gal2.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/gal3.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/gal3.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/gal2.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/gal2.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="contact" title="Floor Plans">
                                        <div className="tabBody">
                                            <Swiper
                                                slidesPerView={3}
                                                spaceBetween={30}
                                                freeMode={true}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                breakpoints={{
                                                    '@0.00': {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                    },
                                                    '@0.75': {
                                                    slidesPerView: 2,
                                                    spaceBetween: 20,
                                                    },
                                                    '@1.00': {
                                                    slidesPerView: 3,
                                                    spaceBetween: 40,
                                                    },
                                                    '@1.50': {
                                                    slidesPerView: 3,
                                                    spaceBetween: 50,
                                                    },
                                                }}
                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 200,
                                                    disableOnInteraction: true,
                                                }}
                                                modules={[Autoplay,FreeMode, Pagination]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/floor/1.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/floor/1.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/floor/2.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/floor/2.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                {/* <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/gal3.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/gal3.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="fancyImgWrapper">
                                                        <a href="http://localhost/wellwisher-group/images/gallery/gal2.jpg" data-fancybox="gallery" data-caption="Badminton">
                                                            <img src="http://localhost/wellwisher-group/images/gallery/gal2.jpg" />
                                                        </a>
                                                    </div>
                                                </SwiperSlide> */}
                                            </Swiper>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Gallery;