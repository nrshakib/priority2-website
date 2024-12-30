import React from "react";
import { Box, p } from "@mui/material";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";

export default function AboutReviews() {
  const reviews = [
    {
      id: 1,
      text: "Dr. Robert Thompson is an exceptional cardiologist. His ability to explain with complex medical issues in a way that’s easy to understand is truly impressive.",
      name: "David Patel",
      rating: 5,
    },
    {
      id: 2,
      text: "Dr. Robert Thompson is an exceptional cardiologist. His ability to explain with complex medical issues in a way that’s easy to understand is truly impressive.",
      name: "David Patel",
      rating: 5,
    },
    {
      id: 3,
      text: "Dr. Robert Thompson is an exceptional cardiologist. His ability to explain with complex medical issues in a way that’s easy to understand is truly impressive.",
      name: "David Patel",
      rating: 5,
    },
    {
      id: 4,
      text: "Dr. Robert Thompson is an exceptional cardiologist. His ability to explain with complex medical issues in a way that’s easy to understand is truly impressive.",
      name: "David Patel",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-5 sm:py-12 px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-10">
      {/* Header */}
      <p className="text-lg md:text-4xl 2xl:text-6xl font-bold text-[#333333] text-center mb-8">
        1200+ Review Form Patient
      </p>

      {/* Reviews Container */}
      <div className="bg-white sm:py-12 px-6 md:px-12 lg:px-2 xl:px-5 2xl:px-48">
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Box
              key={review.id}
              className="flex flex-col justify-between bg-[#E9FBF3] p-6 rounded-lg shadow-md"
            >
              {/* Quote Icon */}
              <FaQuoteRight className="text-[#0EBE7F] text-3xl mb-4" />

              {/* Review Text */}
              <p className="text-sm text-[#333333] mb-4">{review.text}</p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-2">
                <FaUser className="text-3xl text-[#333333]" />
                <div>
                  <p className="font-semibold text-sm text-[#333333]">
                    {review.name}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <FaStar key={index} className="text-[#FFC107] text-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </Box>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {/* <div className="flex justify-center mt-8">
        <div className="h-2 w-2 bg-[#0EBE7F] rounded-full mx-1"></div>
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
      </div> */}
    </div>
  );
}
