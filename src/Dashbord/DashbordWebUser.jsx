import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const DashbordWebUser = () => {

    const { isLoading, error, data = [], refetch } = useQuery({
        queryKey: ['classData'],
        queryFn: () => fetch(`http://localhost:5000/users`)
            .then(res => {
                return res.json()
            })
    })

    const updateteacher = (email) => {
        fetch(`http://localhost:5000/adminrole/teacher/${email}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }

    const updateadmin = (email) => {
        fetch(`http://localhost:5000/adminrole/admin/${email}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }


    return (
        <Container>
            <Row>
                <h2 className='text-center'>Web User Information</h2>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th className='text-center border border-1'>Number</th>
                                <th className='text-center border border-1'>Status</th>
                                <th className='text-center border border-1'>Email</th>
                                <th className='text-center border border-1'>Admin</th>
                                <th className='text-center border border-1'>Teacher</th>
                                <th className='text-center border border-1'>Image</th>
                            </tr>
                        </thead>
                        {
                            data.map((web, index) => <tbody key={index}>
                                <tr>
                                    <td className='text-center border border-1'>{index + 1}</td>
                                    <td className='text-center border border-1'>{web.role || 'User'}</td>
                                    <td className='text-center border border-1'>{web.email}</td>
                                    <td className='text-center border border-1'><button className='btn btn-success text-center' onClick={() => updateadmin(web.email)}>Admin</button></td>
                                    <td className='text-center border border-1'><button className='btn btn-primary' onClick={() => updateteacher(web.email)}>Teacher</button></td>
                                    <td className='text-center border border-1'><img src={web.img} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" /></td>

                                </tr>
                            </tbody>)
                        }
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default DashbordWebUser;