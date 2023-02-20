import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { initCustomers } from "../../utils/tableRows";
import AddIcon from "@mui/icons-material/Add";
import "./Customers.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, Chip } from "@mui/material";

const Customers: React.FC = () => {
  const [customersRow, setCustomersRow] = useState(initCustomers);
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);

  // menu action
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function sortActiveValues() {
    const activeVal = initCustomers.filter(
      (item) => item.status.name === "Active"
    );
    setCustomersRow(activeVal);
  }
  function sortInactiveValues() {
    const inactiveVal = initCustomers.filter(
      (item) => item.status.name === "Inactive"
    );
    setCustomersRow(inactiveVal);
  }

  function deleteRow() {
    setCustomersRow(
      customersRow.filter((item) => item.id !== selectionModel[0])
    );
    handleClose();
  }

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
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <Chip
            label={params.value.name}
            color={params.value.color}
            size="small"
          />
        );
      },
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridCellParams) => {
        return (
          <>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: "white" }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={deleteRow}>Remove</MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  return (
    <div className="customers">
      <div className="customers-container">
        <div className="header-customers">
          <button
            className="sort-btn active"
            onClick={() => setCustomersRow(initCustomers)}
          >
            <span>All</span>
          </button>
          <button className="sort-btn" onClick={sortInactiveValues}>
            <span>Inactive</span>
          </button>
          <button className="sort-btn" onClick={sortActiveValues}>
            <span>Active</span>
          </button>
          <button className="sort-btn" onClick={deleteRow}>
            <span>Delete</span>
          </button>
          <button className="new-customer">
            <AddIcon />
            <span>New Order</span>
          </button>
        </div>
        <div className="wrap-datatable">
          <DataGrid
            sx={{
              boxShadow: 2,
              bgcolor: "#111315",
              color: "whitesmoke",
              border: 1,
              borderColor: "transparent",
              "& .css-rtrcn9-MuiTablePagination-root": {
                color: "whitesmoke",
              },
            }}
            rows={customersRow}
            columns={cols.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
