import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { HashLoader } from 'react-spinners';
import { AuthContext } from '../Provider/AuthProvider';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyClassDashbord = () => {
    // const [classData, setClassData] = useState([])
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [feedback, setFeedback] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const alternative = 'No Data Found'
    const myModal = <>
        <Modal show={show} centered onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <b>FeedBack:{feedback || alternative}</b>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>


    // useEffect(() => {
    //     fetch(`https://project12-server-ranaahmed33.vercel.app/class/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setClassData(data)

    //         })
    // }, [])


    const { isLoading, error, data = [], refetch } = useQuery({
        queryKey: ['classData'],
        queryFn: () => fetch(`https://project12-server-ranaahmed33.vercel.app/class/${user?.email}`)
            .then(res => {
                return res.json()
            })
    })


    const deleteData = (id) => {
        const ready = confirm('are you sure you want to delete this data ? ')
        if (ready) {
            fetch(`https://project12-server-ranaahmed33.vercel.app/deleteclass/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                })
        }
    }

    return (
        <Container>
            <Row>
                <h2 className='text-center'>My Class</h2>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th className='border border-1'>Number</th>
                                <th className='border border-1'>Class Name</th>
                                <th className='border border-1'>Current Status</th>
                                <th className='border border-1'>Total Seat</th>
                                <th className='border border-1'>Edit Classes</th>
                                <th className='border border-1'>Admin FeedBack</th>
                                <th className='border border-1'>Remove Classes</th>
                            </tr>
                        </thead>
                        {
                            data.map((tableData, index) => <tbody>
                                <tr>
                                    <td className='border border-1'>{index + 1}</td>
                                    <td className='border border-1'>{tableData.classTitle}</td>
                                    <td className='border border-1'>{tableData.status}</td>
                                    <td className='border border-1'>{tableData.availableSeats}</td>
                                    <td className='border border-1'><button className='btn btn-success'><Link style={{ textDecoration: 'none', color: 'white' }} to={`/dashbord/edit/${tableData._id}`}>Edit Class</Link></button></td>
                                    <td onClick={() => setFeedback(tableData.feedback.feedback)} className='border border-1'><button className='btn btn-warning' onClick={handleShow}>FeedBack</button></td>
                                    {myModal}
                                    <td onClick={() => deleteData(tableData._id)} className='border border-1'><button className='btn btn-danger'>Remove</button></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default MyClassDashbord;