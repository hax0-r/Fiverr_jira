import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
            alert('Invalid credentials');
        }
    };

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block mb-2 p-2 border rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block mb-2 p-2 border rounded"
            />
            <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">
                Login
            </button>
        </div>
    );
};

export default Login;
