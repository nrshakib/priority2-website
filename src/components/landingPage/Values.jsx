import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import life from "@/../public/assets/icons/life.png";
import excellence from "@/../public/assets/icons/excellence.png";
import integrity from "@/../public/assets/icons/integrity.png";
import respect from "@/../public/assets/icons/respect.png";

export default function Values() {
  return (
    <Box className="flex flex-col items-center justify-center gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#039866]">
          Our Values
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#344054] max-w-3xl">
          Being in the healthcare sector, we consider it our paradigm duty to
          ensure the safety of our patients, effectiveness of our treatments,
          transparency in our practices, and absolute timely care.
        </p>
      </div>
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Compassion */}
        <Box className="flex flex-col gap-4 px-6 py-8 rounded-lg shadow-md border-t-2 border-b-2 border-[#0EBE7F] bg-[#ECFDF5]">
          <Box className="flex justify-center w-16 p-4 rounded-full bg-[#0EBE7F]">
            <Image
              src={life}
              alt="Compassion"
              height={0}
              width={0}
              className="w-8 h-8"
            />
          </Box>
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl lg:text-2xl font-semibold">Compassion</p>
            <p className="text-sm lg:text-base text-[#344054]">
              We understand that seeking medical care can be a stressful and
              emotional experience, and we strive to create a welcoming and
              supportive environment that puts our patients at ease.
            </p>
          </div>
        </Box>

        {/* Excellence */}
        <Box className="flex flex-col gap-4 px-6 py-8 rounded-lg shadow-md border-t-2 border-b-2 border-[#0EBE7F] bg-[#ECFDF5]">
          <Box className="flex justify-center w-16 p-4 rounded-full bg-[#0EBE7F]">
            <Image
              src={excellence}
              alt="Excellence"
              height={0}
              width={0}
              className="w-8 h-8"
            />
          </Box>
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl lg:text-2xl font-semibold">Excellence</p>
            <p className="text-sm lg:text-base text-[#344054]">
              We are committed to delivering the highest standards of care to
              ensure our patients receive the best possible outcomes.
            </p>
          </div>
        </Box>

        {/* Integrity */}
        <Box className="flex flex-col gap-4 px-6 py-8 rounded-lg shadow-md border-t-2 border-b-2 border-[#0EBE7F] bg-[#ECFDF5]">
          <Box className="flex justify-center w-16 p-4 rounded-full bg-[#0EBE7F]">
            <Image
              src={integrity}
              alt="Integrity"
              height={0}
              width={0}
              className="w-8 h-8"
            />
          </Box>
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl lg:text-2xl font-semibold">Integrity</p>
            <p className="text-sm lg:text-base text-[#344054]">
              We adhere to the highest ethical standards and ensure honesty and
              transparency in all our practices.
            </p>
          </div>
        </Box>

        {/* Respect */}
        <Box className="flex flex-col gap-4 px-6 py-8 rounded-lg shadow-md border-t-2 border-b-2 border-[#0EBE7F] bg-[#ECFDF5]">
          <Box className="flex justify-center w-16 p-4 rounded-full bg-[#0EBE7F]">
            <Image
              src={respect}
              alt="Respect"
              height={0}
              width={0}
              className="w-8 h-8"
            />
          </Box>
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl lg:text-2xl font-semibold">Respect</p>
            <p className="text-sm lg:text-base text-[#344054]">
              We value and respect every individual, fostering an environment of
              dignity and kindness for all.
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
