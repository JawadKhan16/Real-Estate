"use client";

import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-100 py-16 px-6 md:px-20 text-center"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-semibold text-gray-900"
      >
        OUR STORY
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 text-gray-700 max-w-3xl mx-auto leading-relaxed"
      >
        Since our formation in 2008, Elite Properties has embarked on a transformative journey 
        fueled by our unwavering commitment to customer-centricity and a passion for real estate. 
        This distinctive approach set us apart from the competition and propelled us to become one 
        of Dubai's leading agencies, setting new standards for quality and excellence.
      </motion.p>

      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        className="mt-6 px-6 py-3 text-white bg-gray-900 rounded-full text-lg 
                   hover:bg-gray-800 transition-all duration-300 ease-in-out"
      >
        READ MORE ABOUT US
      </motion.button>
    </motion.section>
  );
};

export default OurStory;
