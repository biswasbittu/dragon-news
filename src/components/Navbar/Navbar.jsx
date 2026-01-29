import React, { use } from 'react';
import { NavLink } from 'react-router';
import userIcon from '../../assets/user.png'
import { Link } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import button from 'daisyui/components/button';

const Navbar = () => {
    const {user,logOut} =use(AuthContext)
    const handleLogOut = ()=>{
        
        logOut().then(()=>alert('Log Out')).catch(error=>error)
    }
    return (
        <div className=' flex justify-between items-center'>
            <div className=' bg-amber-500 border-2 w-36 font-bold rounded-4xl  text-center text-white'>{user && user.displayName} </div>

            <div className='flex gap-8 text-gray-500'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>


            </div>
            <div className='flex items-center gap-4'>

                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img className='w-12 rounded-full' src={`${user ? user.photoURL : userIcon}`} />
                    </div>
                </div>

                {
                    user ? <button onClick={handleLogOut} className='btn  bg-gray-700 hover:bg-gray-800 text-white border-none mt-4'>Log Out</button> :<Link to='/auth/login' className='btn btn-primary px-10'>Log In</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;