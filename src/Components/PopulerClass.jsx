import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PopulerClass = () => {
    const [populer, setPopuler] = useState([])

    useEffect(() => {
        fetch(`https://project12-server-ranaahmed33.vercel.app/allclassapprove`)
            .then(res => res.json())
            .then(data => setPopuler(data.slice(0, 6)))
    }, [])

    return (
        <Container>
            <Row>
                <h1 className='p-4' style={{ color: 'tomato' }}>Populer Class</h1>
                {
                    populer.map((item, index) => <Col md={4} sm={6}>
                        <div className='border border-1 m-4 p-2'>
                            <h4>{item.classTitle.slice(0, 25)}</h4>
                            <img src={item.img} className='img-fluid p-2' alt="" />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p><b>Price: {item.price}</b></p>
                                <p><b>Seats: {item.availableSeats}</b></p>
                            </div> <hr />
                            <h6 className='text-center' style={{ color: 'tomato' }}>Instructors: {item.name}</h6>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default PopulerClass;