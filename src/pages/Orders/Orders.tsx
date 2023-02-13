import React, { useState } from "react";
import Datatable from "../../components/Datatable/Datatable";
import { initOrdersRow } from "../../utils/tableRows";
import "./Orders.scss";
// icons
import AddIcon from "@mui/icons-material/Add";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
const Orders: React.FC = () => {
  const [ordersRow, setOrdersRow] = useState(initOrdersRow);

  const orderCols: GridColDef[] = [
    {
      field: "order_no",
      headerName: "Order No.",
      width: 150,
      renderCell: (params) => {
        return <p>#{params.row.order_no}</p>;
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      renderCell: (params) => {
        return <p>{params.row.date}</p>;
      },
    },
    { field: "customer_name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      renderCell: (params) => {
        return <span>${params.row.price}</span>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params: GridCellParams) => {
        return (
          <Chip
            label={params.value.name}
            color={params.value.color}
            variant={params.value.variant}
            size="small"
          />
        );
      },
    },
  ];

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
          <Datatable rowsPerPage={10} rows={ordersRow} columns={orderCols} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
