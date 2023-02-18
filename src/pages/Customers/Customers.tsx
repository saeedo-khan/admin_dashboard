import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import Datatable from "../../components/Datatable/Datatable";
import { initCustomers } from "../../utils/tableRows";
import AddIcon from "@mui/icons-material/Add";
import "./Customers.scss";
import { useQuery } from "react-query";
const Customers: React.FC = () => {
  const [customersRow, setCustomersRow] = useState(initCustomers);

  const fetchUsersList = async () => {
    const res = await fetch(
      "https://dummyjson.com/users?limit=10&skip=10&select=firstName,lastName,birthDate,phone,image"
    );
    const data = await res.json();
    return data.users;
  };
  const { status, data, error } = useQuery("users", fetchUsersList);

  // id user email status transaction
  const cols: GridColDef[] = [
    {
      field: "customer_name",
      headerName: "Customer Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              src={params.row.customer_image}
              alt="avatar"
              className="cellImg"
              style={{ marginRight: "1rem" }}
            />
            <span>{params.row.customer_name}</span>
          </div>
        );
      },
    },
    { field: "id", headerName: "#ID", width: 150 },
    {
      field: "spent",
      headerName: "Spent",
      width: 150,
      renderCell: (params) => {
        return <span>${params.row.spent}</span>;
      },
    },
    { field: "last_ordered", headerName: "Last Ordered", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
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
          <Datatable rowsPerPage={7} rows={customersRow} columns={cols} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
