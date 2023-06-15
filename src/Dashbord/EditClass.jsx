import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const EditClass = () => {
    const info = useLoaderData()
    const id = info._id
    const { user } = useContext(AuthContext)
    const api_key = `9fe17c186f35abb8260b7b48d725c036`
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

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
                const myClass = {
                    img: mainImg,
                    name: data.name,
                    email: data.email,
                    classTitle: data.classTitle,
                    availableSeats: data.availableSeats,
                    price: data.price,
                    status: "pending"

                }
                fetch(`http://localhost:5000/dashbord/edit/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(myClass)
                })
                    .then(res => res.json())
                    .then(data => {
                        alert('edit success')
                    })
            })
    }
    return (

        <Container>
            <Row>
                <h2 className='text-center'>Edit Class</h2>
                {/* <Col> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='file' className='form-control p-2 w-100   mt-3' {...register("img", { required: true })} />

                    <input value={user?.displayName} type='' className='form-control p-2 w-100   mt-3' {...register("name", { required: true })} />

                    <input value={user?.email} className='form-control p-2 w-100   mt-3' {...register("email", { required: true })} />

                    <input placeholder='Class Name' type='text' className='form-control p-2 w-100   mt-3' defaultValue={info.classTitle} {...register("className", { required: true })} />

                    <input placeholder='available Seats' type='number' className='form-control p-2 w-100   mt-3' defaultValue={info.availableSeats} {...register("availableSeats", { required: true })} />

                    <input placeholder='Price' type='number' defaultValue={info.price} className='form-control p-2 w-100   mt-3' {...register("price", { required: true })} />

                    <input className='form-control p-2 w-100   mt-3' type="submit" />
                </form>
                {/* </Col> */}
            </Row>
        </Container>

    );
};

export default EditClass;