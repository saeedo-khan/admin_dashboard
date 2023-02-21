import React, { useState } from "react";
import { Chip, IconButton, Menu, MenuItem } from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { initProductsRow } from "../../utils/tableRows";
import "./Products.scss";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Fade from "@mui/material/Fade";
const Products: React.FC = () => {
  const [productRow, setProductRow] = useState(initProductsRow);
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);

  // action menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <MenuItem>
                <Link to={`/products/${params.row.id}`}>Edit</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>Remove</MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  return (
    <div className="Products">
      <div className="container-products">
        <div className="header">
          <div className="wrap-product-button">
            <button className="sort-btn active">
              <span>All</span>
            </button>
          </div>
          <div className="wrap-product-button">
            <button className="sort-btn" onClick={handleClick}>
              <span>Category</span>
              <span>
                <MoreVertIcon fontSize="small" />
              </span>
            </button>
            <Menu
              open={open}
              anchorEl={anchorEl}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              TransitionComponent={Fade}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Pending</MenuItem>
              <MenuItem onClick={handleClose}>Approved</MenuItem>
              <MenuItem onClick={handleClose}>Failed</MenuItem>
            </Menu>
          </div>
          <div className="wrap-product-button">
            <button className="sort-btn" onClick={handleClick}>
              <span>Status</span>
              <span>
                <MoreVertIcon fontSize="small" />
              </span>
            </button>
            <Menu
              open={open}
              anchorEl={anchorEl}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              TransitionComponent={Fade}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Pending</MenuItem>
              <MenuItem onClick={handleClose}>Approved</MenuItem>
              <MenuItem onClick={handleClose}>Failed</MenuItem>
            </Menu>
          </div>
          <div className="wrap-product-button">
            <button className="sort-btn" onClick={handleClick}>
              <span>Price</span>
              <span>
                <MoreVertIcon fontSize="small" />
              </span>
            </button>
            <Menu
              open={open}
              anchorEl={anchorEl}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              TransitionComponent={Fade}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Pending</MenuItem>
              <MenuItem onClick={handleClose}>Approved</MenuItem>
              <MenuItem onClick={handleClose}>Failed</MenuItem>
            </Menu>
          </div>
          <div className="button-add-product">
            <button>
              <AddIcon />
              <Link to="/newproduct" className="text-link">
                <span>New Product</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="datatable-products">
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
            rows={productRow}
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

export default Products;
