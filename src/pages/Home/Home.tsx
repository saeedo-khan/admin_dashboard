import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import "./Home.scss";
import PieChart from "../../components/PieChart/PieChart";
import Box from "../../components/Box/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WorkIcon from "@mui/icons-material/Work";
const boxesData = [
  { stats: 178, title: "Save Products", boxIcon: FavoriteIcon },
  { stats: 20, title: "Stock Products", boxIcon: InventoryIcon },
  { stats: 190, title: "Sales Products", boxIcon: ShoppingBagIcon },
  { stats: 12, title: "Job Application", boxIcon: WorkIcon },
];

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="content">
        <div className="top">
          {boxesData.map((data) => (
            <Box stats={data.stats} title={data.title} Icon={data.boxIcon} />
          ))}
        </div>
        <div className="main-chart">
          <Chart />
        </div>
        <div className="main-pie">
          <PieChart />
        </div>
        <div className="bottom">
          <div>Orders</div>
          <div>Top selling</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
