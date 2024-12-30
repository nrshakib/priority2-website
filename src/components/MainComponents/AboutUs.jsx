import Image from "next/image";
import React from "react";

import ornament01 from "@/../public/assets/icons/Ornament 11.png";
import ornament02 from "@/../public/assets/icons/Ornament 13.png";

export default function AboutUs() {
  return (
    <div className="px-4 sm:px-16 lg:px-32 xl:px-40 py-4 sm:py-12 xl:py-28 relative">
      {/* Section Heading */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-7xl font-bold text-[#32526B] mb-8">
        About Us
      </h2>

      {/* Content Box */}
      <div className="border-2 border-[#0EBE7F] rounded-lg p-6 sm:p-10 bg-white relative">
        <h3 className="text-center text-base sm:text-xl font-semibold text-[#32526B] mb-4">
          World-Class Preventive, Prescriptive & Curative Medical Practices
        </h3>
        <p className="text-xs sm:text-base text-[#32526B] leading-relaxed text-center">
          [Your Healthcare Website Name] connects you with trusted healthcare
          professionals, making quality care accessible and convenient. Our
          platform enables seamless appointment booking with top specialists,
          offering both in-person and virtual consultations. We’re dedicated to
          enhancing your healthcare experience, providing personalized support
          every step of the way. Discover quality healthcare close to you with
          our easy-to-use platform. Quickly locate and connect with nearby
          healthcare professionals who meet your needs. Take charge of your
          well-being—find a doctor today. Your health journey starts here.
        </p>
      </div>

      <div className="absolute top-16 sm:top-24 lg:right-48 xl:top-32 xl:right-64">
        {/* blue */}
        <Image
          src={ornament01}
          alt="ornament01"
          width={0}
          height={0}
          className="size-10 sm:size-12 xl:size-14"
        />
      </div>
      <div className="absolute -top-2 right-4 sm:right-10 lg:-top-10 lg:right-16 xl:-top-16 xl:right-10 2xl:right-20">
        {/* green */}
        <Image
          src={ornament02}
          alt="ornament02"
          width={0}
          height={0}
          className="size-14 sm:size-20 lg:size-28 xl:size-32"
        />
      </div>
      <div className="absolute top-16 sm:top-24 lg:left-48 lg:top-[390px] xl:top-[440px] xl:left-64 2xl:top-32 2xl:right-64">
        {/* blue 2 */}
        <Image
          src={ornament01}
          alt="ornament01"
          width={0}
          height={0}
          className="size-10 sm:size-12 2xl:size-14"
        />
      </div>
      <div className="absolute -top-2 right-4 sm:right-10 lg:top-96 lg:left-12 xl:top-[450px] xl:left-10 2xl:left-20">
        {/* green 2 */}
        <Image
          src={ornament02}
          alt="ornament02"
          width={0}
          height={0}
          className="size-14 sm:size-20 xl:size-32"
        />
      </div>
    </div>
  );
}
