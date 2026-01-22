import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Latestnews from '../../components/Latestnews/Latestnews';
import Navbar from '../../components/Navbar/Navbar';
import Leftaside from '../../components/LeftAside/Leftaside';
import Rightaside from '../../components/Rightaside/Rightaside';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <header className='mt-8'>
                <Header/>
                <section className='w-11/12 mx-auto my-3'>
                    <Latestnews/>
                </section>
                <nav className='w-11/12 mx-auto my-3' >
                <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-4'>
                <aside className='col-span-3'>
                    <Leftaside></Leftaside>
                </aside>
                <section className=" col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <Rightaside/>
                </aside>

            </main>
        </div>
    );
};

export default Root;