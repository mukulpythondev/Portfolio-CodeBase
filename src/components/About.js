import React, { useState } from 'react';
import aboutImage from './about.avif'; // Import your about image

const AboutPage = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const aboutText = showFullText
    ? (
      <p>
        Hi, I'm <span className="text-green-500">MUKUL RANA</span> - a passionate <span className="text-green-500">Full Stack Developer</span> based in Ghaziabad, Uttar Pradesh. Specializing in the <span className=" text-green-500">MERN stack</span>, I craft efficient web experiences, from seamless interfaces to robust backends. I created Real-life Projects.

        I thrive on solving complex problems and turning them into elegant solutions. My dedication to <span className=" text-green-500">open-source development</span> drives me to contribute and collaborate, creating a positive impact on the tech community.

        Let's connect and create innovative projects together. Reach out for a coding adventure!
      </p>
    )
    : (
      <p>
        Hi, I'm <span className="text-green-500">MUKUL RANA</span> - a passionate <span className="text-green-500">Full Stack Developer</span> based in Ghaziabad, Uttar Pradesh. Specializing in the <span className="text-green-500">MERN stack</span>, I craft efficient web experiences, from seamless interfaces to robust backends. I created Real-life Projects.
      </p>
    );

  return (
    <div id='about' className="bg-black text-white py-16">
      <h1 className="text-center text-4xl font-semibold mb-8 hover:text-green-500 transition-colors duration-300">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={aboutImage} alt="About" className="w-3/4 mt-10 rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 text-lg leading-relaxed">
          {aboutText}
          <button
            className="text-white mt-4 bg-green-600 p-2 rounded-xl hover:scale-105 transition-colors duration-300"
            onClick={toggleText}
          >
            {showFullText ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
