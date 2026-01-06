import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div className='sulaimanFont'>
            <Navbar></Navbar>
            <div className='max-w-7xl  mx-auto mb-10 px-4 md:px-0' >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;