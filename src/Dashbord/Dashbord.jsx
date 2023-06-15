import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import './allStyle/Dashbrod.css';
import { Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    const { user, logout, admin, teacher } = useContext(AuthContext);
    const [activemobile, setActivmobileMenu] = useState(false);



    return (
        <>
            <Container fluid style={{ padding: "10px 20px" }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3>
                            <span>
                                Drawing
                            </span>
                            <span style={{ color: 'black' }}>School</span>
                        </h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to='/' className='text-white' style={{ fontWeight: '700', margin: '0 10px' }} onClick={() => logout()}>Logout</Link>
                        <img src={user?.photoURL} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
                        <b onClick={() => setActivmobileMenu(!activemobile)}>
                            {/* Hamburger icon */}
                            <i style={{ color: 'black' }} className=" mx-4 fa-solid fa-bars"></i>
                        </b>
                    </div>
                </div>
                {/* Header */}
                <Row>
                    <div style={{ display: 'flex' }} className='mt-2'>
                        {/* Desktop Menu */}
                        <div style={{ height: '100vh' }} className='dashbordMenu'>
                            <ul>
                                {/* Menu Item */}
                                <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/dashbord/selectedclasses' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i class="mx-3 fa-solid fa-users"></i>Selected Classes
                                    </Link>
                                </li>
                                {/* Menu Item */}
                                {/* Menu Item */}
                                <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i className="mx-3 fa-solid fa-house"></i> Home
                                    </Link>
                                </li>
                                {/* Menu Item */}
                                {/* Menu Item */}
                                {user?.email && teacher && <><li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/dashbord/classes' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i class="mx-3 fa-solid fa-school"></i>Add Classes
                                    </Link>
                                </li>
                                    {/* Menu Item */}
                                    <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                        <Link to='/dashbord/myclass' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                            <i class="mx-3 fa-solid fa-list"></i> My Classes
                                        </Link>
                                    </li></>}
                                {/* Menu Item */}
                                {/* Menu Item */}
                                {user?.email && admin && <><li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/dashbord/allclasses' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i class="mx-3 fa-sharp fa-solid fa-globe"></i> All Classes
                                    </Link>
                                </li>
                                    {/* Menu Item */}
                                    {/* Menu Item */}
                                    <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                        <Link to='/dashbord/webuser' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                            <i class="mx-3 fa-solid fa-users"></i>Web Users
                                        </Link>
                                    </li></>}
                                <div className='mt-5'>
                                    <p className='mx-4 mt-5' onClick={() => logout()} style={{ fontWeight: '700', color: 'tomato' }}>Logout</p>
                                </div>
                            </ul>
                        </div>
                        {/* Desktop Menu */}

                        {/* Mobile Menu */}
                        <div style={{ height: '100vh' }} className={activemobile ? 'moibileMenu activemobile' : 'moibileMenu'}>
                            <ul>
                                {/* Menu Item */}
                                <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/dashbord/selectedclasses' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i class="mx-3 fa-solid fa-users"></i>Selected Classes
                                    </Link>
                                </li>
                                {/* Menu Item */}
                                {/* Menu Item */}
                                <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i className="mx-3 fa-solid fa-house"></i> Home
                                    </Link>
                                </li>
                                {/* Menu Item */}
                                {/* Menu Item */}
                                {user?.email && teacher && <><li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/dashbord/classes' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i class="mx-3 fa-solid fa-school"></i>Add Classes
                                    </Link>
                                </li>
                                    {/* Menu Item */}
                                    <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                        <Link to='/dashbord/myclass' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                            <i class="mx-3 fa-solid fa-list"></i> My Classes
                                        </Link>
                                    </li></>}
                                {/* Menu Item */}
                                {/* Menu Item */}
                                {user?.email && admin && <><li className='m-1 p-1' style={{ listStyle: "none" }}>
                                    <Link to='/dashbord/allclasses' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                        <i class="mx-3 fa-sharp fa-solid fa-globe"></i> All Classes
                                    </Link>
                                </li>
                                    {/* Menu Item */}
                                    {/* Menu Item */}
                                    <li className='m-1 p-1' style={{ listStyle: "none" }}>
                                        <Link to='/dashbord/webuser' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
                                            <i class="mx-3 fa-solid fa-users"></i>Web Users
                                        </Link>
                                    </li></>}
                                <div className='mt-5'>
                                    <p className='mx-4 mt-5' onClick={() => logout()} style={{ fontWeight: '700', color: 'tomato' }}>Logout</p>
                                </div>
                            </ul>
                        </div>
                        {/* Mobile Menu */}

                        {/* Content */}
                        <div className='mx-auto'>
                            <Outlet></Outlet>
                        </div>
                        {/* Content */}
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Dashbord;
