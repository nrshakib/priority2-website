import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Appointment() {
  return (
    <div className="bg-[#0EBE7F] flex flex-col items-center gap-4 sm:gap-8 py-10">
      <p className="border border-[#ECFDF5] text-[#ECFDF5] rounded-lg font-semibold px-4 py-2 text-xs sm:text-base">
        Book Appointment
      </p>
      <p className="sm:text-2xl lg:text-6xl font-semibold text-[#ECFDF5]">
        Request Your Appointment
      </p>
      <Link href="/">
        <Button
          sx={{
            border: "1px solid #A6F4CE",
            color: "#012D21",
            fontWeight: "600",
            bgcolor: "#ECFDF5",
            borderRadius: "30px",
            paddingY: { xs: "5px", sm: "7px", md: "10px" }, // Adjust vertical padding
            paddingX: { xs: "12px", sm: "16px", md: "18px" }, // Adjust horizontal padding
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Adjust font size
          }}
        >
          Get Appointment
        </Button>
      </Link>
    </div>
  );
}
