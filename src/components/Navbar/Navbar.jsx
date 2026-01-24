import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center'>
            <div></div>
            <div className='flex gap-8 text-gray-500'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>


            </div>
            <div className='flex items-center gap-4'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={user} />
                    </div>
                </div>
                <Link to='/auth/register' className='btn btn-primary px-10'>Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;