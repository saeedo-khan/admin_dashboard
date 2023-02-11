import React, { useState } from "react";
import Datatable from "../../components/Datatable/Datatable";
import { rows } from "../../utils/tableRows";
import "./Orders.scss";
// icons
import AddIcon from "@mui/icons-material/Add";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Orders: React.FC = () => {
  return (
    <div className="Orders">
      <div className="container-datatable">
        <div className="header">
          <button className="order-btn">
            <AddIcon />
            <span>New campaign</span>
          </button>
          <button className="order-btn">
            <CreateOutlinedIcon />
            <span>Edit</span>
          </button>
          <button className="order-btn">
            <ContentCopyOutlinedIcon />
            <span>Duplicate</span>
          </button>
          <button className="order-btn">
            <DeleteOutlinedIcon />
            <span>Remove</span>
          </button>
        </div>
        <div className="datatable-wrapp">
          <Datatable rowsPerPage={6} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
