import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import Datatable from "../../components/Datatable/Datatable";
import { initProductsRow } from "../../utils/tableRows";
import AddIcon from "@mui/icons-material/Add";
import "./Users.scss";
const Users: React.FC = () => {
  const [usersRow, setUsersRow] = useState(initProductsRow);
  // id user email status transaction
  const cols: GridColDef[] = [
    {
      field: "product_name",
      headerName: "Product Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              src={params.row.product_image}
              alt="avatar"
              className="cellImg"
              style={{ marginRight: "1rem" }}
            />
            <span>{params.row.product_name}</span>
          </div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      renderCell: (params) => {
        return <span>${params.row.price}</span>;
      },
    },
    { field: "stock", headerName: "Stock", width: 150 },
    { field: "sold", headerName: "Sold", width: 150 },
    { field: "revenew", headerName: "Revenew", width: 150 },
  ];

  return (
    <div className="users">
      <div className="users-container">
        <div className="header-users">
          <button className="add-user-btn">
            <AddIcon />
            <span>New user</span>
          </button>
        </div>
        <div className="wrap-datatable">
          <Datatable rowsPerPage={7} rows={usersRow} columns={cols} />
        </div>
      </div>
    </div>
  );
};

export default Users;
