import React, { useContext } from 'react';
import Header from '../pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer/Footer';
import { AuthContext } from '../providers/AuthProvider';
import LoaderPage from '../pages/LoaderPage/LoaderPage';

const MainLayout = () => {
    const {loader} = useContext(AuthContext)

    if(loader){
        return <LoaderPage />
    }

    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;