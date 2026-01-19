import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className=' flex flex-col gap-4 items-center justify-center'>
                <img src={logo} alt="" />
                <p className='my-2 '>Journalism Without Fear or Favour</p>
            </div>
            <h1>This is Header</h1>
        </div>
    );
};

export default Header;