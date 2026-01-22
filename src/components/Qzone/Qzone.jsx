import React from 'react';
import swimming_img from '../../assets/swimming.png'
import class_img from '../../assets/class.png'
import playground_img from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='font-bold'>Q-zone</h1>
            <div className=' pl-10  my-5 space-y-5'>
                 <img src={swimming_img} alt="" />

                 <img src={class_img} alt="" />
                 <img src={playground_img} alt="" />


            </div>
        </div>
    );
};

export default Qzone;