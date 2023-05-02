import React from 'react';
import Header from '../pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;