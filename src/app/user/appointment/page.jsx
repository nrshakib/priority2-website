"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch doctor data from the public folder
    axios
      .get("/assets/data/doctorList.json")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, []);

  const handleBookNow = (id) => {
    // Navigate to the doctor details page
    router.push(`doctor-details/${id}`);
  };

  return (
    <div className="p-12">
      <p className="text-center my-8 font-bold text-[#333333] text-6xl">
        Book Appointment
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            className="shadow-md"
            sx={{
              width: "320px", // Adjust card width as needed
            }}
          >
            <CardMedia
              component="img"
              className="h-40 w-full"
              sx={{
                height: "200px",
              }}
              image={doctor.image}
              alt={doctor.name}
            />
            <CardContent className="flex flex-col items-center gap-2">
              <p className=" text-[#333333] font-bold text-xl">{doctor.name}</p>
              <p className="text-[#344054] font-semibold">{doctor.specialty}</p>
              <p className="text-[#344054] font-bold text-lg">
                Consultant Fee :
                <span className="text-[#0EBE7F]">
                  {" "}
                  $ {doctor.consultantFee}
                </span>
              </p>
              <Box className="flex items-center">
                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(doctor.rating))}
                </span>
                <span className="text-gray-400 ml-1">
                  {"☆".repeat(5 - Math.floor(doctor.rating))}
                </span>
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0EBE7F",
                  textTransform: "none",
                }}
                onClick={() => handleBookNow(doctor.id)}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
