import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
           <Link to='/auth/register'> re</Link>
            <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
                <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-10">
                    <h1 className="text-3xl font-semibold text-center text-gray-800">
                        Login your account
                    </h1>

                    <div className="divider my-8" />

                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input w-full bg-gray-100 border-none focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input w-full bg-gray-100 border-none focus:outline-none"
                                required
                            />
                        </div>

                        <button className="btn w-full bg-gray-700 hover:bg-gray-800 text-white border-none mt-4">
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don’t Have An Account ?
                        <Link to="/auth/signup" className="text-red-500 ml-1 font-medium">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;