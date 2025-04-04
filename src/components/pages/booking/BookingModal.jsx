import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Calendar from "./Calendar";

const BookingModal = ({ setIsBookingOpen }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 p-4">
      <motion.div
        className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsBookingOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <IoMdClose size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Section - Branding & Meeting Details */}
          <div className="md:w-1/2 p-6 border-r">
            <h3 className="text-lg font-bold text-gray-700">Elite Properties</h3>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Live meeting with Sales Team</h2>
          </div>

          {/* Right Section - Calendar */}
          <div className="md:w-1/2 p-6">
            <Calendar setSelectedDate={setSelectedDate} />
          </div>
        </div>

        {/* Confirm & Cancel Buttons */}
        <div className="flex justify-between p-4 border-t mt-4">
          <button
            onClick={() => setIsBookingOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => alert(`Meeting booked for ${selectedDate?.toDateString()}`)}
            className={`px-4 py-2 rounded-lg ${selectedDate ? "bg-orange-500 text-white" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={!selectedDate}
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
