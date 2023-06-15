import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom';

const SelectedClasses = () => {

    const { user } = useContext(AuthContext)

    const { isLoading, error, data = [], refetch } = useQuery({
        queryKey: ['classData'],
        queryFn: () => fetch(`https://project12-server.vercel.app/purchase/${user?.email}`)
            .then(res => {
                return res.json()
            })
    })

    if (isLoading) {
        return <HashLoader color="#36d7b7" />
    }
    refetch()
    return (
        <Container>
            <Row>
                <h1 className='text-center'>Selected Classes</h1>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th className='border border-1 border border-1 border border-1 border border-1 border border-1 text-center'>Img</th>
                                <th className='border border-1 border border-1 border border-1 border border-1 border border-1 text-center'>Instructors Name</th>
                                <th className='border border-1 border border-1 border border-1 border border-1 border border-1 text-center'>Instructors Email</th>
                                <th className='border border-1 border border-1 border border-1 border border-1 border border-1 text-center'>Class name</th>
                                <th className='border border-1 border border-1 border border-1 border border-1 border border-1 text-center'>Available Seats</th>
                                <th className='border border-1 border border-1 border border-1 border border-1 border border-1 text-center'>Price</th>
                                <th className='border border-1 border border-1 border border-1 border border-1 border border-1 text-center'>payment</th>
                            </tr>
                        </thead>
                        {
                            data.map(slectClass => <tbody key={slectClass._id}>
                                <tr>
                                    <td className='text-center'><img src={slectClass.img} style={{ width: '100px', height: '50px' }} alt="" /></td>
                                    <td className='border border-1 text-center'>{slectClass.name}</td>
                                    <td className='border border-1 text-center'>{slectClass.email}</td>
                                    <td className='border border-1 text-center'>{slectClass.classTitle}</td>
                                    <td className='border border-1 text-center'>{slectClass.availableSeats}</td>
                                    <td className='border border-1 text-center'>{slectClass.price}</td>
                                    <td className='border border-1 text-center'>
                                        <Link style={{ textDecoration: 'none' }}><button className='btn btn-success'>Pay<i class="mx-2 fa-solid fa-arrow-right"></i></button></Link>
                                    </td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default SelectedClasses;