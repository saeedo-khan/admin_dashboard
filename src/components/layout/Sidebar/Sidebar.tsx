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
const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  let activeStyle = {
    color: "whitesmoke !important",
  };

  return (
    <div className="Sidebar">
      <div className="content">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 719.999 128.88"
          >
            <path d="M224.507 23.311v20.086h-33.178v83.837h-21.828V43.397h-33.178V23.311h88.184zm-95.17 103.923H107.51V23.311h21.827v103.923zM454.136 16.056c-4.433 0-8.026-3.594-8.026-8.027S449.703 0 454.136 0s8.026 3.595 8.026 8.028-3.594 8.028-8.026 8.028zm35.361 0c-4.433 0-8.026-3.594-8.026-8.027S485.064 0 489.497 0s8.025 3.595 8.025 8.028-3.592 8.028-8.025 8.028zm21.392 7.255v20.086h-55.007v18.339h48.895v20.086h-48.895v25.326h55.007v20.086h-76.834V23.311h76.834zm-135.333-.335c29.238 0 52.94 23.708 52.94 52.952s-23.702 52.952-52.94 52.952c-29.238 0-52.94-23.708-52.94-52.952s23.702-52.952 52.94-52.952zm0 20.686c-17.815 0-32.258 14.446-32.258 32.266 0 17.818 14.443 32.266 32.258 32.266s32.258-14.447 32.258-32.266c-.001-17.82-14.443-32.266-32.258-32.266zM80.373 92.912l17.952 10.296c-9.263 15.383-26.123 25.672-45.384 25.672C23.702 128.88 0 105.172 0 75.928s23.702-52.952 52.94-52.952c19.261 0 36.121 10.289 45.384 25.672L80.432 59.039c-5.678-9.226-15.866-15.377-27.491-15.377-17.816 0-32.258 14.446-32.258 32.266 0 17.818 14.442 32.266 32.258 32.266 11.584-.001 21.743-6.109 27.432-15.282zm444.485-69.601h23.138l44.092 68.992V23.311h21.828v103.923h-26.193l-41.037-64.625v64.625h-21.827V23.311h-.001zM253.32 90.556v36.679h-21.828V23.508h49.549c19.179 0 34.728 15.552 34.728 34.735 0 14.294-8.632 26.57-20.965 31.901l25.31 37.09H295.23l-24.884-36.679H253.32v.001zm0-47.159v29.82h25.539c8.269 0 14.972-6.704 14.972-14.975 0-8.27-6.703-14.975-14.972-14.975l-25.539.13zm419.094 3.275l-40.6 35.15 40.6-58.948 40.601 58.948-40.601-35.15zm0 37.334l-47.584 39.299 47.584-65.062 47.585 65.062-47.585-39.299z" />
          </svg>
        </div>
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
