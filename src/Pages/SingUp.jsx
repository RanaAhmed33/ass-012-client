import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';




const SingUp = () => {
    const { registerUser, user, googleSingIn } = useContext(AuthContext)


    const { register, handleSubmit } = useForm();
    const api_key = `9fe17c186f35abb8260b7b48d725c036`
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert('password did not matched!')
            return
        }
        const image = (data.img)[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${api_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(info => {
                const mainImg = info.data.display_url
                registerUser(data.email, data.password, data.name, mainImg)
            })


    };



    return (
        <Container>
            <Row>

                <Col md={8} className='mx-auto' classNam='mb-5 border border-1'>
                    <h1 className='text-center'>SignUp </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='m-4 p-5'>
                        <input className='form-control mt-3' placeholder='Name' {...register("name", { required: true })} />

                        <input className='form-control mt-3' placeholder='Email' {...register("email", { required: true })} />

                        <input className='form-control mt-3' type='file' {...register("img", { required: true })} />

                        <input className='form-control mt-3' type='password' placeholder='password' {...register("password", { required: true })} />

                        <input className='form-control mt-3' type='password' placeholder='confirm Password' {...register("confirmPassword", { required: true })} />

                        <div className='text-center mt-5'>
                            <input className='bg-success btn' type="submit" />
                        </div>
                        <h6>If you have already an account please<Link to='/login'>Login</Link></h6>
                    </form>
                    <div className='text-center'>
                        <button className='text-white btn btn-success' onClick={() => googleSingIn()}>Sing In With Google </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingUp;