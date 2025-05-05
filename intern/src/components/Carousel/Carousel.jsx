import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "course_proof.jpeg",
        "certificate1.png",
        "certificate2.png"
    ]

    const nextImage = () => {
        setCurrentImage((prevImg) => {
            return prevImg === images.length - 1 ? 0 : prevImg + 1;
        });
    }
    const previousImage = () => {
        setCurrentImage((prevImg) => {
            return prevImg === 0 ? images.length - 1 : prevImg - 1;
        });
    }

    return (
        // <div className='text-white border-2 border-red-400'>
        <div className='m-10'>
            <h1 className='mx-auto text-lg md:text-3xl font-bold mb-2 md:mb-4 text-center w-50 md:w-100 bg-gradient-to-r from-orange-500 to-amber-300 text-transparent bg-clip-text'>
                Certifications</h1>
            <div className='opacity-100 relative w-50 h-40 md:w-170 md:h-120 rounded-xl mx-auto flex items-center justify-center'>

                <img
                    onClick={previousImage}
                    className='w-2 md:w-9 z-10 absolute left-2 bg-gray-800 opacity-30 rounded-full px-2 py-2 cursor-pointer'
                    src='previousarrow.png' />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 w-full overflow-hidden rounded-lg shadow-lg"
                    >
                        <img
                            src={images[currentImage]}
                            alt={`Gallery image ${currentImage + 1}`}
                            className="rounded-xl w-full h-full object-cover absolute top-0 left-0"
                        />
                    </motion.div>
                </AnimatePresence>

                <img
                    onClick={nextImage}
                    className='z-10 w-2 md:w-9 absolute right-2 bg-gray-800 opacity-30 rounded-full px-2 py-2 cursor-pointer'
                    src='nextarrow.png' />
                
                <div className='absolute flex justify-center items-center gap-2 md:gap-4 top-42 md:top-125'>

                {images.map((image, index) => (
                    <div 
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-1 md:h-2 rounded-2xl ${index === currentImage ? "bg-gray-800 w-4 md:w-12" : "bg-gray-300 w-2 md:w-6"}`}
                    ></div>
                ))}
                </div>

            </div>
        </div>
        //  </div>
    )
}

export default Carousel