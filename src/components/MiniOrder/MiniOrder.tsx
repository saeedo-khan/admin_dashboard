import React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowsProp,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from "@mui/x-data-grid";
import img1 from "../../assets/usama-akram-s-gYAbQToXk-unsplash.jpg";

interface MiniOrderProps {}

const MyCustomNoRowsOverlay = () => <img src={img1} alt="no-item" />;

const MiniOrder: React.FC<MiniOrderProps> = ({}) => {
  const [checkboxSelection, setCheckboxSelection] = React.useState(false);
  const rows: GridRowsProp = [
    {
      id: 1,
      tracking_no: 68451,
      product_image: (params: GridCellParams) => <img src={params.value} />,
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
    {
      id: 2,
      tracking_no: 68451,
      product_image: img1,
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
    {
      id: 3,
      tracking_no: 68451,
      product_image: img1,
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
    {
      id: 4,
      tracking_no: 68451,
      product_image: img1,
      product_name: "Nike shoes",
      price: 37,
      total_order: 320,
      total_amount: 32.0,
    },
  ];

  const cols: GridColDef[] = [
    { field: "tracking_no", headerName: "Tracking No", width: 150 },
    { field: "product_image", headerName: "Product Image", width: 150 },
    { field: "product_name", headerName: "Product Name", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "total_order", headerName: "Total Order", width: 150 },
    { field: "total_amount", headerName: "Total Amount", width: 150 },
  ];

  const columns = React.useMemo(
    () => [
      {
        ...GRID_CHECKBOX_SELECTION_COL_DEF,
        width: 150,
      },
      ...cols,
    ],
    [cols]
  );

  return (
    <div className="MiniOrder" style={{ height: "300px", width: "100%" }}>
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        components={{
          NoRowsOverlay: MyCustomNoRowsOverlay,
        }}
      />
    </div>
  );
};

export default MiniOrder;
