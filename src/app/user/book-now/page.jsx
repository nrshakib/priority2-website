"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

export default function FindADoctor() {
  const [searchQuery, setSearchQuery] = useState("");

  // Example location data
  const locations = [
    {
      name: "RPT Labs",
      address: "10 Park Ave - Arlington, United States, 02420",
      county: "United States",
      phone: "781-316-0189",
    },
    {
      name: "Guest Diagnostics Plymouth",
      address: "57 Long Pond Rd - Plymouth, MA, 02360-2670",
      county: "Plymouth",
      phone: "508-747-1570",
    },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="flex flex-col items-start lg:items-center justify-between p-6">
      <div className="flex flex-col text-center gap-4">
        <p className="text-[#333333] font-bold text-6xl">Find a Doctor</p>
        <p className="text-[#333333] font-semibold text-4xl">
          As we're coming together, select your region.
        </p>
        <p className="text-gray-600">
          The right location is the first step. Choosing an expert care provider
          comes next.
        </p>
      </div>

      <div className="flex items-center justify-center w-full p-4">
        {/* Left Section */}
        <div className="flex flex-col gap-3">
          {/* Search Input */}
          <TextField
            label="Search by Zip or City and State"
            variant="outlined"
            className="w-64 mb-4 bg-[#D0FBE4]"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          {/* Location Cards */}
          <div className="space-y-4 bg-[#ECFDF5] p-10">
            {locations.map((location, index) => (
              <Card
                key={index}
                sx={{
                  bgcolor: "#D0FBE4",
                }}
              >
                <CardContent className="flex flex-col gap-2">
                  <div className="flex gap-10">
                    <div>
                      <p className="font-semibold text-[#4E4E4E]">
                        {location.name}
                      </p>
                      <p className="text-gray-600 mt-2">{location.address}</p>
                    </div>
                    <div className="mt-7">
                      <p className="">County: {location.county}</p>
                      <p className="">Phone: {location.phone}</p>
                    </div>
                  </div>
                  <Link href="/user/appointment">
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#0EBE7F",
                        width: "200px",
                        textTransform: "none",
                      }}
                    >
                      Select this location
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Map Section */}
        <div className="lg:w-1/3 w-full p-4 h-[520px]">
          <MapContainer
            center={[46.5, -1.8]}
            zoom={6}
            className="h-full rounded-lg border border-gray-300"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={[46.5 + index * 0.1, -1.8 + index * 0.1]}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
