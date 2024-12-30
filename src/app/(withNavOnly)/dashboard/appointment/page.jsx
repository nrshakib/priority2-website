"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AppointmentTable } from "@/components/Table/AppointmentTable";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Fetch appointment data
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("/assets/data/appointment.json");
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  // Filter and sort appointments
  const filteredAppointments = appointments
    .filter((appointment) =>
      appointment.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "date") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  // Paginate data
  const paginatedAppointments = filteredAppointments.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Handle pagination
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="min-h-screen">
      {/* Search and Sort Section */}
      <div className="flex justify-between items-center mb-4">
        <TextField
          label="Search Patients"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <FormControl size="small" className="w-1/5">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            label="Sort By"
          >
            <MenuItem value="name">Patient Name</MenuItem>
            <MenuItem value="date">Appointment Date</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Appointment Table */}
      <AppointmentTable
        appointments={paginatedAppointments}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={filteredAppointments.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Dashboard;
