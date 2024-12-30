import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

const ReviewCard = ({ item }) => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const normalizedRating = Math.min(rating, totalStars); // Ensure rating does not exceed 5
    const filledStars = Math.floor(normalizedRating);
    const emptyStars = totalStars - filledStars;

    return (
      <div className="flex gap-1 items-center">
        {/* Render filled stars */}
        {[...Array(filledStars)].map((_, index) => (
          <FaStar key={`filled-${index}`} className="text-[#0EBE7F]" />
        ))}
        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-stretch items-center md:gap-5 xl:gap-10 bg-[#cbfce4] md:bg-white p-7 md:p-0 rounded-3xl">
      <Image
        src={item.image}
        alt="Testimonial"
        width={0}
        height={0}
        sizes="100vw"
        className="h-20 w-20 rounded-full md:rounded-none md:w-auto md:h-[400px] lg:h-[450px]"
      />
      <div className="flex flex-col items-center md:items-start gap-2 md:px-5 xl:px-10 py-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold">
          {item.name}
        </h1>
        <p className="sm:text-lg lg:text-xl">{item.address}</p>
        <p className="font-medium text-center md:text-start">
          {item.description}
        </p>
        <p className="font-medium text-center md:text-start">{item.role}</p>
        <p>
          {/* Render dynamic stars */}
          {renderStars(item.review)}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
