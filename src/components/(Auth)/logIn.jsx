"use client";

import Image from "next/image";
import React, { useState } from "react";
import logInImage from "@/../public/assets/images/logInImage.png";
import authLogo from "@/../public/assets/logo/logo.png";
import {
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start px-4 sm:px-4 xl:px-36 2xl:px-64 py-10 sm:py-20 2xl:py-28 gap-8 sm:gap-4 xl:gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 2xl:w-3/5 h-auto flex justify-center md:mt-16 lg:mt-8 xl:mt-2">
        <Image
          src={logInImage}
          alt="Log In"
          className="w-full max-w-md md:max-w-full h-auto object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 sm:gap-4 lg:gap-6 mt-0 2xl:mt-10">
        <Image
          src={authLogo}
          alt="Auth Logo"
          className="w-16 md:w-20 lg:w-40 2xl:w-48 h-auto"
        />
        <div className="flex flex-col gap-4 w-full max-w-sm md:max-w-md">
          <div className="text-center flex flex-col gap-3">
            <p className="text-xl md:text-2xl xl:text-4xl 2xl:text-5xl font-semibold text-[#302F51]">
              Log In
            </p>
            <p className="text-[#302F51] text-sm sm:text-base xl:text-lg 2xl:text-2xl">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {/* Email Field */}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={email}
                onChange={handleEmailChange}
                label="Email"
                className="h-12 2xl:h-14"
              />
            </FormControl>

            {/* Password Field */}
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "hide password" : "show password"
                      }
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                className="h-12 2xl:h-14"
              />
            </FormControl>

            <Link
              href="/forgot-password"
              className="text-[#0EBE7F] font-semibold text-sm self-end"
            >
              Forgot Password?
            </Link>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <Button
                variant="contained"
                onClick={handleLogin}
                className="h-12 2xl:h-14 text-white"
                sx={{
                  background: "#0EBE7F",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                onClick={handleGoogleLogin}
                className="h-12 flex items-center gap-2"
                sx={{
                  background: "#fff",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                <FcGoogle className="text-lg" />
                <span className="text-black font-medium">
                  Sign in with Google
                </span>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm md:text-base">
            <p className="text-[#667085] inline">Don’t have an account?</p>{" "}
            <Link href="/signup" className="text-[#0EBE7F] font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
