import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Rightaside from '../../Rightaside/Rightaside';
import Newsdetailscard from '../../Newsdetailscard/Newsdetailscard';
import { useLoaderData, useParams } from 'react-router';

const Newsdetails = () => {
    const data = useLoaderData()
    const {id}= useParams();
    const [news,setNews]=useState({})
    // console.log(news)
    useEffect(()=>{
        const newsDetails= data.find(singleNews=>singleNews.id == id);
        setNews(newsDetails)
    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
            <section className='col-span-9'>
                <h2 className='font-bold'>Dragon News</h2>
                <Newsdetailscard key={news.id} news={news}/>
            </section>
            <aside className='col-span-3 '>
                <Rightaside/>
            </aside>

            </main>
        </div>
    );
};

export default Newsdetails;