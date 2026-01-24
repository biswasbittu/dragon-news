import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../pages/Login/Login';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4 sticky top-0 h-fit'>
                <Navbar/>
            </header>

            <main className='w-11/12 mx-auto py-5'>
               <Outlet/>
            </main>
        </div>
    );
};

export default Authlayout;