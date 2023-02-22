import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.scss";
const chartData = [
  {
    name: "January",
    sales: 4000,
  },
  {
    name: "February",
    sales: 3000,
  },
  {
    name: "March",
    sales: 2000,
  },
  {
    name: "April",
    sales: 2780,
  },
  {
    name: "May",
    sales: 1890,
  },
];

const Chart: React.FC = () => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <AreaChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
