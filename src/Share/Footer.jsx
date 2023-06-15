import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid style={{ background: 'black', height: '100%', marginTop: '30px' }}>
                <Row>
                    <Col md={4}>
                        <h2 className='mt-5' ><span style={{ color: 'white' }}>Drawing <span style={{ color: 'yellow' }}>School</span></span></h2>
                        <p style={{ color: 'gray' }}>
                            Drawing school offers comprehensive art education, fostering creativity and technical skills through various mediums and techniques, inspiring students to express themselves and develop their artistic potential.
                        </p>
                    </Col>
                    <Col md={4} className='mt-4 mx-auto text-center'>
                        <p className='text-cemter text-white'>
                            Welcome to our innovative drawing website, where your artistic imagination knows no bounds! Our platform is designed to ignite your creativity and provide you with a seamless drawing experience like no other.
                        </p>
                    </Col>
                    <Col md={4} className='mt-5 mx-auto text-center'>
                        <ul className='socialIcon' style={{ display: 'flex', justifyContent: 'center', gap: '20px', textAlign: 'center' }}>
                            <li style={{ listStyle: 'none' }}><i style={{ fontSize: '20px', color: 'white' }} className="fa-brands fa-facebook"></i></li>
                            <li style={{ listStyle: 'none' }}><i style={{ fontSize: '20px', color: 'white' }} className="fa-brands fa-instagram"></i></li>
                            <li style={{ listStyle: 'none' }}><i style={{ fontSize: '20px', color: 'white' }} className="fa-brands fa-twitter"></i></li>
                            <li style={{ listStyle: 'none' }}><i style={{ fontSize: '20px', color: 'white' }} className="fa-brands fa-pinterest"></i></li>
                        </ul>

                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;