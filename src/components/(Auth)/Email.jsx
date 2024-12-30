"use client";

import { Button, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { HiOutlineMail } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function CheckEmail() {
  const router = useRouter();

  const handleOpenEmailApp = () => {
    console.log("Open email app");
  };

  const handleResendEmail = () => {
    console.log("Resend email link");
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  const email = localStorage.getItem("email");
  console.log("email", email);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md  rounded-lg p-6">
        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-[#FFF5ED] rounded-full mx-auto">
            <HiOutlineMail className="text-[#0EBE7F] text-2xl" />
          </div>

          {/* Title */}
          <Typography
            variant="h5"
            className="mt-4 font-semibold text-[#18181B]"
          >
            Check your email
          </Typography>

          {/* Subtitle */}
          <Typography variant="body2" className="mt-2 text-[#6B7280]">
            We sent a password reset link to
          </Typography>
          <Typography
            variant="body2"
            className="mt-1 font-medium text-[#18181B]"
          >
            {email}
          </Typography>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          {/* Open Email App */}
          <Button
            variant="contained"
            fullWidth
            onClick={handleOpenEmailApp}
            sx={{
              backgroundColor: "#0EBE7F",
              textTransform: "none",
              fontWeight: "600",
              borderRadius: "8px",
              height: "45px",
            }}
          >
            Open email app
          </Button>

          {/* Resend Link */}
          <Typography
            variant="body2"
            className="text-center text-[#6B7280] mt-2"
          >
            Didn’t receive the email?{" "}
            <span
              className="text-[#6941C6] font-medium cursor-pointer"
              onClick={handleResendEmail}
            >
              Click to resend
            </span>
          </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              textTransform: "none",
              fontWeight: "600",
              borderRadius: "8px",
              height: "45px",
            }}
            className="flex items-center gap-2 cursor-pointer text-[#3C3C3C]"
            onClick={handleBackToLogin}
          >
            <ArrowBack className="text-[#3C3C3C]" />
            <span className="text-[#667085] text-sm font-medium transform-none">
              Back to log in
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
