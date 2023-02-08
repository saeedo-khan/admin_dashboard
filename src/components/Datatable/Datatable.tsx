import React from "react";
import {
  DataGrid,
  GridCellParams,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
import img1 from "../../assets/usama-akram-kP6knT7tjn4-unsplash.jpg";
import "./Datatable.scss";
interface DatatableProps {}

const Datatable: React.FC<DatatableProps> = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      tracking_no: 68451,
      product_image:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
    {
      id: 2,
      tracking_no: 68451,
      product_image:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
    {
      id: 3,
      tracking_no: 68451,
      product_image:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
    {
      id: 4,
      tracking_no: 68451,
      product_image:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
  ];
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
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="Datatable">
      <p>Recent Orders</p>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={cols.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
