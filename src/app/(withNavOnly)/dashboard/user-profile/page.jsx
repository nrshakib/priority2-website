"use client";

import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Avatar,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Link from "next/link";

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    firstName: "Lisa",
    lastName: "Ann",
    gender: "Female",
    dateOfBirth: dayjs("1996-12-10"), // Initialize with a dayjs object
    email: "lisaann01@example.com",
    hospitalName: "Example Hospital",
    specialties: "Dentist",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, dateOfBirth: date })); // Store dayjs object
  };

  const handleSaveChanges = () => {
    console.log("Profile updated:", formData);
    // Add API call or further logic here
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Add Profile Picture</h1>

      <div className="flex items-center justify-between mb-8">
        <Avatar
          alt="Profile Picture"
          src="/path-to-profile-pic.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Link href="/">
          <Button
            variant="outlined"
            sx={{
              border: { xs: "1px solid #0EBE7F", sm: "2px solid #0EBE7F" },
              color: "#0EBE7F",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              padding: { xs: "6px 12px", sm: "8px 16px" },
            }}
            className="ml-4 mt-4 sm:mt-0"
          >
            Change Password
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* First Name */}
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#D0FBE4",
            },
          }}
        />

        {/* Last Name */}
        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#D0FBE4",
            },
          }}
        />

        {/* Gender */}
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            label="Gender"
            sx={{ backgroundColor: "#D0FBE4" }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>

        {/* Date of Birth */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={formData.dateOfBirth}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Date of Birth"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#D0FBE4",
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>

        {/* Email */}
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#D0FBE4",
            },
          }}
        />

        {/* Hospital Name */}
        <TextField
          name="hospitalName"
          label="Hospital Name*"
          value={formData.hospitalName}
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#D0FBE4",
            },
          }}
        />

        {/* Specialties */}
        <TextField
          name="specialties"
          label="Specialties*"
          value={formData.specialties}
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#D0FBE4",
            },
          }}
        />
      </div>

      <div className="flex justify-end mt-8">
        <Button
          variant="contained"
          sx={{
            background: "#0EBE7F",
            color: "white",
            textTransform: "none",
          }}
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileUpdate;
