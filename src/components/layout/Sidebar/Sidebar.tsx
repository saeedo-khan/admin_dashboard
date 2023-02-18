import React, { useState } from "react";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  let activeStyle = {
    color: "whitesmoke !important",
  };

  return (
    <div className="Sidebar">
      <div className="content">
        <div className="logo">Logo</div>
        <ul className="list-sidebar">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              <div className="wrap-text-icon">
                <span className="side-icon active">
                  <Tooltip title="Home">
                    <HomeIcon />
                  </Tooltip>
                </span>
                <span className="side-text">Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="orders"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              <div className="wrap-text-icon">
                <span className="side-icon">
                  <Tooltip title="Orders">
                    <DriveFileRenameOutlineIcon />
                  </Tooltip>
                </span>
                <span className="side-text">Orders</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              <div className="wrap-text-icon">
                <span className="side-icon">
                  <Tooltip title="Products">
                    <LocalMallIcon />
                  </Tooltip>
                </span>
                <span className="side-text">Products</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              <div className="wrap-text-icon">
                <span className="side-icon">
                  <Tooltip title="Analyzer">
                    <QueryStatsIcon />
                  </Tooltip>
                </span>
                <span className="side-text">Customers</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="calendar"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              <div className="wrap-text-icon">
                <span className="side-icon">
                  <Tooltip title="Analyzer">
                    <QueryStatsIcon />
                  </Tooltip>
                </span>
                <span className="side-text">Calendar</span>
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="footer-sidebar">
          {/* <span>
          <Tooltip title="Profile">
            <AccountCircleIcon />
          </Tooltip>
        </span> */}
          <div className="logout-sidebar">
            <Tooltip title="Logout">
              <LogoutIcon />
            </Tooltip>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
