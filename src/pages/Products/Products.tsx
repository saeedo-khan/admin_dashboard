import React, { useState } from "react";
import { Chip, Menu, MenuItem } from "@mui/material";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import Datatable from "../../components/Datatable/Datatable";
import { initProductsRow } from "../../utils/tableRows";
import "./Products.scss";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Products: React.FC = () => {
  const [productRow, setProductRow] = useState(initProductsRow);
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

  return (
    <div className="Products">
      <div className="container-products">
        <div className="header">
          <button className="product-btn">
            <AddIcon />
            <Link to="/newproduct" className="text-link">
              <span>New Product</span>
            </Link>
          </button>
          <div className="wrap-sort">
            <button className="sort-btn" onClick={handleClick}>
              <span>Status</span>
              <span>
                <MoreVertIcon fontSize="small" />
              </span>
            </button>
            <Menu open={open} anchorEl={anchorEl}>
              <MenuItem onClick={handleClose}>Pending</MenuItem>
              <MenuItem onClick={handleClose}>Approved</MenuItem>
              <MenuItem onClick={handleClose}>Failed</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="datatable-products">
          <Datatable rowsPerPage={7} rows={productRow} columns={cols} />
        </div>
      </div>
    </div>
  );
};

export default Products;
