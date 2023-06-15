import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Instrctor = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <Container>
            <Row>
                {
                    teachers.map((item, index) => {
                        return <Col md={4} sm={6} className='mt-5 mb-5 mx-auto text-center'>
                            <div className='mt-5 p-2 mx-auto text-center' style={{ width: '200px', height: '200px' }} >
                                <h4>{item.displayName}</h4>
                                <img src={item.img} className='img-fluid p-2' />
                                <h6>Email:{item.email}</h6>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </Container>
    );
};

export default Instrctor;