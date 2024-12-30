"use client";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="bg-[#FFF7F0] min-h-screen flex justify-center items-center lg:py-2 px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-black">
            Contact With Admin
          </h1>
          <p className="text-black mt-2 text-xs sm:text-base">
            Reach out anytime! We're here to answer your questions and provide
            support for your journey. Let's connect today!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <FaUser className="mr-2 text-[#222222]" size={20} />
                  ),
                }}
                className="bg-[#E8FDF5] rounded-md"
              />
            </div>

            {/* Last Name */}
            <div>
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <FaUser className="mr-2 text-[#222222]" size={20} />
                  ),
                }}
                className="bg-[#E8FDF5] rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <FaEnvelope className="mr-2 text-[#222222]" size={20} />
                  ),
                }}
                className="bg-[#E8FDF5] rounded-md"
              />
            </div>

            {/* Phone Number */}
            <div>
              <TextField
                label="Phone Number"
                type="tel"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <FaPhone className="mr-2 text-[#222222]" size={20} />
                  ),
                }}
                className="bg-[#E8FDF5] rounded-md"
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <FaMapMarkerAlt className="mr-2 text-[#222222]" size={20} />
                ),
              }}
              className="bg-[#E8FDF5] rounded-md"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <TextField
              label="Your Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              className="bg-[#E8FDF5] rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#0EBE7F",
                color: "#FFFFFF",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                ":hover": {
                  backgroundColor: "#0AA968",
                },
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
