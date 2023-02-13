import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

// add dynamic name color variant to status cell 
const objVal = [
  { name: "Pending", color: "primary", variant: "outlined" },
  { name: "Approved", color: "success", variant: "filled" },
  { name: "Failed", color: "error", variant: "filled" },
];

export const initOrdersRow: GridRowsProp = [
  {
    id: 1,
    order_no: 68451,
    date: "05/07/2023",
    customer_name: "Ahmed Mohammed",
    email: "ahmedml@gmail.com",
    price: 55,
    status: objVal[0],
  },
  {
    id: 2,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[1],
  }
];


export const initProductsRow: GridRowsProp = [
  {
    id: 1,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    category: "Men, Watch",
    price: 55,
    stock: 500,
    sold: 65,
    revenew: 14950,
  },
  {
    id: 2,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Blue Grey Backpack",
    category: "Men, Backpack",
    price: 150,
    stock: 380,
    sold: 74,
    revenew: 11100,
  },
  
];
