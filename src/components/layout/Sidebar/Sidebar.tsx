import React from "react";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
const Sidebar: React.FC = () => {
  return (
    <div className="Sidebar">
      <div className="content">
        <div className="logo">Logo</div>
        <ul className="list-sidebar">
          <li>
            <span className="side-icon active">
              <Tooltip title="Home">
                <HomeIcon />
              </Tooltip>
            </span>
            <span className="side-text">
              <Link to="/">Dashboard</Link>
            </span>
          </li>
          <li>
            <span className="side-icon">
              <Tooltip title="Orders">
                <DriveFileRenameOutlineIcon />
              </Tooltip>
            </span>
            <span className="side-text">Order</span>
          </li>
          <li>
            <span className="side-icon">
              <Tooltip title="Products">
                <LocalMallIcon />
              </Tooltip>
            </span>
            <span className="side-text">Products</span>
          </li>
          <li>
            <span className="side-icon">
              <Tooltip title="Analyzer">
                <QueryStatsIcon />
              </Tooltip>
            </span>
            <span className="side-text">Analyzer</span>
          </li>
          <li>
            <span className="side-icon">
              <Tooltip title="Analyzer">
                <QueryStatsIcon />
              </Tooltip>
            </span>
            <span className="side-text">
              <Link to="calendar">Calendar</Link>
            </span>
          </li>
        </ul>
        <div className="footer-sidebar">
          <span>
            <Tooltip title="Profile">
              <AccountCircleIcon />
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
