import React, { useState } from "react";
import { initOrdersRow } from "../../utils/tableRows";
import "./Orders.scss";
// icons
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { Chip, IconButton, Menu, MenuItem } from "@mui/material";
const Orders: React.FC = () => {
  const [ordersRow, setOrdersRow] = useState(initOrdersRow);
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
              <MenuItem onClick={handleClose}>Remove</MenuItem>
            </Menu>
          </>
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
            rows={ordersRow}
            columns={orderCols.concat(actionColumn)}
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

export default Orders;
