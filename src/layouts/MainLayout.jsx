import React from 'react';
import Header from '../pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer/Footer';
import Banner from '../pages/Home/Banner/Banner';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;