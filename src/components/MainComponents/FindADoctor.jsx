import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

import findDoctor from "@/../public/assets/images/logInImage.png";
import overlayImg from "@/../public/assets/images/landingCheer.png";

export default function FindADoctor() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 px-4 sm:px-16 lg:px-24 xl:px-32 py-10 bg-[#F9FAFB]">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src={findDoctor}
          alt="Main Image"
          className="rounded-xl w-full max-w-sm sm:max-w-md lg:max-w-lg"
        />
        <div className="absolute bottom-[-20px] right-[-20px] sm:bottom-[-30px] sm:right-2 lg:-right-8 2xl:-bottom-12 2xl:right-56">
          <Image
            src={overlayImg}
            alt="Overlay Image"
            className="size-24 sm:size-44 rounded-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 lg:w-1/3 text-center lg:text-left">
        <p className="text-2xl sm:text-3xl font-bold text-[#222222]">
          Find a Doctor
        </p>

        <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
          The "Find a Doctor" section connects you with top healthcare
          professionals based on specialty, location, and more. Access detailed
          profiles with qualifications and reviews, and easily book in-person or
          virtual appointments. Experience a streamlined, user-focused approach
          to finding trusted care tailored to your unique needs.
        </p>
        <Button
          variant="outlined"
          sx={{
            border: "2px solid #0EBE7F",
            borderRadius: "12px",
            textTransform: "none",
            color: "#0EBE7F",
            fontSize: "16px",
            fontWeight: "500",
            padding: "12px 24px",
            ":hover": {
              backgroundColor: "#0EBE7F",
              color: "#FFFFFF",
              border: "2px solid #0EBE7F",
            },
          }}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}
