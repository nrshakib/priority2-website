import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/assets/logo/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { Box, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box className="bg-[#D0FBE4] py-10 px-6 sm:px-10 md:px-16 lg:px-10 xl:px-40">
      <Box className="flex flex-col md:flex-row md:gap-40 lg:gap-0 lg:justify-between">
        {/* Logo and Description */}
        <Box className="md:w-1/2 flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-10 mb-6 md:mb-0">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-20 h-20"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <p className="text-lg sm:text-xl xl:text-2xl font-medium text-[#333333]">
              Doctor Appointment Booking
            </p>
            <p className="text-sm sm:text-base xl:text-lg text-[#333333] leading-6 lg:w-2/3">
              Take control of your health journey with MediCareSync, a trusted
              companion committed to your well-being. Your health, your time,
              your way. Start your journey today.
            </p>
          </Box>
        </Box>

        {/* Links Section */}
        <Box className="md:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-2 xl:gap-10">
          {/* Explore */}
          <Box>
            <p className="text-lg sm:text-xl font-semibold">Explore</p>
            <Box className="flex flex-col mt-2 space-y-2 text-sm sm:text-base">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact-us">Contact</Link>
            </Box>
          </Box>

          {/* Support */}
          <Box>
            <p className="text-lg sm:text-xl font-semibold">Support</p>
            <Box className="flex flex-col mt-2 space-y-2 text-sm sm:text-base">
              <Link href="/terms-and-condition">Terms & Condition</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <p className="text-lg sm:text-xl font-semibold">Contact</p>
            <Box className="flex flex-col mt-2 space-y-2 text-sm sm:text-base">
              <p className="flex items-center gap-2 xl:gap-3">
                <FaPhoneAlt className="text-sm" /> +923041234567
              </p>
              <p className="flex items-center gap-2 xl:gap-3">
                <IoMail className="text-sm" /> Live@doctor.com
              </p>
              <p className="flex items-center gap-2 xl:gap-3">
                <FaLocationDot className="text-sm" /> Dhaka, Bangladesh
              </p>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          height: "1px",
          marginY: "30px",
          backgroundColor: "#333333",
        }}
      />

      {/* Footer Bottom */}
      <Box className="flex flex-col md:flex-row justify-between items-center text-sm text-[#333333] gap-4 md:gap-0">
        <p className="text-center md:text-left">
          Copyright &copy; 2024, All Rights Reserved
        </p>
        <Box className="flex space-x-6">
          <Link href="https://www.facebook.com/">
            <FaFacebook fontSize={24} />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaSquareInstagram fontSize={24} />
          </Link>
          <Link href="https://www.linkedin.com/feed/">
            <FaLinkedin fontSize={24} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
