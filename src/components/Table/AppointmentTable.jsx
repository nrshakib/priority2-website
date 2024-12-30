"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";

export const AppointmentTable = ({
  appointments,
  page,
  rowsPerPage,
  totalCount,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{
        borderRadius: 2,
        overflowX: "auto", // Enable horizontal scrolling
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        {" "}
        {/* Set a minimum width */}
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>SL</strong>
            </TableCell>
            <TableCell>
              <strong>Patient Name</strong>
            </TableCell>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
            <TableCell>
              <strong>Appointment Date</strong>
            </TableCell>
            <TableCell>
              <strong>Time</strong>
            </TableCell>
            <TableCell>
              <strong>Status</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell>{page * rowsPerPage + index + 1}</TableCell>
              <TableCell>{appointment.name}</TableCell>
              <TableCell>{appointment.email}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell
                style={{
                  color:
                    appointment.status === "In Progress"
                      ? "green"
                      : appointment.status === "Completed"
                      ? "darkgreen"
                      : appointment.status === "Cancelled"
                      ? "red"
                      : appointment.status === "Running"
                      ? "yellow"
                      : appointment.status === "Upcoming"
                      ? "#333333"
                      : "gray",
                }}
              >
                {appointment.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
