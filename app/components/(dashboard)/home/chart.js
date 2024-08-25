"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Line,
  LineChart,
  Area,
  AreaChart,
  Tooltip,
} from "recharts";
const data = [
  { month: "Jan", weight: 20 },
  { month: "Feb", weight: 30 },
  { month: "Mar", weight: 21 },
  { month: "Apr", weight: 23 },
  { month: "May", weight: 25 },
  { month: "Jun", weight: 24 },
  { month: "Jul", weight: 50 },
  { month: "Aug", weight: 27 },
  { month: "Sep", weight: 40 },
  { month: "Oct", weight: 28 },
  { month: "Nov", weight: 29 },
  { month: "Dec", weight: 30 },
];

const maxUv = Math.max(...data.map((item) => item.weight));
const RevenueChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width="100%"
          height={300}
          data={data}
          margin={{
            left: -20,
          }}          
        >
          <CartesianGrid fill="#f9fafc" stroke="#f0f3fa" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            stroke="#999999"
          />
          <YAxis
            dataKey="weight"
          
            axisLine={false}
            tickLine={false}
            stroke="#999999"
          />
        <Area  dataKey="weight" stroke="#3db055" fill="#d7e6fd" fontSize={18} fontWeight={700}/>
        <Tooltip />

          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
