import React from 'react';
import ProjectCard from './projectcard';
import projectImage1 from './todolist.png'; // Import your project images
import projectImage2 from './passwordgenerator.png'; // Import your project images
import projectImage3 from './sidcupgolf.png'; // Import your project images
import projectImage4 from './newspath.png'; // Import your project images
import projectImage5 from './magmaclone.png'
import projectImage6 from './applevison.png'
import { Element } from 'react-scroll';
const ProjectPage = () => {
  const projects = [
    {
      imageSrc: projectImage1,
      githubLink: 'https://github.com/mukulpythondev/To-Do-List-Project-Web-development',
      demoLink: 'https://task-master-to-do-list.netlify.app/',
      title: 'TaskMaster',
      description: 'TaskMaster is a to-do list project created using HTML, CSS, JS.',
    },
    {
      imageSrc: projectImage2,
      githubLink: 'https://github.com/mukulpythondev/Password-Generator-Web-Dev-Project',
      demoLink: 'https://mukul-password-generator.netlify.app/',
      title: 'Password Shield',
      description: 'Password Shield is a password generator project created using HTML, CSS, JS.',
    },
    {
      imageSrc: projectImage3,
      githubLink: 'https://github.com/mukulpythondev/Sidcup-Family-Golf-Clone',
      demoLink: 'https://sidcupfamilygolf-clone.netlify.app/',
      title: 'Sidcup Golf  Website Clone',
      description: "Sidcup's have stunning animations and effects and i cloned using HTML, CSS, JS.",
    },
    {
      imageSrc: projectImage4,
      githubLink: 'https://github.com/mukulpythondev/NewsPath-React-Project',
      demoLink: '',
      title: 'NewsPath',
      description: "NewsPath show latest news website using NewsAPI and React but only run in Local Server.",
    },{
    imageSrc: projectImage5,
      githubLink: 'https://github.com/mukulpythondev/Magma-Clone',
      demoLink: 'https://magma-clone-mukul-rana.netlify.app/',
      title: 'Magma Website Clone',
      description: "Magma is a website clone created using HTML, CSS, and JS. It features animations using canvas and effects",
    },
    {imageSrc: projectImage6,
      githubLink: 'https://github.com/mukulpythondev/Apple-vision-clone',
      demoLink: 'https://apple-vision-clone-mukuldev.netlify.app/',
      title: 'Apple Vision Clone',
      description: "Apple's vision website clone created using HTML, CSS, and JS. It features effects using canvas and animations",
    },
  ];
  
  return (
    <div id='projects' className='bg-black'>
        <h1 className='text-center text-white hover:text-green-500 text-4xl'>Projects</h1>
        <Element name="project-card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mx-4 md:mx-8 lg:mx-16 xl:mx-20 md:mt-20">
            {projects.map((project, index) => (
              <div key={index} className="max-w-md">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </Element>
      </div>
);
};


export default ProjectPage;
