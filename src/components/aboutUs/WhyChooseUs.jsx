import React from "react";
import Image from "next/image";
import chooseUsDoctor from "@/../public/assets/images/chooseUsDoctor.png";
import {
  FaUserMd,
  FaHeartbeat,
  FaBriefcaseMedical,
  FaPhoneAlt,
} from "react-icons/fa";

import icon1 from "@/../public/assets/icons/01.svg.png";
import icon2 from "@/../public/assets/icons/02.svg.png";
import icon3 from "@/../public/assets/icons/03.svg.png";
import icon4 from "@/../public/assets/icons/04.svg.png";
import svg1 from "@/../public/assets/icons/svg1.png";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#ECFDF5] py-12 px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Why Choose Us */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-2 mb-6">
            <p className="font-semibold text-[#FFFAF5] bg-[#0EBE7F] w-36 rounded-xl text-center">
              Why Choose Us
            </p>
            <p className="text-lg sm:text-2xl xl:text-4xl font-bold text-[#111032] leading-snug">
              Why Our Patients Recommend Us
            </p>
            <p className="text-[#6B6B6B] text-base xl:text-lg">
              We are dedicated to providing exceptional medical care.
            </p>
          </div>
          {/* Features List */}
          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-[#32D596]">
              <Image
                src={icon1}
                alt="icon1"
                width={0}
                height={0}
                className="size-12"
              />
              <div>
                <p className="font-semibold xl:text-lg text-[#333333]">
                  Patient-Centered Care
                </p>
                <p className="text-sm text-[#6B6B6B]">
                  Emphasize your commitment to patient well-being.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-[#32D596]">
              <Image
                src={icon2}
                alt="icon2"
                width={0}
                height={0}
                className="size-12"
              />
              <div>
                <p className="font-semibold xl:text-lg text-[#333333]">
                  Emergency Support
                </p>
                <p className="text-sm text-[#6B6B6B]">
                  Emphasize your commitment to patient well-being.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-[#32D596]">
              <Image
                src={icon3}
                alt="icon3"
                width={0}
                height={0}
                className="size-12"
              />
              <div>
                <p className="font-semibold xl:text-lg text-[#333333]">
                  Expertise and Experience
                </p>
                <p className="text-sm text-[#6B6B6B]">
                  Emphasize your commitment to patient well-being.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-[#32D596]">
              <Image
                src={icon4}
                alt="icon4"
                width={0}
                height={0}
                className="size-12"
              />
              <div>
                <p className="font-semibold xl:text-lg text-[#333333]">
                  24/7 hour Emergency Call
                </p>
                <p className="text-sm text-[#6B6B6B]">
                  Emphasize your commitment to patient well-being.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Doctor Image */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center relative mt-20">
          <div className="bg-[#0EBE7F] h-[450px] w-80 p-8 rounded-lg shadow-lg flex flex-col text-white">
            <p className="text-6xl font-bold mb-2">Hello!</p>
            <div className="flex items-center gap-2">
              <Image
                src={svg1}
                alt="svg1"
                width={0}
                height={0}
                className="size-11"
              />
              <p className="text-3xl">24/7</p>
            </div>
          </div>
          <div className="absolute lg:-right-14 xl:right-2 2xl:right-64">
            <Image
              src={chooseUsDoctor}
              alt="Doctor"
              width={300}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
