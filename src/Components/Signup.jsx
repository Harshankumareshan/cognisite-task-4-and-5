import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Store username, password, email, and phone in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    navigate('/login'); // Redirect to login page after registration
  };

  return (
    <div className="flex flex-row min-w-screen bg-white min-h-screen rounded-lg shadow-lg overflow-hidden">
      {/* Left side image */}
      <div className="w-5/6 bg-blue-700">
        <img src="\images.jpg" alt="Login" className="object-cover w-full h-full" />
      </div>

      {/* Right side form */}
      <div className="w-1/2 p-8 bg-yellow-300 flex flex-col justify-center">
        <div className="mx-auto mb-8">
          <img
            src='https://static.wixstatic.com/media/e5bc4a_f97b01a09e294398b3e5970680d0ed73~mv2.png/v1/fill/w_204,h_198,al_c,lg_1,q_85,enc_auto/e5bc4a_f97b01a09e294398b3e5970680d0ed73~mv2.png'
            alt="Logo"
            className="w-20 h-20"
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Welcome to Cognisite</h1>
        <h3 className="text-2xl text-center font-bold text-black-700 mb-6">Register</h3>
        <form className="mx-auto space-y-4 bg-white p-8 rounded-lg">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Admin Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-1 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
             Admin Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-1 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-1 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 border rounded w-full"
            />
          </div>
          <div>
            <button
              type="button"
              className="mt-6 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg w-full"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </form>
        </div>
      </div>
   
  );
};

export default Register;
