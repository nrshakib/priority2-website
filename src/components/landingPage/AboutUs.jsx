import Image from "next/image";
import React from "react";

import landingAbout from "@/../public/assets/images/landingAbout.png";
import landingCheer from "@/../public/assets/images/landingCheer.png";
import ornament1 from "@/../public/assets/icons/Ornament 11.png";
import ornament2 from "@/../public/assets/icons/Ornament 13.png";
import { Button } from "@mui/material";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-8 px-4 sm:px-16 lg:px-32 xl:px-64 py-10">
      {/* Left Section - Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div>
          <Image
            src={landingAbout}
            alt="landingAbout"
            width={0}
            height={0}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 lg:translate-x-12 lg:translate-y-0">
          <Image
            src={landingCheer}
            alt="landingCheer"
            width={0}
            height={0}
            className="w-40 sm:w-60 lg:w-80"
          />
        </div>
      </div>

      {/* Right Section - Text and Button */}
      <div className="flex flex-col gap-6 border-2 border-[#0EBE7F] px-6 sm:px-10 lg:px-16 py-8 rounded-xl w-full lg:w-1/2">
        <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#32526B]">
          About Us
        </p>
        <p className="text-base sm:text-lg lg:text-2xl font-medium text-[#32526B]">
          World-Class Preventive, Prescriptive & Curative Medical Practices
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-[#32526B]">
          Discover quality healthcare close to you with our easy-to-use
          platform. Quickly locate and connect with nearby healthcare
          professionals who meet your needs. Take charge of your well-being—
          find a doctor today. Your health journey starts here.
        </p>
        <Link href="/contact" className="w-fit">
          <Button
            variant="outlined"
            sx={{
              border: "2px solid #0EBE7F",
              borderRadius: "12px",
              textTransform: "none",
              color: "#333333",
              fontSize: "16px",
              fontWeight: "500",
              padding: "12px 20px",
              ":hover": {
                backgroundColor: "#0EBE7F",
                color: "#FFFFFF",
                border: "2px solid #0EBE7F",
              },
            }}
          >
            Contact Us
          </Button>
        </Link>
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute hidden lg:block left-2/3 top-5">
        <Image
          src={ornament1}
          alt="ornament1"
          width={0}
          height={0}
          className="w-12 h-12 lg:w-16 lg:h-16"
        />
      </div>
      <div className="absolute hidden lg:block right-0 -top-10">
        <Image
          src={ornament2}
          alt="ornament2"
          width={0}
          height={0}
          className="w-20 h-20 lg:w-28 lg:h-28"
        />
      </div>
    </div>
  );
}
