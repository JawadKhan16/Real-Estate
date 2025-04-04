"use client";

import { Phone, Mail, MessageSquare, Building2, ClipboardList, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Property Consultancy",
    description: "Expert advice to help you make the best real estate decisions—buying, selling, or investing.",
    icon: <Building2 size={36} className="text-orange-500 mb-4" />,
  },
  {
    title: "Property Management",
    description: "Professional management of your property including maintenance, tenant handling, and more.",
    icon: <ClipboardList size={36} className="text-orange-500 mb-4" />,
  },
  {
    title: "Brokerage Services",
    description: "Connecting you with buyers, sellers, and renters to ensure smooth transactions.",
    icon: <Handshake size={36} className="text-orange-500 mb-4" />,
  },
];

const Hero = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-12">
      {/* Static Heading */}
      <h1 className="text-4xl font-bold text-center text-black mb-10">
        Our <span className="text-blue-600">Services</span>
      </h1>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
          >
            {/* Centered Icon */}
            <div className="flex justify-center">{service.icon}</div>

            {/* Title & Description */}
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>

            {/* Contact Options */}
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <Phone size={18} />
              </button>
              <button className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 transition">
                <MessageSquare size={18} />
              </button>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <Mail size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
