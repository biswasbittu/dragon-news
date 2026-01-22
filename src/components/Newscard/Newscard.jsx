import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';

const NewsCard = ({ news }) => {
  // আপনার ডেটা থেকে প্রয়োজনীয় অংশগুলো বের করে নেওয়া হচ্ছে
  const { title, image_url, thumbnail_url, details, rating, total_view, author } = news || {};

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200 rounded-lg overflow-hidden my-4">
      
      {/* 1. Header Section (Author info & Icons) */}
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {/* Author Image from data */}
              <img src={author?.img} alt="author" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author?.name}</p>
            {/* Date format updated (Optional: you can use moment.js for better format) */}
            <p className="text-sm text-gray-500">{author?.published_date?.split('T')[0]}</p>
          </div>
        </div>
        <div className="flex  items-center gap-2 text-gray-500">
          <button className=" cursor-pointer hover:bg-gray-100 hover:border-0 ">
            <FaRegBookmark size={24} />
            
          </button>
          <button className=" cursor-pointer  hover:bg-gray-100 hover:border-0  ">
            <IoShareSocialOutline size={24} />
          </button>
        </div>
      </div>

      {/* 2. Body Section (Title, Image, Details) */}
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h2>

        <figure className="w-full h-64 mb-4">
          <img 
            src={image_url || thumbnail_url} 
            alt="news-thumbnail" 
            className="w-full h-full object-cover rounded-md" 
          />
        </figure>

        <p className="text-gray-500 text-base leading-relaxed">
          {details?.length > 200 ? details.slice(0, 200) : details}... 
          <span className="text-orange-500 font-bold cursor-pointer ml-1">Read More</span>
        </p>
      </div>

      {/* 3. Footer Section (Rating & Views) */}
      <div className="border-t border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Dynamic Rating Stars */}
          <div className="rating rating-sm">
             {[...Array(5)].map((_, i) => (
                <input 
                  key={i}
                  type="radio" 
                  name={`rating-${rating?.number}`} 
                  className="mask mask-star-2 bg-orange-600" 
                  checked={i < Math.round(rating?.number || 0)} 
                  readOnly 
                />
             ))}
          </div>
          <span className="font-medium text-gray-600">{rating?.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{total_view}</span>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;