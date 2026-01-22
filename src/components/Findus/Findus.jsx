import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Findus = () => {
    return (
        <div className='my-12'>
            <h1 className='font-semibold text-xl'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full font-normal ">
                    <button className="btn join-item bg-white justify-start gap-5"> <FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item bg-white justify-start gap-5"><FaTwitter/> Twitter</button>
                    <button className="btn join-item bg-white justify-start gap-5"><FaInstagram/> Instegram</button>
                </div>
            </div>
        </div>
    );
};

export default Findus;