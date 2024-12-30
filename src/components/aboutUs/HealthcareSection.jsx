import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import healthCare from "@/../public/assets/images/healthCare.png";

export default function HealthcareSection() {
  return (
    <div className="bg-white py-2 lg:py-12 px-6 md:px-12 lg:px-24 2xl:px-96">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={healthCare}
            alt="Healthcare Professionals"
            width={0}
            height={0}
            className="h-40 w-full sm:h-[300px] lg:h-[350px] lg:w-[618px] xl:h-[450px] xl:w-[718px] rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col gap-2 lg:gap-6 xl:gap-12 w-full lg:w-2/3 mt-2  lg:mt-0 lg:ml-12 text-center lg:text-start">
          <p className="sm:text-lg lg:text-3xl xl:text-6xl font-semibold text-[#333333] leading-tight">
            Providing Exceptional Healthcare with a focus on patient.
          </p>
          <p className="text-xs xl:text-xl text-[#6B6B6B] ">
            At MediCare, our mission is to provide exceptional healthcare
            services with a focus on patient-centered care. We are dedicated to
            improving the health and well-being of our community through
            compassionate, innovative, and quality-driven practices.
          </p>
        </div>
      </div>
    </div>
  );
}
