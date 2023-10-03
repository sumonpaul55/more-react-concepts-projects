import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Root;