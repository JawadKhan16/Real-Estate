"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="bg-white w-screen text-black min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Book a Meeting
      </motion.h1>
      <p className="text-lg mb-6 max-w-lg">
        Schedule a live meeting with our Sales Team to discuss your property needs.
      </p>
      <button
        onClick={() => setIsBookingOpen(true)}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
      >
        Select Date & Time
      </button>

      {/* Booking Modal */}
      {isBookingOpen && <BookingModal setIsBookingOpen={setIsBookingOpen} />}
    </section>
  );
};

export default Hero;
