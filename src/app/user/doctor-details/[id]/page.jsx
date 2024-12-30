"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Rating, Avatar, Box } from "@mui/material";
import { HiUsers } from "react-icons/hi2";
import { FiAward } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function DoctorDetails({ params }) {
  const { id } = params; // Extract `id` from params
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch doctor data from JSON
    axios
      .get("/assets/data/doctorList.json")
      .then((response) => {
        const doctorData = response.data.find(
          (doc) => doc.id.toString() === id
        );
        if (doctorData) {
          setDoctor(doctorData);
        } else {
          setError("Doctor not found");
        }
      })
      .catch(() => setError("Failed to load doctor details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center my-12">Loading...</p>;
  }

  if (error) {
    return <p className="text-center my-12 text-red-500">{error}</p>;
  }

  const handleNavigation = () => {
    router.push(`/user/book-appointment/${doctor.id}`);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-[#FFFAF5]">
      <h1 className="text-center text-6xl font-bold mb-10">Doctor Details</h1>
      <div className="flex flex-wrap gap-20 items-start">
        {/* Doctor Info */}
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-[500px] w-[350px] rounded-lg shadow-md object-cover"
        />

        {/* Doctor Information */}
        <div className="flex flex-col gap-3">
          <h2 className="text-6xl text-[#333333] font-bold">{doctor.name}</h2>
          <p className="text-xl font-semibold text-[#333333]">
            {doctor.specialty}
          </p>
          <p className="text-[#344054] font-bold text-lg">
            Consultant Fee :
            <span className="text-[#0EBE7F]"> $ {doctor.consultantFee}</span>
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[#1F2A37] text-lg">Working Time</p>
            <p className="text-md text-[#344054] flex items-center mb-6">
              {doctor.workingTime}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <HiUsers className="text-[#0EBE7F] text-3xl" />
              <p className="font-bold">{doctor.patients}</p>
              <p className="text-sm text-gray-500">Patients</p>
            </div>
            <div className="flex flex-col items-center">
              <FiAward className="text-[#0EBE7F] text-3xl" />
              <p className="font-bold">{doctor.experience}</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-[#FFC107] text-3xl" />
              <p className="font-bold">{doctor.rating}</p>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <RiMessage3Fill className="text-[#0EBE7F] text-3xl" />
              <p className="font-bold">{doctor.reviewsCount}</p>
              <p className="text-sm text-gray-500">Reviews</p>
            </div>
          </div>

          {/* About Me Section */}
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-gray-700 mb-4">{doctor.description}</p>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#0EBE7F",
              textTransform: "none",
              "&:hover": { bgcolor: "#0AA56A" },
              borderRadius: "8px",
              fontSize: "16px",
              padding: "12px 24px",
              width: "200px",
            }}
            onClick={handleNavigation}
          >
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 w-3/6">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {doctor.reviews && doctor.reviews.length > 0 ? (
          doctor.reviews.map((review) => (
            <Box
              key={review.id}
              className="border rounded-lg p-4 mb-4 shadow-sm"
              display="flex"
              alignItems="start"
              gap={4}
            >
              <Avatar>{review.reviewer.charAt(0)}</Avatar>
              <div>
                <h3 className="font-bold">{review.reviewer}</h3>
                <Rating
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  sx={{ mt: 1 }}
                />
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            </Box>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}
