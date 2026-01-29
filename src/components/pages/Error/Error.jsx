import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        {/* আইকন */}
                        <div className="flex justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-base-content/30">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                        </div>

                        {/* 404 টেক্সট */}
                        <h1 className="text-9xl font-black text-primary">404</h1>

                        {/* ইংলিশ হেডিং */}
                        <h2 className="text-3xl font-bold mt-4 text-base-content">
                            Oops! Page Not Found
                        </h2>

                        {/* ইংলিশ বিবরণ */}
                        <p className="py-6 text-base-content/70">
                            Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>

                        {/* ইংলিশ বাটন */}
                        <Link to="/" className="btn btn-primary btn-wide rounded-full font-bold gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-5.293-5.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Home
                        </Link>

                        <div className="mt-12 text-sm text-base-content/50">
                            <p>Dragon News Portal © {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;