import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { FaStar, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function DoctorDetails() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 xl:px-32 py-8 sm:py-12">
      {/* Doctor Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#344054] mb-8">
        Doctor Details
      </h2>

      {/* Doctor Information */}
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/images/bookImage.png"
            alt="Dr. Isabella Stone"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col lg:items-start gap-4 w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#344054]">
            Dr. Isabella Stone
          </h3>
          <p className="text-lg text-[#6B7280]">Ophthalmologist</p>
          <p className="text-sm text-[#344054] flex items-center gap-2">
            <FaClock className="text-[#0EBE7F]" /> Monday–Friday, 08:00 AM–10:00
            PM
          </p>
          <div className="flex items-center gap-6 mt-2">
            <div className="flex flex-col items-center gap-2 text-sm">
              <FaUserAlt className="text-[#0EBE7F]" />
              <span>2,000+</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <FaCalendarAlt className="text-[#0EBE7F]" />
              <span>5+ years experience</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <FaStar className="text-[#FFD700]" />
              <span>4.9 ratings</span>
            </div>
          </div>
          <p className="text-sm text-[#344054] leading-relaxed">
            Dr. Isabella Stone, a dedicated general practitioner, brings a
            wealth of experience to Sunset Heart Institute in Ocean View, FL.{" "}
            <span className="text-[#0EBE7F] cursor-pointer">View more.</span>
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0EBE7F",
              color: "#fff",
              borderRadius: "8px",
              padding: "10px 24px",
              ":hover": {
                backgroundColor: "#0AA067",
              },
            }}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
