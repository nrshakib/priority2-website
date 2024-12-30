"use client";
import React from "react";
import { Box } from "@mui/material";
import DashboardSidebar from "@/components/shared/DashboardSidebar";
import Navbar from "@/components/shared/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#FFFAF5]">
      <Navbar />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <DashboardSidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#fff",
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
