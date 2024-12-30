"use client";

import Image from "next/image";
import React, { useState } from "react";
import signUpImage from "@/../public/assets/images/signUpImage.png";
import authLogo from "@/../public/assets/logo/logo.png";
import {
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { Height, Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signedUpModal, setSignedUpModal] = useState(true);
  const [signedUp, setSignedUp] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const router = useRouter();

  const handleSignUp = () => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log("Name:", name, "Email:", email, "Password:", password);
        setSignedUp(true); // Open the modal
      } else {
        console.error("Passwords do not match");
      }
    } else {
      console.error("All fields are required");
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Sign Up with Google Clicked");
  };

  const handleModalClose = () => {
    setSignedUpModal(false);
  };

  const handleDoneButton = () => {
    setSignedUpModal(false);
    router.push("/login");
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "transparent",
    boxShadow: 24,
    borderRadius: "12px",
    p: 0,
  };

  const gradientBoxStyle = {
    background: "linear-gradient(135deg, #4e4e4e, #656565, #8e8e8e)",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row-reverse items-center md:items-start px-4 sm:px-8 xl:px-36 2xl:px-64 py-10 sm:py-20 2xl:py-24 gap-8 sm:gap-4 xl:gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 2xl:w-3/5 h-auto flex justify-center md:mt-16 lg:mt-8 xl:mt-2">
        <Image
          src={signUpImage}
          alt="Sign Up"
          className="w-full max-w-md md:max-w-full h-auto object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 sm:gap-4">
        <Image
          src={authLogo}
          alt="Auth Logo"
          className="w-16 md:w-20 lg:w-40 2xl:w-48 h-auto"
        />
        <div className="flex flex-col gap-4 w-full max-w-sm md:max-w-md">
          <div className="text-center flex flex-col gap-3">
            <p className="text-xl md:text-2xl xl:text-4xl font-semibold text-[#302F51]">
              Create an account
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {/* Name Field */}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                value={name}
                onChange={handleNameChange}
                label="Name"
                className="h-12"
              />
            </FormControl>

            {/* Email Field */}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={email}
                onChange={handleEmailChange}
                label="Email"
                className="h-12"
              />
            </FormControl>

            {/* Password Field */}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
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
                className="h-12"
              />
            </FormControl>

            {/* Confirm Password Field */}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-confirm-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleClickShowConfirmPassword}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                className="h-12"
              />
            </FormControl>

            {/* User Role */}
            <FormControl>
              <RadioGroup
                aria-labelledby="role-selection"
                defaultValue="patient"
                name="role-group"
                row
              >
                <FormControlLabel
                  value="patient"
                  control={<Radio />}
                  label="Sign Up as a Patient"
                />
                <FormControlLabel
                  value="doctor"
                  control={<Radio />}
                  label="Sign Up as a Doctor"
                />
              </RadioGroup>
            </FormControl>

            {/* Sign Up Button */}
            <Button
              variant="contained"
              onClick={handleSignUp}
              className="h-12 2xl:h-16 text-white"
              sx={{
                background: "#0EBE7F",
                borderRadius: "8px",
                fontWeight: "600",
                textTransform: "none",
              }}
            >
              Sign Up
            </Button>
          </div>

          {/* Sign Up with Google */}
          <Button
            variant="contained"
            onClick={handleGoogleSignUp}
            className="h-12 2xl:h-16 flex items-center gap-2"
            sx={{
              background: "#fff",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            <FcGoogle className="text-lg" />
            <span className="text-black font-medium">Sign up with Google</span>
          </Button>

          {/* Already Have an Account */}
          <div className="text-center text-sm md:text-base">
            <p className="text-[#667085] inline">Already have an account?</p>{" "}
            <Link href="/login" className="text-[#0EBE7F] font-medium">
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={signedUp}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={gradientBoxStyle}>
            {/* Close Icon */}
            <IconButton
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "white",
              }}
              onClick={handleModalClose}
            >
              <IoMdCloseCircle className="text-[#0EBE7F] text-2xl bg-white rounded-full" />
            </IconButton>

            {/* Success Icon */}
            <FaCircleCheck
              className="text-[#0EBE7F] text-6xl bg-white rounded-full"
              // sx={{ color: "", fontSize: 60 }}
            />

            {/* Modal Title */}
            <Typography
              id="modal-title"
              variant="h6"
              sx={{
                mt: 2,
                color: "white",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              Sign Up Successful
            </Typography>

            {/* Done Button */}
            <Button
              variant="contained"
              sx={{
                mt: 3,
                background: "#0EBE7F",
                color: "white",
                fontWeight: "600",
                borderRadius: "8px",
                textTransform: "none",
                width: "80%",
                height: "40px",
              }}
              onClick={handleDoneButton}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
