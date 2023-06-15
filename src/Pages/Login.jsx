import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const goooo = location.state?.from?.pathname || "/";
    const { loginUser, googleSingIn } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const { user, error } = useContext(AuthContext)

    const onSubmit = data => {
        loginUser(data.email, data.password)
        navigate(goooo)
    };
    return (
        <Container>
            <Row>

                <Col md={8} className='mx-auto' classNam='mb-5 border border-1'>
                    <h1 className='text-center'>Login </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='m-4 p-5'>

                        <input className='form-control mt-3' placeholder='Email' {...register("email")} />


                        <input className='form-control mt-3' type='password' placeholder='password' {...register("password")} />

                        <div className='text-center mt-5'>
                            <input className='bg-success btn' type="submit" />
                        </div>
                        <h6>If you have no account please <Link to='/singup'>Register</Link></h6>
                        {error && <h6 className='text-center text-danger'>{error}</h6>}
                    </form>
                    <div className='text-center'>
                        <button className='text-white btn btn-success' onClick={() => googleSingIn()}>Sing In With Google </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

