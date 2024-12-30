import React from "react";

const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="bg-[#0EBE7F] text-white shadow-md p-4 rounded-lg flex flex-col items-start w-72 h-40">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-4xl">{icon}</p>
      </div>

      <p className="text-5xl font-bold mt-2">{count}</p>
    </div>
  );
};

export default DashboardCard;
