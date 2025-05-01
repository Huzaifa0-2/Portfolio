import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen my-8 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-6 md:px-8">
      <div className='relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16'>
        {/* Text Content */}
        <div className='lg:pr-16 xl:pr-20 w-full lg:w-1/2'>
          <h2 className='bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl py-2'>
            Objective
          </h2>
          <h3 className='text-white text-base sm:text-lg md:text-xl py-2 leading-relaxed'>
            As a motivated and detail-oriented web developer, I aim to contribute my technical skills and creativity to build engaging, user-friendly websites. Seeking a role where I can grow professionally, collaborate with experienced teams, and deliver high-quality digital solutions. Eager to learn new technologies and take on challenges in a fast-paced environment.
          </h3>
        </div>

        {/* Profile Card */}
        <div className='w-full max-w-xs sm:max-w-sm md:max-w-md'>
          <div className='border-4 border-orange-400 rounded-xl shadow-md shadow-amber-400 bg-neutral-950 h-96 sm:h-104 md:h-112 lg:h-120 w-72 sm:w-80 md:w-90 overflow-hidden'>
            {/* Profile Image */}
            <div className='h-48 sm:h-56 md:h-64 lg:h-70 w-full inset-0 [clip-path:polygon(0_0,100%_0,100%_70%,50%_100%,0_70%)]'>
              <img
                src="mypic1.jpg"
                alt="Main Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Details */}
            <div className='flex mt-2 sm:mt-3 md:mt-4 p-2 sm:p-3 md:p-4'>
              <div className='mr-3 sm:mr-4 md:mr-5'>
                <div className='ml-1 sm:ml-2 py-1 sm:py-2 text-white font-bold text-xs sm:text-sm md:text-base'>Name</div>
                <div className='ml-1 sm:ml-2 py-1 sm:py-2 text-white font-bold text-xs sm:text-sm md:text-base'>Age</div>
                <div className='ml-1 sm:ml-2 py-1 sm:py-2 text-white font-bold text-xs sm:text-sm md:text-base'>Email</div>
                <div className='ml-1 sm:ml-2 py-1 sm:py-2 text-white font-bold text-xs sm:text-sm md:text-base'>Phone no.</div>
              </div>
              <div className=''>
                <div className='py-1 sm:py-2 text-white text-xs sm:text-sm md:text-base'>Syed Mohammad Huzaifa Riaz</div>
                <div className='py-1 sm:py-2 text-white text-xs sm:text-sm md:text-base'>22</div>
                <div className='py-1 sm:py-2 text-white text-xs sm:text-sm md:text-base truncate'>smhuzaifa790@gmail.com</div>
                <div className='py-1 sm:py-2 text-white text-xs sm:text-sm md:text-base'>+92 312 8215065</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;