import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ExtraSection = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the message
        console.log('Message:', message);
        setMessage('');
    };

    return (
        <Container fluid className='message pt-5 mb-5'>
            <Row>
                <h1 className='text-center text-white'> Message </h1>
                <Col className='col-md-8 mx-auto'>
                    <input type="text" className='form-control mt-4' placeholder='Input Your Email' />
                    <textarea rows={8} type="text" className='mt-4 form-control' placeholder='Input Your Opinion ' />
                </Col>
            </Row>
        </Container>
    );
};

export default ExtraSection;