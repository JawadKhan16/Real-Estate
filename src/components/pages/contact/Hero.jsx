"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-[90%] max-w-6xl mx-auto my-12">
      {/* Head Office Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Head Office</h2>
          <p className="text-gray-600">
          9/65, Bund Garden Rd, opposite Residency Club, Agarkar Nagar, Pune, Maharashtra 411001
          </p>
          <hr className="my-4" />
          <p className="text-gray-500 text-sm">Our business operating hours are as follows:</p>
          <p className="text-gray-700 mt-2">Monday to Friday: <strong>9am - 6pm</strong></p>
          <p className="text-gray-700">Saturdays: <strong>10am - 4pm</strong></p>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Please contact us via phone, email, or visit our Head Office during business hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="border px-4 py-2 rounded-lg">📞 1800 123 4567</button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">TEL: 📞 +91 98765 43210</button>
            <button className="border px-4 py-3 rounded-lg flex items-center gap-2">
              <MessageCircle className="text-green-500" size={20} />
              +971502304888
            </button>
            <button className="bg-gray-900 text-white px-4 py-3 rounded-lg flex items-center gap-2">
              <Mail size={20} />
              info@eliteproperties.ae
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <h2 className="text-2xl font-semibold mb-4">Need some advice or have concerns?</h2>
      <p className="text-gray-600 mb-6">
        Contact us via email, phone, or fill out the form below. We will respond within 24 hours.
      </p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <form className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Your Full Name" className="border p-3 rounded-lg w-full" />
            <input type="email" placeholder="Your Email" className="border p-3 rounded-lg w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="tel" placeholder="Your Phone" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Subject" className="border p-3 rounded-lg w-full" />
          </div>
          <textarea placeholder="Your Message" rows="5" className="border p-3 rounded-lg w-full mb-4"></textarea>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg w-full transition">
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div>
          <iframe
            title="Google Map"
            className="w-full h-full rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d242192.7367529454!2d73.909654!3d18.47181!3m2!1i1024!2i768!4f13.1!2m1!1sraheja%20developers%20office!5e0!3m2!1sen!2sin!4v1743766034535!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
