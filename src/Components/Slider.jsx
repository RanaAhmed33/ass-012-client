import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Slider = () => {
    return (
        <Container fluid>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid"
                            src={img1}
                            style={{ height: '650px', width: '100%' }}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid"
                            src={img2}
                            style={{ height: '650px', width: '100%' }}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid"
                            src={img3}
                            style={{ height: '650px', width: '100%' }}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
};

