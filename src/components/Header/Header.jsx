import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className=' flex flex-col gap-4 items-center justify-center'>
                <img src={logo} alt="" />
                <p className='my-2 text-gray-500'>Journalism Without Fear or Favour</p>
                {/* <p> Sunday, November 27, 2025</p> */}
                <p className=''>{format(new Date(), "EEEE")}, {format(new Date(), 'LLLL')} {format(new Date(), 'dd')}, {format(new Date(), 'uuuu')}</p>
            </div>

            <h1></h1>
        </div>
    );
};

export default Header;