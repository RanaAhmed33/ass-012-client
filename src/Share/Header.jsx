import React, { useContext } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <Container fluid style={{ background: 'black' }}>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home"><span style={{ color: 'white' }}>Drawing <span style={{ color: 'yellow' }}>School</span></span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='p-1 mx-2' style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>

                            <Link className='p-1 mx-2' style={{ textDecoration: 'none', color: 'white' }} to='/teacher'>Instructors</Link>

                            <Link className='p-1 mx-2' style={{ textDecoration: 'none', color: 'white' }} to='/class'>Classes</Link>

                            {user?.email && <>
                                <Link className='p-1 mx-2' style={{ textDecoration: 'none', color: 'white' }} to='/dashbord'>Dashboard </Link>

                                <Link className='p-1 mx-2' style={{ textDecoration: 'none', color: 'white', }}>
                                    <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
                                </Link>
                            </>}



                            {user?.email ? <Link onClick={() => logout()} className='p-1 mx-2' style={{ textDecoration: 'none', color: 'white' }} >Logout</Link>
                                :
                                <Link to='/login' className='p-1 mx-2' style={{ textDecoration: 'none', color: 'white' }} >Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );
};

