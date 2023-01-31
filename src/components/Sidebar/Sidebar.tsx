import React from "react";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="Sidebar">
      <div className="logo">Logo</div>
      <ul className="list-sidebar">
        <li>
          <span>Dashboard</span>
        </li>
        <li>
          <span>Order</span>
        </li>
        <li>
          <span>Products</span>
        </li>
        <li>
          <span>Profile</span>
        </li>
        <li>
          <span>Analyzer</span>
        </li>
      </ul>
      <div className="footer-sidebar">
        <p>user: blbla</p>
      </div>
    </div>
  );
};

export default Sidebar;
