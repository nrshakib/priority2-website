"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { FaStar } from "react-icons/fa";

export default function BookAppointment({ params }) {
  const { id } = params; // Extract the dynamic ID from the route
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    // Fetch the doctor data based on the dynamic ID
    axios
      .get("/assets/data/doctorList.json")
      .then((response) => {
        const doctorData = response.data.find(
          (doc) => doc.id.toString() === id
        );
        if (doctorData) {
          setDoctor(doctorData);
        } else {
          setError(
            <div>
              <p>Doctor Not Found</p>
              <p>Working on it..</p>
            </div>
          );
        }
      })
      .catch(() => setError("Failed to load doctor details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center my-12">Loading...</p>;
  if (error) return <p className="text-center my-12 text-red-500">{error}</p>;

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    alert(
      `Appointment Details:\nDoctor: ${doctor.name}\nDate: ${selectedDate}\nTime: ${selectedTime}`
    );
  };

  const dates = Array.from({ length: 31 }, (_, i) => i + 1); // Example dates
  const times = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
  ];

  return (
    <div className="flex flex-col px-4 py-8">
      <h1 className="text-center text-4xl font-bold mb-8">Book Appointment</h1>
      <div className="flex flex-col lg:flex-row items-start gap-10 bg-white shadow-lg rounded-lg p-8">
        {/* Doctor Info */}
        <div className="flex flex-col items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="rounded-lg w-64 h-64 object-cover shadow-lg"
          />
          <h3 className="text-2xl font-bold mt-4">{doctor.name}</h3>
          <p className="text-gray-500">{doctor.specialty}</p>
          <div className="flex items-center mt-2">
            {[...Array(Math.floor(doctor.rating))].map((_, i) => (
              <FaStar key={i} className="text-[#FFD700]" />
            ))}
          </div>
        </div>

        {/* Appointment Form */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Select Date */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Select Date</h4>
            <div className="grid grid-cols-7 gap-2">
              {dates.map((date) => (
                <button
                  key={date}
                  className={`py-2 px-4 rounded-lg ${
                    selectedDate === date
                      ? "bg-[#0EBE7F] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => handleDateSelection(date)}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Select Time */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Select Time</h4>
            <div className="grid grid-cols-4 gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  className={`py-2 px-4 rounded-lg ${
                    selectedTime === time
                      ? "bg-[#0EBE7F] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => handleTimeSelection(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Book Appointment Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0EBE7F",
              "&:hover": { bgcolor: "#0AA56A" },
              textTransform: "none",
              borderRadius: "8px",
            }}
            onClick={handleBookAppointment}
          >
            Confirm Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
