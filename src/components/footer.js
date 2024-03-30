import React from 'react';
import ReactLogo from './favicon.ico'; // Replace with your React logo image import

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center flex flex-col items-center">
        <p className=" text-sm">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
        <p className=" text-sm">
          Created with <img className='w-6 inline' src={ReactLogo} alt="" />  and Made with{' '}
          <span role="img" aria-label="Heart">❤️</span> <span className='text-green-400'> by Mukul Rana</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
