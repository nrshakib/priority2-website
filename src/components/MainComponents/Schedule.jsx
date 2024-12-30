import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import image01 from "@/../public/assets/images/schedule (1).png";
import image02 from "@/../public/assets/images/schedule (2).png";
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

export default function UpcomingSchedule() {
  const schedule = [
    {
      id: 1,
      name: "Mr. Jack",
      age: 40,
      gender: "Male",
      date: "Monday, 26 June",
      time: "10:00 AM",
      image: image01,
    },
    {
      id: 2,
      name: "Olivia Bennett",
      age: 40,
      gender: "Female",
      date: "Monday, 26 June",
      time: "10:00 AM",
      image: image02,
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8 sm:px-8 lg:px-16 xl:px-32 bg-[#E6FDF9] h-full">
      {/* Header Section */}
      <div className="flex flex-wrap items-center gap-2 justify-between mb-6">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#333333]">
          Upcoming Schedule
          <span className="bg-[#0EBE7F] rounded-full text-white font-semibold px-3 py-1 text-sm sm:text-base  lg:py-1.5">
            3
          </span>
        </h2>
        <Link href="/see-all" className="text-sm sm:text-base text-[#0EBE7F]">
          See All
        </Link>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-4">
        {schedule.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full lg:w-[400px] h-48 p-4 bg-[#0EBE7F] rounded-lg shadow-md border-2 border-[#0EBE7F]"
          >
            {/* Card Header */}
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <div className="size-16 sm:size-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  className="size-24 object-cover"
                />
              </div>

              {/* User Info */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-xl font-bold text-[#FFFFFF]">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-base text-[#FFFFFF]">
                  Age: {item.age}
                </p>
                <p className="text-xs sm:text-base text-[#FFFFFF]">
                  Gender: {item.gender}
                </p>
              </div>

              {/* Join Button */}
              <div>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    width: "80px",
                    color: "#0EBE7F",
                    textTransform: "none",
                    padding: "8px 16px",
                    fontSize: "14px",
                    ":hover": {
                      backgroundColor: "#D0FBE4",
                    },
                  }}
                >
                  Join
                </Button>
              </div>
            </div>

            {/* Schedule Details */}
            <div className="flex items-center justify-between mt-4 text-sm sm:text-base bg-[#D0FBE4] p-3 text-[#0EBE7F]">
              <div className="flex items-center gap-2 font-semibold">
                <FaCalendar />
                {item.date}
              </div>
              <p>|</p>
              <div className="flex items-center gap-2 font-semibold">
                <FaClock />
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
