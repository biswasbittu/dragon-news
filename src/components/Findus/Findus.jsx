import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import fb from '../../assets/fb.png'
import twit from '../../assets/twitter.png'
import inst from '../../assets/instagram.png'


const Findus = () => {
    return (
        <div className='my-12'>
            <h1 className='font-semibold text-xl'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full font-normal ">
                    <button className="btn join-item bg-white justify-start gap-5">  <img src={fb} alt="" /> Facebook</button>
                    <button className="btn join-item bg-white justify-start gap-5"> <img src={twit} alt="" /> Twitter</button>
                    <button className="btn join-item bg-white justify-start gap-5"> <img src={inst} alt="" /> Instegram</button>
                </div>
            </div>
         
        </div>
    );
};

export default Findus;