'use client';

import {motion} from "framer-motion"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/home/slide1.png",
    text: 'Find your dream home with us.',
  },
  {
    image: '/home/slide2.png',
    text: 'Luxury homes for modern living.',
  },
  {
    image: '/home/slide3.png',
    text: 'Exceptional properties, exceptional value.',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative w-screen h-screen ">
      <div
  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
  style={{
    backgroundImage: `url(${slides[currentIndex].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>


        <motion.div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 
             bg-opacity-50 text-white text-2xl md:text-4xl font-bold 
             px-4 text-center w-full"
         initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -30 }} 
        transition={{ duration: 0.5 }}>
        
        <span className="inline-block px-4 py-2 transition-all duration-300 
        rounded-md hover:bg-gray-800 hover:bg-opacity-70">
        {slides[currentIndex].text}
        </span>
        
        </motion.div>
      </div>
      
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </button>
      
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </button>
    </section>
  );
};

export default Hero;
