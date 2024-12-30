/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import review01 from "@/../public/assets/images/review01.png";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Dr. Maria S.",
    role: "Doctor",
    image: review01,
    description:
      "Clinivea has streamlined communication with patients. The MVRs ensure patients fully understand their treatment plans, which has significantly improved adherence and outcomes.",
    address: "New York, USA",
    review: 4.8, // Rating out of 5
  },
  {
    id: 2,
    name: "Anne L.",
    role: "Patient",
    image: review01,
    description:
      "Clinivea's representatives explained my treatment options clearly, helping me feel more confident about managing my condition. Their support is invaluable.",
    address: "Los Angeles, USA",
    review: 4.9, // Rating out of 5
  },
  {
    id: 3,
    name: "Dr. John D.",
    role: "Doctor",
    image: review01,
    description:
      "The MedicoVigilance Representatives have made follow-ups much more efficient. They ensure patients understand their prescriptions, leading to better recovery rates.",
    address: "London, UK",
    review: 4.7, // Rating out of 5
  },
  {
    id: 4,
    name: "Emily R.",
    role: "Patient",
    image: review01,
    description:
      "Clinivea's services have been a game-changer for my recovery. Their representatives patiently answered my questions and helped me stay on track with my doctor's advice.",
    address: "Toronto, Canada",
    review: 5.0, // Rating out of 5
  },
];

const Reviews = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="flex flex-col gap-4">
        {/* Heading */}
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold text-[#32526B] text-center">
          Some Reviews
        </h1>
        <p className="text-[#32526B] text-sm sm:text-base lg:text-lg text-center">
          What Are People Saying About Us
        </p>

        {/* Swiper Container */}
        <div className="relative mt-10">
          {/* Background Shape */}
          <div className="hidden lg:block absolute top-0 left-0 w-1/4 h-full bg-[#A6F4CE] rounded-xl -z-10"></div>

          <div className="w-full mx-auto">
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              modules={[EffectFade, Navigation]}
              className="mySwiper"
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <ReviewCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute top-[50%] left-4 z-10 cursor-pointer text-white text-lg sm:text-xl bg-[#0EBE7F] rounded-full py-2 px-3 -ml-3 transform -translate-y-1/2">
              <GoArrowLeft />
            </div>
            <div className="custom-next absolute top-[50%] right-4 z-10 cursor-pointer text-white text-lg sm:text-xl bg-[#0EBE7F] rounded-full py-2 px-3 -mr-3 transform -translate-y-1/2">
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
