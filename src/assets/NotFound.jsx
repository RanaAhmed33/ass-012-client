import React from 'react';
import notfoundImg from '../assets/notfound.jpg'


import { Container, Row, Col, Button } from 'react-bootstrap';


const NotFound = () => {
    return (
        <Container>
            <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                <img className='img-fluid' src={notfoundImg} alt="" />
            </div>
        </Container>
    );
};

export default NotFound;