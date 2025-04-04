"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {/* Header Bar */}
      <header className="bg-[#071b2c] text-white flex items-center justify-between px-6 py-4 relative z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMenu}>
          <FaBars size={20} />
          <span className="text-lg">Menu</span>
        </div>

        <div className="text-center">
          <h1 className="text-xl font-semibold">ELITE</h1>
          <p className="text-sm tracking-widest">PROPERTIES</p>
        </div>
      </header>

      {/* Slide Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#071b2c] text-white p-6 transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="mb-6 text-right w-full text-white text-xl">
          ✕
        </button>
        <nav className="flex flex-col gap-4 text-lg">
          <Link href="/Home" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/Resale" onClick={toggleMenu}>
            Resale
          </Link>
          <Link href="/Rental" onClick={toggleMenu}>
            Rental
          </Link>
          <Link href="/Service" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/Contact" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link href="/Booking" onClick={toggleMenu}>
            Book a Meeting
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
