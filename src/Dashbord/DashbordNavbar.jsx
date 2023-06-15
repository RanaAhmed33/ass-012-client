import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';

const DashbordNavbar = ({ activeHambuarget, setActiveHamburget }) => {
    const { user } = useContext(AuthContext)
    return (
        <Container fluid style={{ background: '#2B92FE' }}>
            <Row>
                <Col>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                        <h3><span style={{ color: 'white' }}>Drawing <span style={{ color: 'yellow' }}>School</span></span></h3>
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'cneter' }}>
                            <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
                            <i onClick={() => setActiveHamburget(!activeHambuarget)} class="hamburger mx-3 text-white fa-sharp fa-solid fa-bars"></i>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashbordNavbar;