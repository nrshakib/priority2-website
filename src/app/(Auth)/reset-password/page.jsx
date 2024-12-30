"use client";

import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LuKey } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { toast } from "sonner";

export default function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success("Password reset successfully");
    console.log("Password reset successfully:", password);
    router.push("/reset-confirmation");
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <div className="w-full max-w-md rounded-lg p-6">
        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-[#FFF5ED] rounded-full mx-auto">
            <LuKey className="text-[#0EBE7F] text-2xl" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-[#18181B] mt-4">
            Set new password
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-[#6B7280] mt-2">
            Your new password must be different to previously used passwords.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleResetPassword} className="mt-6">
          {/* Password Field */}
          <div className="mb-4">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <p className="text-xs text-[#6B7280] mt-1">
              Must be at least 8 characters.
            </p>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="confirm-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
          </div>

          {/* Reset Password Button */}
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
            Reset password
          </Button>
        </form>
      </div>
      {/* Back Arrow */}
      <div
        className="flex items-center gap-2 cursor-pointer text-[#3C3C3C] mb-6"
        onClick={handleBackToLogin}
      >
        <FaArrowLeft />
        <span className="text-sm font-medium">Back to log in</span>
      </div>
    </div>
  );
}
