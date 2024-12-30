"use client";

import React, { useState, useEffect } from "react";
import {
  FaCalendarCheck,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";
import DashboardCard from "@/components/Cards/DashboardCard";
import Bar_Chart from "../Charts/Bar_Chart";
import Area_Chart from "../Charts/Area_Chart";
import axios from "axios";
import { AppointmentTable } from "../Table/AppointmentTable";

const Dashboard = () => {
  const overviewData = [
    { title: "Total Appointments", count: 1000, icon: <FaClipboardList /> },
    { title: "Completed Appointments", count: 840, icon: <FaCalendarCheck /> },
    { title: "Upcoming Appointments", count: 200, icon: <FaCalendarAlt /> },
  ];

  const areaChartData = [
    { month: "Jan", value: 100 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 500 },
    { month: "Apr", value: 400 },
    { month: "May", value: 600 },
    { month: "Jun", value: 200 },
    { month: "Jul", value: 300 },
    { month: "Aug", value: 400 },
    { month: "Sep", value: 600 },
    { month: "Oct", value: 500 },
    { month: "Nov", value: 700 },
    { month: "Dec", value: 800 },
  ];

  const barChartData = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 20 },
    { month: "Mar", value: 30 },
    { month: "Apr", value: 40 },
    { month: "May", value: 50 },
    { month: "Jun", value: 25 },
    { month: "Jul", value: 35 },
    { month: "Aug", value: 45 },
    { month: "Sep", value: 55 },
    { month: "Oct", value: 65 },
    { month: "Nov", value: 75 },
    { month: "Dec", value: 85 },
  ];

  const [appointments, setAppointments] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch appointments data
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("/assets/data/appointment.json");
        setAppointments(response.data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      }
    };

    fetchAppointments();
  }, []);
  // Paginate data
  const paginatedAppointments = appointments.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="min-h-screen">
      {/* Overview Cards */}
      <div className="flex gap-8">
        {overviewData.map((data, index) => (
          <DashboardCard
            key={index}
            title={data.title}
            count={data.count}
            icon={data.icon}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="flex flex-wrap justify-between gap-4 mb-8">
        <div className="flex-1 min-w-[300px] bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Appointments Overview</h2>
          <Area_Chart data={areaChartData} type="line" />
        </div>
        <div className="flex-1 min-w-[300px] bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Income</h2>
          <Bar_Chart data={barChartData} type="bar" />
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
        <AppointmentTable
          appointments={paginatedAppointments}
          page={page}
          rowsPerPage={rowsPerPage}
          totalCount={appointments.length}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
