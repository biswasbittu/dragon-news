import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Latestnews from '../../components/Latestnews/Latestnews';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <header className='mt-8'>
                <Header/>
                <section className='w-11/12 mx-auto my-3'>
                    <Latestnews/>
                </section>
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