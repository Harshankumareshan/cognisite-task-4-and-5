import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Retrieve email and phone from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');

    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPhone) {
      setPhone(storedPhone);
    }
  }, []);

  const handleEmailClick = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleCallClick = () => {
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-300 shadow-lg p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
         
          <h1 className='font-bold text-lg'>Cognisite</h1>
          <p>Welcome to admin Dashboard</p>
        </div>
        <div className="flex items-center space-x-6">
          <img
            src='https://c1.klipartz.com/pngpicture/594/811/sticker-png-google-logo-email-bounce-address-email-box-icloud-symbol-gmail-internet.png'
            alt="Email Icon"
            className="w-8 h-8 cursor-pointer"
            onClick={handleEmailClick}
          />
          <img
            src='https://e7.pngegg.com/pngimages/563/359/png-clipart-mobile-phones-computer-icons-telephone-phone-icon-text-phone-icon-thumbnail.png'
            alt="Call Icon"
            className="w-8 h-8 cursor-pointer"
            onClick={handleCallClick}
          />
          <img
            src='https://i.pinimg.com/736x/3e/79/00/3e7900d2a449f6724cb7fad36a3c44a3.jpg'
            alt="Home Icon"
            className="w-8 h-8 cursor-pointer"
          />
          <img
            src="/staff.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
