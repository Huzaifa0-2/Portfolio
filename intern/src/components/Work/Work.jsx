import React, { useEffect } from 'react';

const Work = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.letter-animate');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
      letter.classList.add('animate-letter');
    });
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[60vh] flex items-center justify-center  p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-10">
          <span className="text-orange-600 inline-block">
            {'My'.split('').map((char, i) => (
              <span key={`my-${i}`} className="letter-animate opacity-0 inline-block">
                {char}
              </span>
            ))}
          </span>
          {' Portfolio'.split('').map((char, i) => (
            <span key={`portfolio-${i}`} className="letter-animate opacity-0 inline-block text-white">
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      </div>

  
    </div>
  );
};

export default Work;