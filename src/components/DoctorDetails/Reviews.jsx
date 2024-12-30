import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Olivia Parker",
    rating: 4.5,
    review:
      "Dr. Benjamin Hayes is a highly skilled professional who genuinely cares about his patients. I strongly recommend Dr. Benjamin Hayes to anyone seeking exceptional care from a general practitioner.",
  },
  {
    id: 2,
    name: "Olivia Parker",
    rating: 4.5,
    review:
      "Dr. Benjamin Hayes is a highly skilled professional who genuinely cares about his patients. I strongly recommend Dr. Benjamin Hayes to anyone seeking exceptional care from a general practitioner.",
  },
  {
    id: 3,
    name: "Olivia Parker",
    rating: 4.5,
    review:
      "Dr. Benjamin Hayes is a highly skilled professional who genuinely cares about his patients. I strongly recommend Dr. Benjamin Hayes to anyone seeking exceptional care from a general practitioner.",
  },
];

export default function Reviews() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 xl:px-32 py-8 sm:py-12">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#344054] mb-8">
        Reviews
      </h2>

      {/* Review Cards */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-[#D0FBE4]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div>
                <p className="font-semibold">{review.name}</p>
                <div className="flex text-[#FFD700]">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-[#6B7280]">{review.review}</p>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="mt-6 text-[#0EBE7F] text-sm">See More</button>
    </div>
  );
}
