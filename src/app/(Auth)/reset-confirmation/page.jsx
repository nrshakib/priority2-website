"use client";

import { Button, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function PasswordResetSuccess() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-3 w-full max-w-md rounded-lg p-6 text-center">
        {/* Content */}
        <div className="flex flex-col gap-2 text-center">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-[#D1FADF] rounded-full mx-auto">
            <CheckCircle className="text-[#0EBE7F] text-2xl" />
          </div>

          <div>
            {/* Title */}
            <Typography
              variant="h5"
              className="mt-4 font-semibold text-[#18181B]"
            >
              Password reset
            </Typography>

            {/* Subtitle */}
            <Typography variant="body2" className="mt-2 text-[#6B7280]">
              Your password has been successfully reset.
            </Typography>
            <Typography variant="body2" className="mt-1 text-[#6B7280]">
              Click below to log in magically.
            </Typography>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-6">
          <Button
            variant="contained"
            fullWidth
            onClick={handleContinue}
            sx={{
              backgroundColor: "#0EBE7F",
              textTransform: "none",
              fontWeight: "600",
              borderRadius: "8px",
              height: "45px",
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
