import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';

const Sociallogin = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Log in With</h1>
            <div className='flex flex-col gap-4 my-4'>
                <button className='btn btn-outline btn-secondary'> <FcGoogle  size={24}/>
                    Login with Google</button>
                <button className='btn btn-outline btn-primary'> <VscGithubInverted size={24} /> Login with Github</button>
            </div>
        </div>
    );
};

export default Sociallogin;