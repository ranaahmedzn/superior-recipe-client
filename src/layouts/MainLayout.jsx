import React from 'react';
import Header from '../pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-88px)] bg-black'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;