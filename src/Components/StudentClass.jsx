import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const StudentClass = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [allclass, setAllClass] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://project12-server.vercel.app/allclassapprove`)
            .then(res => res.json())
            .then(data => setAllClass(data))
    }, [])

    const AddToCart = (data) => {
        const ready = confirm('are you sure you want to purchase this class')
        const information = {
            backupId: data._id,
            email: user?.email,
            img: data.img,
            name: data.name,
            classTitle: data.classTitle,
            availableSeats: data.availableSeats,
            price: data.price,
        }
        if (ready) {
            fetch(`https://project12-server.vercel.app/purchase`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(information)
            })
                .then(res => res.json())
                .then(data => {
                    alert('purchase complete')
                })
        }

    }

    const notUser = () => {
        alert('first you have to login then select classes')
        navigate("/login", { state: { from: location } })
    }

    return (
        <Container>
            <Row>
                {
                    allclass.map((item, index) => {
                        return <Col md={3} sm={6} key={index}>
                            <div className='border border-1 m-4 p-2'>
                                <h4>{item.classTitle.slice(0, 25)}</h4>
                                <img src={item.img} className='img-fluid p-2' alt="" />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p><b>Price: ${item.price}</b></p>
                                    <p><b>Seats: {item.availableSeats}</b></p>
                                </div> <hr />
                                <h6 className='text-center' style={{ color: 'tomato' }}>Instructors: {item.name}</h6>
                                <div className='text-center'>
                                    {user?.email ? <button onClick={() => AddToCart(item)} style={{ fontWeight: '600' }} className='btn btn-info'>Add to purchase</button>
                                        :
                                        <button onClick={() => notUser()} style={{ fontWeight: '600' }} className='btn btn-info'>Add to purchase</button>}
                                </div>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </Container>
    );
};

export default StudentClass;