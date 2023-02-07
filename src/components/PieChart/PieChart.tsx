import React from "react";
import {
  PieChart as PieChartR,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { pieChartData } from "../../utils/chartData";
import "./PieChart.scss";
const PieChart: React.FC = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <PieChartR>
          <Pie
            data={pieChartData}
            cx={180}
            cy={200}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChartR>
      </ResponsiveContainer>
      <div className="description">
        <div>
          <span className="box box-1"></span>
          <p>Sale</p>
        </div>
        <div>
          <span className="box box-2"></span>
          <p>Distrbution</p>
        </div>
        <div>
          <span className="box box-3"></span>
          <p>Return</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
