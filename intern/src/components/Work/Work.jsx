import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../Config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Work = () => {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const usersRef = collection(db, "projects");
      const docsRef = await getDocs(usersRef);
      setProjects(docsRef.docs.map((doc) => doc.data()));
    } catch (e) {
      console.error("Error Loading projects: ", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
      {/* Hero Banner - Only change for sm and below */}
      <div className='relative mb-10 w-full max-w-4xl'>
        <div className="w-full">
          <img 
            src="bgpic.jpg" 
            alt="Main Profile" 
            className="w-full h-64 sm:h-80 object-cover opacity-40 rounded-lg" 
          />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
          <div className='w-80 bg-neutral-800 rounded-lg border-4 border-orange-400 shadow-md shadow-amber-400 overflow-hidden text-white text-center p-20'>
            <h3 className='text-2xl'>20<span className='text-orange-400'>+</span> Projects</h3>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-16 z-10">
        <svg 
          className="w-12 h-12 inline text-orange-400 mb-4" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
        </svg>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">
          My Portfolio
        </h1>
        <p className="text-gray-400">Powered by Firebase</p>
      </div>

      {/* Projects Grid - Only change card size for sm and below */}
      <div className="w-full max-w-6xl z-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative h-80 w-72 mx-auto sm:mx-0 bg-black flex flex-col justify-between p-6 rounded-lg cursor-pointer
                before:absolute before:inset-0 before:-left-1 before:m-auto before:w-[296px] before:h-80 
                before:rounded-xl before:bg-gradient-to-br before:from-orange-500 before:to-amber-200 
                before:z-[-10] before:pointer-events-none before:transition-all before:duration-600 
                before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:before:-rotate-90 hover:before:scale-x-134 
                hover:before:scale-y-77 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-br 
                after:from-orange-500/50 after:to-amber-200/50 after:translate-3d after:scale-95 after:blur-xl 
                hover:after:blur-3xl"
            >
              <div className="flex flex-col h-full justify-between">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-col space-y-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-white rounded-md
                      bg-gradient-to-br from-orange-400 hover:bg-amber-200"
                  >
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                    View Code
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-transparent rounded-md text-white transition-all duration-300 border border-orange-400 hover:border-orange-400 shadow-neon-orange-hover"
                    >
                      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM7.4 8.82867C7.2067 8.82867 7.04543 8.96578 7.00813 9.14806L7 9.22867V14.7713C7 14.8474 7.02169 14.9219 7.06254 14.9861C7.16631 15.1492 7.36858 15.2116 7.54238 15.1452L7.61475 15.1088L11.9697 12.3375C12.0191 12.306 12.061 12.2641 12.0924 12.2148C12.1962 12.0517 12.1671 11.842 12.0333 11.7127L11.9697 11.6625L7.61475 8.8912C7.55057 8.85036 7.47607 8.82867 7.4 8.82867Z"></path>
                      </svg>
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;