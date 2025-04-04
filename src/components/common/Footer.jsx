import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#071b2c] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/resale" className="hover:text-gray-400">Resale</Link></li>
            <li><Link href="/rental" className="hover:text-gray-400">Rental</Link></li>
            <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p>Mg Road, camp Pune </p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@realestate.com</p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Our Services</h2>
          <ul className="space-y-2">
            <li>Property Buying & Selling</li>
            <li>Rental Assistance</li>
            <li>Home Loan Support</li>
            <li>Legal Documentation</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Elite Properties. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
