import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

import doctorContact from "@/../public/assets/images/doctorContact.png";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center lg:gap-6 px-4 sm:px-8 md:px-16 lg:px-14 xl:px-40 2xl:px-64 py-8 sm:py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#344054] ">
        Contact Us
      </h2>

      {/* Content Wrapper */}
      <div className="bg-white flex flex-col lg:flex-row items-center gap-8 xl:gap-14 rounded-lg p-6 sm:p-10 lg:p-12">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left">
          <p className="text-sm sm:text-base lg:text-lg text-[#32526B] mb-6 leading-relaxed">
            At [Your Healthcare Website Name], we prioritize your experience and
            are here to provide support with any inquiries or assistance you may
            need. Whether you're seeking help with doctor selection, appointment
            scheduling, or navigating our services, our dedicated team is ready
            to assist. You can reach us by phone, email, or by completing the
            contact form below, and we’ll respond promptly. We are committed to
            ensuring a seamless and supportive journey for you. Your feedback is
            valuable to us, as it allows us to continually enhance our services.
            Please don’t hesitate to get in touch.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/user/contact-us">
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #0EBE7F",
                  borderRadius: "12px",
                  textTransform: "none",
                  color: "#0EBE7F",
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  fontWeight: "500",
                  padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
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
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={doctorContact}
            alt="Doctor Consultation"
            className="rounded-lg w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
