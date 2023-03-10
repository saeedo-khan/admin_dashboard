import React from "react";
import Chart from "../../components/chart/Chart";
import "./Home.scss";
import Box from "../../components/Box/Box";

import MiniProduct from "../../components/MiniProduct/MiniProduct";
import { boxesData, topProducts } from "../../utils/productsData";
import LineBarArea from "../../components/LineBarArea/LineBarArea";

const Home: React.FC = () => {
  return (
    <div className="home-content">
      <div className="home-container">
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
        <h2 style={{ color: "whitesmoke" }}>Sales stats</h2>
        <div className="wrapp-mid">
          <div className="main-chart">
            <Chart />
          </div>
          <div className="main-lineBar">
            <LineBarArea />
          </div>
        </div>
        <div className="wrap-bottom">
          <div className="bottom-order">
            {/* <Datatable rowsPerPage={5} /> */}
          </div>
          <div className="bottom-product">
            <div className="procut-wrapper">
              <h3 className="title">Top Product sellers</h3>
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
    </div>
  );
};

export default Home;
