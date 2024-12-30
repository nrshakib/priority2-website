import { Button, Divider } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Standard",
      price: "$29.99",
      duration: "7 Days",
      features: [
        "7 persons per day",
        "7 Days",
        "Appointment reminders",
        "Email and community support",
        "Advanced analytics",
      ],
    },
    {
      name: "Basic",
      price: "$49.99",
      duration: "15 Days",
      features: [
        "15 persons per day",
        "15 Days",
        "Appointment reminders",
        "Email and community support",
        "Advanced analytics",
      ],
    },
    {
      name: "Premium",
      price: "$79.99",
      duration: "30 Days",
      features: [
        "30 persons per day",
        "30 Days",
        "Appointment reminders",
        "Email and community support",
        "Advanced analytics",
      ],
    },
  ];

  return (
    <div className="bg-[#ECFDF5] py-12 px-4 sm:px-6 md:px-16 xl:px-24 2xl:px-32">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-4 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#32526B]">
          Pricing
        </h2>
        <p className="text-[#32526B] w-full sm:w-3/4 md:w-1/2 xl:w-1/3">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
      </div>

      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center items-stretch gap-6 mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#D0FBE4] rounded-lg shadow-md px-6 py-14 border border-gray-200 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[452px] h-auto"
          >
            {/* Plan Name */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#344054] text-center">
              {plan.name}
            </h3>
            <Divider
              sx={{
                marginY: "20px",
              }}
            />
            {/* Plan Price */}
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#344054] text-center">
              {plan.price}
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#344054]">
                /{plan.duration}
              </span>
            </p>
            {/* Plan Features */}
            <ul className="my-10 flex flex-col gap-5 items-start mx-auto">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#0EBE7F] text-xl sm:text-2xl md:text-3xl">
                    <FaCheckCircle />
                  </span>
                  <span className="text-[#344054] text-sm sm:text-base md:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            {/* Choose Plan Button */}
            <Button
              variant="outlined"
              sx={{
                border: "2px solid #0EBE7F",
                borderRadius: "12px",
                textTransform: "none",
                color: "#fff",
                bgcolor: "#0EBE7F",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: "500",
                padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
                ":hover": {
                  backgroundColor: "#0EBE7F",
                  color: "#FFFFFF",
                  border: "2px solid #0EBE7F",
                },
              }}
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
