import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className='mx-auto w-full min-h-screen max-w-7xl mt-20'>
        <div className='flex justify-between relative max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8'>
            <div>
                <div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-3xl rounded-bl-none shadow-lg ml-15 w-1/3 mb-5">
                        <h3 className="text-xl font-bold">Hey! I am</h3>
                    </div>
                    <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-10'><span className='text-orange-600'>SM</span> Huzaifa Riaz</h1>
                    <p className='text-white mb-10'>A Professional Web Developer and UI/UX Designer</p>
                </div>
                <div className='space-x-5'>
                    <Link to="/work" className='bg-orange-600 text-white px-10 py-4 rounded-lg'><span className='text-sm'>My Work</span></Link>
                    <a className='border border-orange-600 text-white px-10 py-4 rounded-lg' href="https://github.com/Huzaifa0-2" target={"_blank"}>
                    {/* <Link to="/mywork" className='border border-orange-600 text-white px-10 py-4 rounded-lg'><span className='text-sm'>Download CV</span></Link> */}
                        Visit GitHub
                    </a>
                </div>
            </div>

            <div class="relative w-100 h-100 ml-20 -mt-10">
              <div class="absolute inset-0 rounded-[40%_60%_70%_30%_/_40%_50%_60%_70%]">
                <div class="absolute inset-0 border-200 h-[480px] border-orange-400/70 animate-[pulseBorder_8s_ease-in-out_infinite]"></div>
                    <div class="absolute -inset-10 overflow-hidden h-full mt-5 rounded-[38%_58%_68%_32%_/_38%_48%_58%_68%]">
                  <img 
                    src="mypic2.png" 
                    alt="Profile"
                    class="w-full h-full object-cover border-opacity-100"
                  />
                </div>
              </div> 
            </div>
        </div>
    </div>
)

export default Home