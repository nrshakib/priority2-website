"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import logo from "@/../public/assets/logo/logo.png";
import { MdEmail } from "react-icons/md";

export default function Navbar({ isDoctor = false, isUser = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#0EBE7F]">
      <div className="flex items-center justify-between px-6 sm:px-10 md:px-20 lg:px-10 py-2">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>

        {/* Hamburger Menu Icon for Small Screens */}
        <div
          className="md:hidden text-[#FFFAF5] text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-xs xl:text-xl text-[#FFFAF5] font-semibold">
          {isDoctor ? (
            <Link href="/doctor">Home</Link>
          ) : isUser ? (
            <Link href="/user">Home</Link>
          ) : (
            <Link href="/">Home</Link>
          )}
          {isDoctor ? (
            <Link href="/doctor/pricing">Pricing</Link>
          ) : isUser ? (
            <Link href="/user/book-now">Book Now</Link>
          ) : (
            <Link href="/pricing">Pricing</Link>
          )}
          {isDoctor ? (
            <Link href="/doctor/about-us">About Us</Link>
          ) : isUser ? (
            <Link href="/user/about-us">About Us</Link>
          ) : (
            <Link href="/about-us">About Us</Link>
          )}
          {isDoctor ? (
            <Link href="/doctor/contact-us">Contact Us</Link>
          ) : isUser ? (
            <Link href="/user/contact-us">Contact Us</Link>
          ) : (
            <Link href="/contact-us">Contact Us</Link>
          )}

          {isDoctor ? (
            <>
              <Link href="/doctor/dashboard">Dashboard</Link>
              {/* Search Box */}
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-md text-black focus:outline-none"
              />
              {/* Mail Icon */}
              <Link href="/profile" onClick={toggleMenu}>
                <MdEmail />
              </Link>
              {/* Profile Icon */}
              <Link href="/profile">
                <FaRegUserCircle fontSize={25} />
              </Link>
            </>
          ) : isUser ? (
            <>
              <Link href="/user/dashboard">Dashboard</Link>
              {/* Search Box */}
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-md text-black focus:outline-none"
              />
              {/* Mail Icon */}
              <Link href="/profile" onClick={toggleMenu}>
                <MdEmail />
              </Link>
              {/* Profile Icon */}
              <Link href="/profile">
                <FaRegUserCircle fontSize={25} />
              </Link>
            </>
          ) : (
            <Link href="/login">Sign In</Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-6 text-lg font-semibold text-[#FFFAF5] bg-[#0EBE7F] md:hidden py-4">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/pricing" onClick={toggleMenu}>
            Pricing
          </Link>
          <Link href="/about-us" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contact-us" onClick={toggleMenu}>
            Contact Us
          </Link>
          {isDoctor ? (
            <>
              {/* Search Box for Mobile */}
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-md text-black focus:outline-none w-3/4"
              />
              {/* Mail Icon */}
              <Link href="/profile" onClick={toggleMenu}>
                <MdEmail />
              </Link>
              {/* Profile Icon */}
              <Link href="/profile" onClick={toggleMenu}>
                <FaRegUserCircle fontSize={25} />
              </Link>
            </>
          ) : (
            <Link href="/login" onClick={toggleMenu}>
              Sign In
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
