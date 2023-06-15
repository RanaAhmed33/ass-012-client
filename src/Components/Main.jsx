import React from 'react';
import Home from './Home';
import Header from '../Share/Header';
import { Toaster } from 'react-hot-toast';
import Footer from '../Share/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;