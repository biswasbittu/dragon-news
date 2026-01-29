import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Signup = () => {
    const { creatUser, setUser, updateUser } = use(AuthContext);

    const navigate = useNavigate()
    const handleRegister = (e) => {

        e.preventDefault();
        // console.log(e.target);
        const form = e.target
        const name = form.name.value;

        const photo = form.photo.value;
        const email = form.email.value;
        const pwd = form.pwd.value;

        creatUser(email, pwd)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate('/')
                }).catch((error) => {
                    
                    // An error occurred
                    // ...
                    // console.log(error)
                    setUser(user)
                })

            })
            .catch(error => error)

    }
    return (
        <div>

            <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
                <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-10">
                    <h1 className="text-3xl font-semibold text-center text-gray-800">
                        Register your account
                    </h1>

                    <div className="divider my-8" />

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                name='name'
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
                                name='photo'
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
                                name='email'
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
                                name='pwd'
                                type="password"
                                placeholder="Enter your password"
                                className="input w-full bg-gray-100 border-none focus:outline-none"
                                required
                            />
                        </div>



                        <button type='submit' className="btn w-full bg-gray-700 hover:bg-gray-800 text-white border-none mt-4">
                            Register
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Have An Account ? please
                        <Link to="/auth/login" className="text-red-500 ml-1 font-medium">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;