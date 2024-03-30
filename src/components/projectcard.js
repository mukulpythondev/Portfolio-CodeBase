import React from 'react';


const ProjectCard = ({ imageSrc, githubLink, demoLink, title, description }) => {
  const isDemoDisabled = !demoLink;

  return (
    <div className='max-w-md mx-auto mb-4'>
     
        <div className="bg-black border-2 border-green-400 text-white rounded-lg shadow-md overflow-hidden hover:scale-105">
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4 border-y-4 border-green-400">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-white">{description}</p>
            <div className="mt-4 flex justify-between space-x-4">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black rounded-xl p-3 bg-white hover:text-green-500 hover:scale-95"
              >
                GitHub
              </a>
              {isDemoDisabled ? (
                <div
                  className="text-black rounded-xl bg-white p-3 cursor-not-allowed opacity-50"
                  title="Follow GitHub Readme"
                >
                  Demo
                </div>
              ) : (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black rounded-xl bg-white p-3 hover:text-green-500 hover:scale-95"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ProjectCard;
