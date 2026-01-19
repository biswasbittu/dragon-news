import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <header className='mt-8'>
                <Header/>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="maain">
                    <Outlet></Outlet>
                </section>
                <section className="Right_nav"></section>

            </main>
        </div>
    );
};

export default Home;