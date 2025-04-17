import React from 'react';
import { useEffect, useRef } from 'react';

const Footer = () => {
    const skills = [
        { name: 'React Js', level: 70 },
        { name: 'Bootstrap', level: 65 },
        { name: 'HTML CSS', level: 77 },
        { name: 'Next.js', level: 55 },
        { name: 'SQL', level: 60 },
        { name: 'Tailwind CSS', level: 70 },
    ];


      const orbitRefs = useRef([]);
    
      useEffect(() => {
        const orbitElements = orbitRefs.current;
        let angle = 0;
    
        const animate = () => {
          angle += 0.5;
          orbitElements.forEach((el, index) => {
            if (el) {
              const radius = 120; // Orbit radius in pixels
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
        <div className="bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center">

                <div className="relative flex items-center justify-center h-96 w-96 mx-auto my-20">
      {/* Central Image */}
      <div className="z-10 h-32 w-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
        <img 
          src="mypic1.jpg" 
          alt="Main Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Orbiting Images */}
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          ref={el => orbitRefs.current[index] = el}
          className="absolute h-20 w-20 rounded-full shadow-lg overflow-hidden transition-transform duration-1000 ease-linear"
        >
          <img
            src={`/pic${index + 1}.png`} 
            alt={`Orbiting ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Decorative Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 opacity-40"></div>
    </div>

                    <div className="w-full md:w-2/3">
                        <div className="text-center md:text-left text-white mb-8">
                            <h2 className="text-3xl font-bold mb-4 text-orange-600">
                                My Skills in Web Development
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                I am a passionate Full Stack Web Developer with expertise in both frontend and backend technologies. I specialize in building responsive, high-performance web applications using modern frameworks like React, Next.js, Node.js, and Express.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-orange-600">{skill.name}</span>
                                        <span className="text-sm font-medium text-white">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className="bg-gradient-to-r from-orange-600 to-amber-600 h-2.5 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;