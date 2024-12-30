import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

import doctorImage from "@/../public/assets/images/doctorImage.png";
import smiley from "@/../public/assets/logo/smiley.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-end sm:items-center justify-center px-1 lg:px-20 xl:px-32 lg:py-8 xl:py-10">
      <div className="flex flex-col gap-4 sm:w-1/2 sm:py-8 lg:py-10 mt-4">
        <div className="flex flex-col items-center sm:items-start sm:gap-3 px-2 sm:px-10 lg:px-0">
          <p className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl font-semibold text-[#414141]">
            Doctor live
          </p>
          <p className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl font-semibold text-[#0EBE7F]">
            Consultation.
          </p>
          <p className="lg:w-2/3 text-[#111111] text-xs sm:text-base text-center sm:text-start">
            We are committed to deliver Providing you with the best medical and
            healthcare services to help you live a healthy and happy life.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center sm:items-start xl:items-center gap-4 sm:px-10 lg:px-0">
          <Button
            variant="outlined"
            sx={{
              border: "2px solid #0EBE7F",
              borderRadius: "12px",
              textTransform: "none",
              color: "#333333",
              fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
              fontWeight: "500",
              padding: { xs: "10px 16px", sm: "14px 20px", md: "16px 24px" }, // Responsive padding
              ":hover": {
                backgroundColor: "#0EBE7F",
                color: "#FFFFFF",
                border: "2px solid #0EBE7F",
              },
            }}
          >
            Book an appointment
          </Button>

          <div className="flex items-center gap-3">
            <p className="border p-3 sm:p-5 rounded-lg border-[#0EBE7F] bg-[#ECFDF5]">
              <FaPhoneVolume className="text-[#6CE9B4] lg:text-2xl" />
            </p>
            <div>
              <p className="sm:text-lg font-medium text-[#054F39]">
                24H Emergency
              </p>
              <p className="text-[#054F39]">0900-00000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative sm:w-1/2">
        <Image
          src={doctorImage}
          alt="Doctor Image"
          width={0}
          height={0}
          className="size-[240px] sm:size-[350px] 2xl:size-[620px]"
        />
        <div className="absolute top-10 -left-[70PX] xl:top-20 2xl:top-1/3 lg:-left-24 xl:-left-24 2xl:-left-32 flex items-center justify-center gap-2 sm:gap-5 border border-[#0EBE7F] bg-[#f7f9fd] w-36 sm:w-40 lg:w-48 2xl:w-64 sm:h-12 lg:h-24 2xl:h-32 rounded-3xl py-1 sm:px-0 sm:py-0">
          <Image
            src={smiley}
            alt="Smiley"
            width={0}
            height={0}
            className="size-7 lg:size-10 2xl:size-14"
          />
          <div>
            <p className="text-[#77C4FE] text-xs lg:text-2xl font-bold">84K+</p>
            <p className="font-semibold text-[#32526B] text-xs lg:text-base">
              Happy Patients
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-3 right-1 sm:right-8 xl:bottom-10 2xl:bottom-1/8 lg:right-16 xl:right-1/3
           flex items-center justify-center gap-2 
         bg-[#F6F9FFCF] rounded-3xl
           h-12 sm:h-16 lg:h-20 2xl:h-32 w-32 sm:w-40 lg:w-48 2xl:w-64 "
        >
          <div className="border rounded-full sm:p-4 bg-[#ECFDF5]">
            <IoShieldCheckmark className="text-green-500 text-xl sm:text-2xl xl:text-5xl" />
          </div>
          <div>
            <p className="text-[#32526B] text-xs sm:text-lg font-medium">
              Regular <br /> Checkup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
