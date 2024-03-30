import React from 'react';

// Import your logos
import htmlLogo from './html.svg';
import cssLogo from './css.svg';
import jsLogo from './javascript.svg';
import pythonLogo from './python.svg';
import mongodbLogo from './mongodb.svg';
import reactLogo from './react.svg';
import expressLogo from './express.png';
import nodejsLogo from './nodejs.svg';
import leftImage from './metalogo.svg';
import rightImage from './google.png';

const SkillsPage = () => {
  const handleMouseEnter = (event) => {
    const progressBar = event.currentTarget.querySelector('.progress-bar');
    progressBar.style.width = '90%'; // Adjust the width based on your desired percentage
  };

  const handleMouseLeave = (event) => {
    const progressBar = event.currentTarget.querySelector('.progress-bar');
    progressBar.style.width = '0';
  };

  return (
    <div id='skills' className="bg-black text-white py-16">
      <h1 className="text-center text-4xl font-semibold mb-8 hover:text-green-500 transition-colors duration-300">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-10">
        {/* Languages Section */}
        <div className="md:w-1/2 mb-8 mt-10 md:mb-0 mr-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-7">Languages</h2>
          <div className="flex flex-col gap-4">
            {/* HTML */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={htmlLogo} alt="HTML Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 min-w-[80%] rounded-full bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">90%</span>
            </div>

            {/* CSS */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={cssLogo} alt="CSS Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 rounded-full min-w-[80%] bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">85%</span>
            </div>

            {/* JavaScript */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={jsLogo} alt="JavaScript Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 rounded-full min-w-[80%] bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">90%</span>
            </div>

            {/* Python */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={pythonLogo} alt="Python Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 rounded-full min-w-[80%] bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">85%</span>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="md:w-1/2 text-lg md:text-xl lg:text-2xl mt-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-5">Technologies</h2>
          <div className="flex flex-col gap-4">
            {/* MongoDB */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={mongodbLogo} alt="MongoDB Logo" className="w-12 h-12 md:ml-5 ml-4 mr-7 md:mr-10 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 rounded-full min-w-[80%] bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">90%</span>
            </div>

            {/* React */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={reactLogo} alt="React Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 rounded-full min-w-[80%] bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">90%</span>
            </div>

            {/* Express */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={expressLogo} alt="Express Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 rounded-full min-w-[80%] bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">85%</span>
            </div>

            {/* Node.js */}
            <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={nodejsLogo} alt="Node.js Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 mr-4 hover:animate-bounce" />
              <div className="h-4 w-3/4 md:w-1/2 lg:w-3/4 rounded-full min-w-[80%] bg-red-400">
                <div className="progress-bar h-full bg-green-500 rounded-full transition-width duration-500 ease-in-out"></div>
              </div>
              <span className="ml-2 text-green-400 font-bold">90%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center p-4">
        <img src={leftImage} alt="meta" className="w-72 md:w-96 lg:w-1/4 mb-4 md:mb-0" />
        <img src={rightImage} alt="google" className="w-72 md:w-96 lg:w-1/4 rounded-xl" />
      </div>

      {/* Button to View Certificate */}
      <div className="flex justify-center  mt-4">
        <a
          href="https://drive.google.com/drive/folders/1kz0rSV2F6dxUktJF3Z_imPxMBjv6ygNz?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:scale-95 text-white py-2 px-4 rounded-full transition-colors duration-300">
          View All Certifications
        </a>
      </div>
    </div>
  );
};

export default SkillsPage;
