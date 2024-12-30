import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from "recharts";

const Area_Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="100%" stopColor="#0EBE7F" stopOpacity={1} />
            <stop offset="0%" stopColor="#ECFDF5" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#0EBE7F"
          fill="url(#colorValue)"
          strokeWidth={0}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Area_Chart;
