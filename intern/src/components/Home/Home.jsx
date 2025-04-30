import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { db } from "../../Config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
    const [projects, setProjects] = useState([]);
    const orbitRefs = useRef([]);

    const getData = async () => {
        try {
            const usersRef = collection(db, "skills");
            const docsRef = await getDocs(usersRef);
            setProjects(docsRef.docs.map((doc) => doc.data()));
        } catch (e) {
            console.error("Error Loading projects: ", e);
        }
    };

    useEffect(() => {
        getData();
        const orbitElements = orbitRefs.current;
        let angle = 0;

        const animate = () => {
            angle += 0.5;
            orbitElements.forEach((el, index) => {
                if (el) {
                    const radius = window.innerWidth < 768 ? 80 : 120;
                    const offsetAngle = angle + (index * (360 / orbitElements.length));
                    const x = radius * Math.cos(offsetAngle * (Math.PI / 180));
                    const y = radius * Math.sin(offsetAngle * (Math.PI / 180));

                    el.style.transform = `translate(${x}px, ${y}px)`;
                }
            });
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="mx-auto w-full min-h-screen max-w-7xl mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center pb-20 pt-10 sm:py-24 gap-8">
                <div className="order-2 lg:order-1 w-full lg:w-1/2">
                    <div className="relative bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-white px-6 py-4 rounded-3xl rounded-bl-none shadow-neon-orange mb-8 w-full max-w-md">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                            Hey! I am
                        </h3>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">
                            SM
                        </span>
                        <span className="text-white"> Huzaifa Riaz</span>
                    </h1>
                    <p className="text-gray-300 mb-8 text-lg">A Professional Web Developer and UI/UX Designer</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                            to="/work" 
                            className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-br from-orange-400 hover:bg-amber-200 text-white rounded-lg transition-all duration-300 shadow-neon-orange-hover text-sm sm:text-base"
                        >
                            My Work
                        </Link>

                        <a
                            href="#footer"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('footer')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                            className="px-8 py-3 sm:px-10 sm:py-4 border border-orange-400 hover:border-orange-400 text-white rounded-lg transition-all duration-300 shadow-neon-orange-hover text-sm sm:text-base"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                        <div className="absolute bottom-10 mask-b-from-60%">
                            <img
                                src="mypic2.png"
                                alt="Profile"
                                className="w-full h-180 object-cover"
                            />
                        </div>

                        {/* CV Download Card */}
                        <div className="absolute -bottom-10 -right-10 sm:-right-20 group hover:-rotate-3 transition-transform duration-500">
                            <div className="relative h-48 w-72 bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-orange-600/50 shadow-neon-orange hover:shadow-neon-orange-hover">
                                <div className="text-orange-400 mb-4">
                                    <span className="text-3xl font-bold">Jr</span>
                                    <p className="text-sm">Mern Developer</p>
                                </div>
                                <a
                                    href="https://raw.githubusercontent.com/Huzaifa0-2/figma/main/intern/src/assets/cv.pdf"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-orange-400  text-white rounded-md transition-all duration-300"
                                >
                                    Download CV
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.1 77.9a4 4 0 0 1-4 4H26.1a4 4 0 0 1 0-8H73.9a4 4 0 0 1 4 4ZM35.2 47.2a4 4 0 0 0-5.7 0L22.1 52.3V22.1a4 4 0 1 1 8 0V52.3l5.1-5.1a4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.6l-12 12a3.9 3.9 0 0 1-5.6 0l-12-12a4 4 0 0 1 0-5.6Z"/>
                                    </svg>
                                </a>
                                <div className="absolute -bottom-6 -right-6 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                                    <svg className="w-32 h-32 fill-current text-orange-400" viewBox="0 0 64 64">
                                        <path d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 0 0 5.7-8.8h0.1c3 0 3.8-6.3 3.8-7.3s0.1-4.7-3-4.7C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s0.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 0.5 5-9.5 6.8S2 62 2 62h60a14.6 14.6 0 0 0-11.6-11z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Orbiting Images */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative flex items-center justify-center h-64 w-64 sm:h-96 sm:w-96">
                                <div className="z-10 h-24 w-24 sm:h-32 sm:w-32 rounded-full border-2 border-orange-500/50 shadow-neon-orange overflow-hidden">
                                    <img
                                        src="mypic1.jpg"
                                        alt="Main Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {[1, 2, 3, 4].map((_, index) => (
                                    <div
                                        key={index}
                                        ref={el => orbitRefs.current[index] = el}
                                        className="absolute h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-orange-500/30 shadow-neon-orange overflow-hidden transition-transform duration-1000 ease-linear"
                                    >
                                        <img
                                            src={`/pic${index + 1}.png`}
                                            alt={`Skill ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}

                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/20 animate-pulse-border"/>
                            </div>
                        </div>

                        {/* Skills Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent text-center lg:text-left">
                                My Skills in Web Development
                            </h2>
                            
                            <div className="space-y-6">
                                {projects.map((project, index) => (
                                    <div key={index} className="group relative">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-orange-400">
                                                {project.name}
                                            </span>
                                            <span className="text-sm font-medium text-gray-300">
                                                {project.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-3 shadow-inner">
                                            <div 
                                                className="bg-gradient-to-r from-orange-600 to-amber-600 h-3 rounded-full transition-all duration-500 ease-out group-hover:shadow-neon-orange"
                                                style={{ width: `${project.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <style jsx global>{`
                @keyframes pulse-border {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
                .animate-pulse-border {
                    animation: pulse-border 3s ease-in-out infinite;
                }
                .shadow-neon-orange {
                    box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
                }
                .shadow-neon-orange-hover:hover {
                    box-shadow: 0 0 25px rgba(255, 165, 0, 0.5);
                }
            `}</style>
        </div>
    );
};

export default Home;