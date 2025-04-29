import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../Config/firebase";
import { collection, addDoc, getDoc, doc, getDocs, query, where } from "firebase/firestore"; // Firestore

const Work = () => {
  const [projects, setProjects] = useState([]);
  // console.log(projects.description, projects.title, projects.githubLink)
  // console.log(projects)
  // console.log("Hey!!!", projects.description)

  const getData = async () => {

    try {
      const usersRef = collection(db, "projects");
      // console.log(usersRef)
      const docsRef = await getDocs(usersRef);
      setProjects(docsRef.docs.map((doc) => doc.data()));

      // let userData = docsRef.docs;
      // console.log("hiuiiiiiiiii", userData)

    } catch (e) {
      console.error("Error Loading projects: ", e);
      ;
    }
  };

  useEffect(() => {
    const letters = document.querySelectorAll('.letter-animate');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
      letter.classList.add('animate-letter');
      getData();
    });
  }, []);


  return (
    <div className="relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-black to-neutral-900">
      {/* Animated Title */}
      <div className="text-center mb-16 z-10">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-10">
          <span className="text-orange-600 inline-block">
            {'My'.split('').map((char, i) => (
              <span
                key={`my-${i}`}
                className="letter-animate opacity-0 inline-block hover:scale-110 hover:text-orange-400 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </span>
          {' Portfolio'.split('').map((char, i) => (
            <span
              key={`portfolio-${i}`}
              className="letter-animate opacity-0 inline-block text-white hover:scale-110 hover:text-gray-300 transition-transform duration-300"
              style={{ animationDelay: `${(i + 2) * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl animate-pulse"></div>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              {/* Project Image Placeholder - you can replace with actual images */}
              <div className="h-48 bg-gradient-to-r from-neutral-800 to-neutral-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-neutral-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    View Code
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      View Live
                    </a>
                  )}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;