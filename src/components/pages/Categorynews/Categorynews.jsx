import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import Newscard from '../../Newscard/Newscard';

const Categorynews = () => {
    const { id } = useParams();
    const newsData = useLoaderData()
    const [cetagoryNews, setCetagoryNews] = useState([])
    
    // console.log(newsData)
    // console.log(id)

    useEffect(() => {
         
        if (id == '0') {
            setCetagoryNews(newsData);
            return;
        }
        else if (id == '1') {
            const filterNews = newsData.filter(news => news.others.is_today_pick == true)
            setCetagoryNews(filterNews)
        }
        else {
            const filterNews = newsData.filter(news => news.category_id === parseInt(id))
            // setCetagoryNews(filterNews)
            setCetagoryNews(filterNews)
        }


    }, [newsData, id])


    return (
        <div>
            <h1 className='font-bold'>Dragon News Home</h1>
            

            <div>
                {
                    cetagoryNews.map(news=><Newscard kew={news.category_id} news={news}></Newscard>)
                }
                
             
            </div>
            
        </div>
    );
};

export default Categorynews;