import React, { useState } from "react";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Datatable.scss";
import { rows } from "../../utils/tableRows";
import { Chip } from "@mui/material";
interface DatatableProps {
  rowsPerPage: number;
}

const Datatable: React.FC<DatatableProps> = ({ rowsPerPage }) => {
  const [data, setData] = useState(rows);

  // remove rows
  function handleDelete(id: number) {
    setData(data.filter((item) => item.id !== id));
  }

  const cols: GridColDef[] = [
    { field: "tracking_no", headerName: "Tracking No", width: 150 },
    {
      field: "product_image",
      headerName: "Product Image",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              src={params.row.product_image}
              alt="avatar"
              className="cellImg"
            />
          </div>
        );
      },
    },
    { field: "product_name", headerName: "Product Name", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
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
    { field: "total_order", headerName: "Total Order", width: 150 },
    { field: "total_amount", headerName: "Total Amount", width: 150 },
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridCellParams) => {
        return (
          <>
            <div className="viewButton">View</div>
            <Chip
              sx={{ cursor: "pointer", color: "whitesmoke" }}
              deleteIcon={<DeleteIcon style={{ color: "whitesmoke" }} />}
              label="Remove"
              onDelete={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="Datatable">
      {/* <p className="title-table">Recent Orders</p> */}
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
        rows={rows}
        columns={cols.concat(actionColumn)}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
