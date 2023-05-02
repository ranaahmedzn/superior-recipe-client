import React from 'react';
import Header from '../pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-88px)] bg-black'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;