import React, { useState, useEffect } from 'react';
import { db } from "../../Config/firebase"
import { collection, addDoc, getDoc, doc, getDocs, query, where, updateDoc } from "firebase/firestore";


const Admin = () => {
  const [editProjectId, setEditProjectId] = useState(null);

  const [projects, setProjects] = useState([]);
  const [activeForm, setActiveForm] = useState('projects');
  const [projectData, setProjectData] = useState({
    title: '',
    githubLink: '',
    livelink: '',
    description: '',

  });
  const [skillData, setSkillData] = useState({
    name: '',
    level: ''
  });


  const handleEdit = (id) => {
    const selected = projects.find((project) => project.id === id);
    if (selected) {
      setProjectData({
        title: selected.title,
        githubLink: selected.githubLink,
        liveLink: selected.liveLink,
        description: selected.description,
      });
      setEditProjectId(id); // Save the ID for updating
    }
  };

  const getData = async () => {

    try {
      const usersRef = collection(db, "projects");
      const docsRef = await getDocs(usersRef);
      setProjects(docsRef.docs.map((doc) => ({...doc.data(), id: doc.id })));
      // const uniqueId = docsRef.id;

    } catch (e) {
      console.error("Error Loading projects: ", e);
      ;
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProjectId) {
        const projectRef = doc(db, 'projects', editProjectId);
        await updateDoc(projectRef, {
          ...projectData
        });
        alert('Project updated successfully!');
      } else {
        await addDoc(collection(db, 'projects'), {
          ...projectData
        });
        alert('Project added successfully!');
      }
  
      // Clear the form and refresh
      setProjectData({
        title: '',
        githubLink: '',
        liveLink: '',
        description: '',
      });
      setEditProjectId(null);
      getData();
    } catch (error) {
      console.error('Error adding/updating project: ', error);
      alert('Error updating project');
    }
  };


  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'skills'), {
        ...skillData,
        level: parseInt(skillData.level), // Converting level fronm string to number
        // createdAt: new Date()
      });
      alert('Skill added successfully!');
      setSkillData({
        name: '',
        level: ''
      });
    } catch (error) {
      console.error('Error adding skill: ', error);
      alert('Error adding skill');
    }
  };


  return (
    <div>
      <div className="min-h-screen bg-black">
        <h1 className="text-5xl font-bold text-center text-white -mb-22">
          <span className="text-orange-600">Admin </span>Panel
        </h1>
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neutral-950 rounded-xl shadow-md border-2 border-orange-600 overflow-hidden p-8 mt-30">
            {/* Form Selection Buttons */}
            <div className="flex mb-6 gap-4">
              <button
                type="button"
                onClick={() => setActiveForm('projects')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${activeForm === 'projects'
                  ? 'bg-orange-600 text-white'
                  : 'bg-transparent text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white'
                  }`}
              >
                Projects
              </button>
              <button
                type="button"
                onClick={() => setActiveForm('skills')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${activeForm === 'skills'
                  ? 'bg-orange-600 text-white'
                  : 'bg-transparent text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white'
                  }`}
              >
                Skills
              </button>
            </div>

            {/* Projects Form */}
            {activeForm === 'projects' && (
              <form onSubmit={handleProjectSubmit}>
                <h2 className="text-2xl font-bold text-center text-white mb-6">
                  <span className="text-orange-600">Add </span>Project
                </h2>

                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-white mb-1">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    id="title"
                    value={projectData.title}
                    onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="githublink" className="block text-sm font-medium text-white mb-1">
                    Drop Project Link
                  </label>
                  <input
                    type="text"
                    id="githublink"
                    value={projectData.githubLink}
                    onChange={(e) => setProjectData({ ...projectData, githubLink: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="livelink" className="block text-sm font-medium text-white mb-1">
                    Drop Live Project Link
                  </label>
                  <input
                    type="text"
                    id="livelink"
                    value={projectData.liveLink}
                    onChange={(e) => setProjectData({ ...projectData, liveLink: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    value={projectData.description}
                    onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg border border-orange-600 shadow-md shadow-orange-600 transition duration-200 hover:shadow-none"
                >
                  {editProjectId ? "Update Project" : "Add to Portfolio"}
                </button>
              </form>
            )}

            {/* Skills Form */}
            {activeForm === 'skills' && (
              <form onSubmit={handleSkillSubmit}>
                <h2 className="text-2xl font-bold text-center text-white mb-6">
                  <span className="text-orange-600">Add </span>Skill
                </h2>

                <div className="mb-6">
                  <label htmlFor="skillName" className="block text-sm font-medium text-white mb-1">
                    Skill Name
                  </label>
                  <input
                    required
                    type="text"
                    id="skillName"
                    value={skillData.name}
                    onChange={(e) => setSkillData({ ...skillData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="skillLevel" className="block text-sm font-medium text-white mb-1">
                    Skill Level (1-100)
                  </label>
                  <input
                    type="number"
                    id="skillLevel"
                    min="1"
                    max="100"
                    value={skillData.level}
                    onChange={(e) => setSkillData({ ...skillData, level: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg border border-orange-600 shadow-md shadow-orange-600 transition duration-200 hover:shadow-none"
                >
                  Add Skill
                </button>
              </form>
            )}
          </div>
        </div>
      </div>



      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl animate-pulse"></div>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl z-10 mb-20 mx-auto mt-10">
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
                  <button
                    id={project.id}
                    onClick={() => handleEdit(project.id)}
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
                  >
                    Update Project
                  </button>

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

  // return (update) {

  // }
};

export default Admin;