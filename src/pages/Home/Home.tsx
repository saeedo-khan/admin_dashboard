import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import "./Home.scss";
import PieChart from "../../components/PieChart/PieChart";
import Box from "../../components/Box/Box";

import MiniProduct from "../../components/MiniProduct/MiniProduct";
import { boxesData, topProducts } from "../../utils/productsData";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="content">
        <div className="top">
          {boxesData.map((data) => (
            <Box
              stats={data.stats}
              title={data.title}
              Icon={data.boxIcon}
              key={data.title}
            />
          ))}
        </div>
        <div className="main-chart">
          <Chart />
        </div>
        <div className="main-pie">
          <PieChart />
        </div>
        <div className="bottom-order">
          <div>Orders</div>
        </div>
        <div className="bottom-product">
          <div className="procut-wrapper">
            <p>Top Product sellers</p>
            {topProducts.map((item, idx) => (
              <React.Fragment key={item.title}>
                <MiniProduct
                  title={item.title}
                  rating={item.rating}
                  productImg={item.productImg}
                  price={item.productPrice}
                />
                {/* remvoe the seperate line from last product */}
                {idx === topProducts.length - 1 ? null : (
                  <hr className="line" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
