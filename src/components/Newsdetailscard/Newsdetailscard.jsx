import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const Newsdetailscard = ({ news }) => {
    // console.log(news)
    const { title, image_url, details,category_id } = news
    return (
        <div>

            <div className=' space-y-5 px-5 mt-8'>
                <img className='w-full h-[511px] object-cover ' src={image_url} alt="" />
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p>
                    {details
                    }
                </p>
                <Link className='btn btn-secondary' to={`/category/${category_id}`}> <FaArrowLeft /> All news in this category</Link>
            </div>
        </div>
    );
};

export default Newsdetailscard;