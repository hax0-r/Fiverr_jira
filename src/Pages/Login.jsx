import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signup, setSignup] = useState(false);
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setRole('admin');
            navigate('/dashboard', { state: { role: 'admin' } });
        } else if (username === 'user' && password === 'user') {
            setRole('user');
            navigate('/dashboard', { state: { role: 'user' } });
        } else {
            toast.error('Invalid credentials');
        }
    };

    const handleSignup = () => {

    }

    return (

        <>
            <div className="md:w-[calc(100%-18rem)] w-[calc(100%-2rem)] flex flex-col items-center justify-center min-h-screen ">
                {
                    !signup && (
                        <h2 className='text-center font-semibold text-3xl'>Welcome Back</h2>
                    )
                }
                <form className="p-4 max-w-sm w-full mx-auto mt-5">
                    <label htmlFor="email" className='font-medium text-zinc-700'>Email</label>
                    <input
                        type="email"
                        required
                        id='email'
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full mt-1 mb-5 p-3 border rounded-lg focus:border-black transition-all duration-500"
                    />
                    <label htmlFor="password" className='font-medium text-zinc-700'>Password</label>
                    <input
                        type="password"
                        required
                        id='password'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full mt-1 mb-5 p-3 border rounded-lg focus:border-black transition-all duration-500"
                    />
                    <button onClick={handleLogin} className="p-3 mb-4 font-medium transition-all duration-500 hover:bg-blue-600 bg-blue-500 w-full text-white rounded-lg">
                        {!signup ? "Log in" : "Sign Up"}
                    </button>

                    {
                        !signup && (
                            <button onClick={() => navigate("board")} className="p-3 font-medium transition-all duration-500 hover:bg-blue-600 bg-blue-500 w-full text-white rounded-lg">
                                Login using Google
                            </button>
                        )
                    }

                    <p className='text-center pt-4 text-zinc-600 select-none'>{signup ? "Already have an account?" : "Don't have an account?"} <span onClick={() => setSignup(!signup)} className='font-medium hover:text-black transition-all duration-500 underline cursor-pointer'>{signup ? "Log in" : "Sign Up"}</span></p>
                </form>
            </div>
        </>

    );
};

export default Login;
