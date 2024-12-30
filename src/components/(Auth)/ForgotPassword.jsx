"use client";

import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";
import { LuKey } from "react-icons/lu";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    console.log("Reset instructions sent to email", email);
    setEmail("");
    router.push("/email-page");
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md rounded-lg px-6 py-8">
        {/* Back Arrow */}

        {/* Content */}
        <div className="text-center mt-6">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-[#FFF5ED] rounded-full mx-auto">
            <LuKey className="text-[#0EBE7F] text-2xl" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-[#18181B] mt-4">
            Forgot password?
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-[#6B7280] mt-2">
            No worries, we’ll send you reset instructions.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <TextField
              fullWidth
              id="email"
              label="Email"
              placeholder="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#0EBE7F",
                textTransform: "none",
                fontWeight: "600",
                borderRadius: "8px",
                height: "45px",
              }}
            >
              Submit
            </Button>
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
        </form>
      </div>
    </div>
  );
}
