import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

import mainImage from "@/../public/assets/images/doctorAppointment.png";
import orerlayImg from "@/../public/assets/images/landingCheer.png";

export default function CreateAppointment() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-14 2xl:gap-4 px-4 sm:px-16 lg:px-24 xl:px-32 py-10 bg-[#F9FAFB]">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src={mainImage}
          alt="Main Image"
          className="rounded-xl w-full max-w-sm sm:max-w-md lg:max-w-lg"
        />
        <div className="absolute bottom-1 -right-1 sm:bottom-5 sm:right-7 lg:-right-10 xl:bottom-8 xl:-right-6 2xl:bottom-0 2xl:right-52">
          <Image
            src={orerlayImg}
            alt="Overlay Image"
            className="size-32 sm:size-52 xl:size-64 2xl:size-72 rounded-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center gap-4 xl:gap-8 lg:w-[45%] text-center lg:text-left">
        <p className="text-xl sm:text-3xl xl:text-6xl font-bold text-[#344054]">
          Create an Appointment
        </p>
        <p className="text-[#344054] font-semibold sm:text-lg xl:text-3xl">
          "Manage Your Schedule with Ease on Tanya Healthcare"
        </p>
        <p className="text-xs sm:text-base xl:text-lg text-[#344054] leading-relaxed">
          With our intuitive scheduling platform, doctors can effortlessly set
          up and manage their availability to streamline patient bookings.
          Customize your schedule by choosing specific dates, times, and
          appointment types, ensuring a balanced workload and improved patient
          care. Our platform allows you to update your availability in
          real-time, reschedule appointments as needed, and receive
          notifications to stay organized. Tanya Healthcare makes managing your
          practice smoother, helping you focus on what truly matters—providing
          exceptional care for your patients.
        </p>
        <Button
          variant="outlined"
          sx={{
            border: "2px solid #0EBE7F",
            borderRadius: "12px",
            textTransform: "none",
            color: "#0EBE7F",
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
            fontWeight: "500",
            width: { xs: "150px", sm: "200px", md: "240px", xl: "300px" },
            padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" }, // Responsive padding
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
