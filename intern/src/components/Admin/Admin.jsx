import React, { useState } from 'react';
import { db } from "../../Config/firebase"
import { collection, addDoc, getDoc, doc, getDocs, query, where } from "firebase/firestore"; // Firestore

const Admin = () => {
  const [activeForm, setActiveForm] = useState('projects');
  const [projectData, setProjectData] = useState({
    title: '',
    githubLink: '',
    description: ''
  });
  const [skillData, setSkillData] = useState({
    name: '',
    level: ''
  });


  // const handleProjectChange = (e) => {
  //   const { id, value } = e.target;
  //   setProjectData(prev => ({
  //     ...prev,
  //     [id]: value
  //   }));
  // };

  // const handleSkillChange = (e) => {
  //   const { id, value } = e.target;
  //   setSkillData(prev => ({
  //     ...prev,
  //     [id]: value
  //   }));
  // };


  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'projects'), {
        ...projectData,
        // createdAt: new Date()
      });
      alert('Project added successfully!');
      setProjectData({
        title: '',
        githubLink: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding project: ', error);
      alert('Error adding project');
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
                  Add to Portfolio
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
    </div>
  );
};

export default Admin;