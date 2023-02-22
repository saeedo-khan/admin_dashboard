import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineBarArea: React.FC = () => {
  const data = [
    {
      name: "April",
      uv: 4000,
      orders: 2400,
      amt: 2400,
    },
    {
      name: "May",
      uv: 3000,
      orders: 1398,
      amt: 2210,
    },
    {
      name: "June",
      uv: 2000,
      orders: 9800,
      amt: 2290,
    },
    {
      name: "July",
      uv: 2780,
      orders: 3908,
      amt: 2000,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="orders" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LineBarArea;
