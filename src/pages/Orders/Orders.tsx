import React, { useState } from "react";
import Datatable from "../../components/Datatable/Datatable";
import { initOrdersRow } from "../../utils/tableRows";
import "./Orders.scss";
// icons
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Chip, Menu, MenuItem } from "@mui/material";
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
        <div className="header-orders">
          <button className="sort-btn active">
            <span>All</span>
          </button>
          <button className="sort-btn">
            <span>Pending</span>
          </button>
          <button className="sort-btn">
            <span>Approved</span>
          </button>
          <button className="sort-btn">
            <span>Failed</span>
          </button>
          <button className="create-order">
            <AddIcon />
            <span>New Order</span>
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
