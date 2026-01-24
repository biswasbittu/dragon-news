import React from 'react';

const Signup = () => {
    return (
        <div>
            
            <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
                <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-10">
                    <h1 className="text-3xl font-semibold text-center text-gray-800">
                        Register your account
                    </h1>

                    <div className="divider my-8" />

                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input w-full bg-gray-100 border-none focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your photo URL"
                                className="input w-full bg-gray-100 border-none focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email
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

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-sm"
                                required
                            />
                            <span className="text-sm text-gray-600">
                                Accept <span className="font-medium">Term & Conditions</span>
                            </span>
                        </div>

                        <button className="btn w-full bg-gray-700 hover:bg-gray-800 text-white border-none mt-4">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;