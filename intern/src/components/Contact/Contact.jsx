import React from 'react'
import { useEffect, useRef } from 'react';

const Contact = () => {

{/* <div class="relative w-100 h-100 mx-auto">

  <div class="absolute inset-0 rounded-[40%_60%_70%_30%_/_40%_50%_60%_70%]">

    <div class="absolute inset-0 border-200 h-[480px] border-orange-400/70 animate-[pulseBorder_8s_ease-in-out_infinite]"></div>
        <div class="absolute inset-1 overflow-hidden h-full  mt-10 rounded-[38%_58%_68%_32%_/_38%_48%_58%_68%]">
      <img 
        src="mypic1.jpg" 
        alt="Profile"
        class="w-full h-full object-cover border-opacity-100"
      />
    </div>
  </div> */}


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
    <div className="relative flex items-center justify-center h-96 w-96 mx-auto my-20">
      {/* Central Image */}
      <div className="z-10 h-32 w-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
        <img 
          src="/center-image.jpg" 
          alt="Main Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Orbiting Images */}
      {[1, 2].map((_, index) => (
        <div
          key={index}
          ref={el => orbitRefs.current[index] = el}
          className="absolute h-20 w-20 rounded-full border-3 border-amber-400 shadow-lg overflow-hidden transition-transform duration-1000 ease-linear"
        >
          <img
            src={`/mypic${index + 1}.jpg`} 
            alt={`Orbiting ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Decorative Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 opacity-40"></div>
    </div>
  );
 
}

export default Contact