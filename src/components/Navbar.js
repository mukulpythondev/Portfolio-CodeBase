import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-black p-4 md:p-8 flex justify-between items-center md:fixed z-30 w-full ${isMenuOpen ? 'h-auto overflow-x-hidden' : 'h-20'}`}>
      {/* Cross Icon */}
      <button onClick={toggleMenu} className={`md:hidden absolute left-4 top-4 text-white text-2xl focus:outline-none ${isMenuOpen ? 'block' : 'hidden'}`}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className="flex items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white"> &lt;Mukul<span className="text-green-400">Dev/&gt;</span></h1>
      </div>
      
      <div className="flex items-center">
        <div className={`md:flex ${isMenuOpen ? 'flex-col items-start' : 'hidden'} mt-2 md:mt-0 ml-3`}>
          <ul className="md:flex md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <li><a href="#home" className="text-white text-xl px-4 py-2 rounded hover:bg-green-500">Home</a></li>
            <li><a href="#projects" className="text-white text-xl px-4 py-2 rounded hover:bg-green-500">Projects</a></li>
            <li><a href="#about" className="text-white text-xl px-4 py-2 rounded hover:bg-green-500">About</a></li>
            <li><a href="#skills" className="text-white text-xl px-4 py-2 rounded hover:bg-green-500">Skills</a></li>
            <li><a target='_blank' rel='noopener noreferrer' href="https://drive.google.com/file/d/1W8bu30AKfAqzwlRTqFu8nFFRCMQqV1Lc/view?usp=sharing" className="text-white text-xl px-4 py-2 rounded hover:bg-green-500">Resume</a></li>
          </ul>
        </div>
        
        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className={`md:hidden text-white text-2xl focus:outline-none ${isMenuOpen ? 'hidden' : 'block'}`}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
