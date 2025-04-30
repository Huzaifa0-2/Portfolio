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
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-black">
      {/* Title */}
      <div className="text-center mb-16 z-10">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">
          My Portfolio
        </h1>
        <p className="text-gray-400">Powered by Firebase</p>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative h-80 w-72 bg-black flex flex-col justify-between p-6 rounded-lg cursor-pointer
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

                <div className="flex flex-col space-y-3 ">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-white rounded-md
                      bg-gradient-to-br from-orange-400 hover:bg-amber-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      {/* GitHub icon */}
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
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        {/* External link icon */}
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