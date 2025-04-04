'use client';

import { motion } from "framer-motion";
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/home/partner1.jpeg",
    heading: "RAHEJA DEVELOPERS",
    paragraph: "Discover the perfect property tailored to your needs and lifestyle."
  },
  {
    image: '/home/partner2.jpeg',
    heading: "KINGSTON DEVELOPERS",
    paragraph: "Experience elegance and comfort in our finest properties."
  },
  {
    image: '/home/partner3.jpeg',
    heading: "KUMAR BUILDERS",
    paragraph: "Invest in quality homes that bring lasting joy and worth."
  },
];

const Partner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative w-[90%] max-w-6xl h-[70vh] mx-auto mb-16 mt-6 rounded-3xl overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" 
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay Effect */}
        <div className="absolute inset-0  bg-opacity-50"></div>

        <motion.h1 
          className="absolute top-6 left-1/2 transform -translate-x-1/2 
          bg-white bg-opacity-20 text-black text-3xl md:text-5xl font-bold text-center
          px-6 py-2 rounded-lg shadow-md backdrop-blur-lg border border-white/30 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Partners
        </motion.h1>

        {/* Content Section */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center w-[80%] md:w-[60%] p-6"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -30 }} 
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-2">{slides[currentIndex].heading}</h2>

          {/* Paragraph */}
          <p className="mt-4 text-lg md:text-xl opacity-90">{slides[currentIndex].paragraph}</p>
        </motion.div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </button>
    </section>
  );
};

export default Partner;
