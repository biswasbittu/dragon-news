import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../pages/Login/Login';

const Authlayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar/>
            </header>

            <main className='w-11/12 mx-auto py-5'>
               <Login/>
            </main>
        </div>
    );
};

export default Authlayout;