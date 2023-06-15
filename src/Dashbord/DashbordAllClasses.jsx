import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';



const DashbordAllClasses = () => {
    const [allClass, setAllClass] = useState([])
    const [show, setShow] = useState(false);
    const [textAriaValue, setTextAriaValue] = useState('')
    const [getId, setGetId] = useState('')


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { isLoading, error, data = [], refetch } = useQuery({
        queryKey: ['classData'],
        queryFn: () => fetch(`https://project12-server-ranaahmed33.vercel.app/allclass`)
            .then(res => {
                return res.json()
            })
    })

    const handeleDenied = () => {
        fetch(`https://project12-server-ranaahmed33.vercel.app/classupdate/${getId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback: textAriaValue })
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount === 1) {
                    alert('successfully send feedback')
                }
            })
    }

    const deniedInfo = () => {
        fetch(`https://project12-server-ranaahmed33.vercel.app/denied/${getId}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }


    const handelApproved = (id) => {
        const ready = confirm('are you sure you want to approved this class')
        if (ready) {
            fetch(`https://project12-server-ranaahmed33.vercel.app/apporved/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }
    }

    const myModal = <>  <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Send FeedBack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <textarea onChange={(e) => setTextAriaValue(e.target.value)} className='form-control' rows="5"></textarea>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={() => deniedInfo()}>
                Denied
            </Button>
            <Button onClick={() => handeleDenied()} variant="primary">
                Send FeedBack
            </Button>
        </Modal.Footer>
    </Modal></>

    return (
        <Container>
            <Row>
                <h2 className='text-center'>Admin Classes Approval Information</h2>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th className='border border-1'>Number</th>
                                <th className='border border-1'>Price</th>
                                <th className='border border-1'>Class Name</th>
                                <th className='border border-1'>Teachers Name</th>
                                <th className='border border-1'>Grade</th>
                                <th className='border border-1'>Img</th>
                                <th className='border border-1'>Approve</th>
                                <th className='border border-1'>Denied</th>


                            </tr>
                        </thead>
                        {
                            data.map((allclass, index) => <tbody key={index}>
                                <tr>
                                    <td className='border border-1'>{index + 1}</td>
                                    <td className='border border-1'>{allclass.price}</td>
                                    <td className='border border-1'>{allclass.classTitle}</td>
                                    <td className='border border-1'>{allclass.name}</td>
                                    <td className='border border-1'>{allclass.status}</td>
                                    <td className='border border-1'><img src={allclass.img} style={{ width: '100px', height: '60px', borderRadius: '10px' }} alt="" /></td>
                                    <td className='border border-1'><button onClick={() => handelApproved(allclass._id)} className='btn btn-success' disabled={allclass.status === 'approved'}>Approved</button></td>
                                    <td onClick={() => setGetId(allclass._id)} className='border border-1'><button onClick={handleShow} className='btn btn-warning'>Denied</button></td>
                                    {myModal}
                                </tr>
                            </tbody>)
                        }
                    </Table>
                </Col>
            </Row>

        </Container>
    );
};

