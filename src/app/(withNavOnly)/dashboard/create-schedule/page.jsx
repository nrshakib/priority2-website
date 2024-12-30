"use client";

import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { toast } from "sonner";

const ScheduleCreator = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedHours, setSelectedHours] = useState([]);
  const [errors, setErrors] = useState({});

  const hours = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const handleHourClick = (hour) => {
    setSelectedHours((prev) =>
      prev.includes(hour) ? prev.filter((h) => h !== hour) : [...prev, hour]
    );
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!selectedDate) validationErrors.date = "Date is required.";
    if (!timeSlot) validationErrors.timeSlot = "Time slot is required.";
    if (!duration) validationErrors.duration = "Duration is required.";
    if (selectedHours.length === 0)
      validationErrors.selectedHours = "Please select at least one hour.";

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleFormSubmit = () => {
    if (!validateForm()) {
      toast.error("Please fill all required fields.");
      return;
    }

    const formData = {
      date: selectedDate ? selectedDate.format("DD-MM-YYYY") : null,
      timeSlot,
      duration,
      selectedHours,
    };

    console.log("Form Data:", formData);

    toast.success("Schedule Created");

    // You can now send `formData` to an API or process it further
  };

  return (
    <div className="min-h-screen w-2/3">
      <div className="space-y-6">
        {/* Select Date */}
        <div>
          <h4 className="text-md font-medium mb-2">Select Date</h4>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="dd-mm-yyyy"
                  fullWidth
                  error={!!errors.date}
                  helperText={errors.date}
                />
              )}
            />
          </LocalizationProvider>
        </div>

        {/* Time Slot */}
        <div>
          <h4 className="text-md font-medium mb-2">Select Time Slot</h4>
          <FormControl fullWidth size="small" error={!!errors.timeSlot}>
            <InputLabel>Select Time Slot</InputLabel>
            <Select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              label="Select Time Slot"
            >
              <MenuItem value="Morning (09:00 AM - 12:00 PM)">
                Morning (09:00 AM - 12:00 PM)
              </MenuItem>
              <MenuItem value="Afternoon (01:00 PM - 04:00 PM)">
                Afternoon (01:00 PM - 04:00 PM)
              </MenuItem>
              <MenuItem value="Evening (05:00 PM - 09:00 PM)">
                Evening (05:00 PM - 09:00 PM)
              </MenuItem>
            </Select>
            {errors.timeSlot && (
              <p className="text-red-500 text-sm">{errors.timeSlot}</p>
            )}
          </FormControl>
        </div>

        {/* Appointment Duration */}
        <div>
          <h4 className="text-md font-medium mb-2">Appointment Duration</h4>
          <TextField
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g., 30 Mins"
            fullWidth
            error={!!errors.duration}
            helperText={errors.duration}
          />
        </div>

        {/* Select Hours */}
        <div>
          <h4 className="text-md font-medium mb-2">Select Hours</h4>
          <div className="grid grid-cols-4 gap-2">
            {hours.map((hour) => (
              <button
                key={hour}
                onClick={() => handleHourClick(hour)}
                className={`px-4 py-2 rounded-lg ${
                  selectedHours.includes(hour)
                    ? "bg-white text-gray-800 border border-[#47f096]"
                    : "bg-[#D0FBE4] text-green-950"
                }`}
              >
                {hour}
              </button>
            ))}
          </div>
          {errors.selectedHours && (
            <p className="text-red-500 text-sm mt-2">{errors.selectedHours}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #0EBE7F",
          }}
          className="!bg-transparent !text-black border border-[]"
          onClick={handleFormSubmit}
        >
          Create Schedule
        </Button>
      </div>
    </div>
  );
};

export default ScheduleCreator;
