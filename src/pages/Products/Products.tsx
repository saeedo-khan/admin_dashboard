import React, { useState } from "react";
import { Chip } from "@mui/material";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import Datatable from "../../components/Datatable/Datatable";
import { initProductsRow } from "../../utils/tableRows";
import "./Products.scss";

const Products: React.FC = () => {
  const [productRow, setProductRow] = useState(initProductsRow);
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
        <div className="header"></div>
        <div className="datatable-products">
          <Datatable rowsPerPage={7} rows={productRow} columns={cols} />
        </div>
      </div>
    </div>
  );
};

export default Products;
