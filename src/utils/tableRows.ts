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
  },
  {
    id: 3,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[2],
  },
  {
    id: 4,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[0],
  },
  {
    id: 5,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[1],
  },
  {
    id: 6,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[1],
  },
  {
    id: 7,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[1],
  },
  {
    id: 8,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[0],
  },
  {
    id: 9,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[2],
  },
  {
    id: 10,
    order_no: 84964,
    date: "03/01/2023",
    customer_name: "Salem Ibrahim",
    email: "ib.salem@gmail.com",
    price: 32,
    status: objVal[0],
  },
  {
    id: 11,
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
    price: '55',
    stock: '500',
    sold: '65',
    revenew: '14950',
  },
  {
    id: 2,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Blue Grey Backpack",
    category: "Men, Backpack",
    price: '150',
    stock: '380',
    sold: '74',
    revenew: '11100',
  },
  
];


export const initCustomers: GridRowsProp = [
  {
    id: 1,
    customer_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    customer_name: "Jane Cooper",
    spent: "3.675",
    last_ordered: "25/2/2023",
    email: 'jibonze@gmail.com',
    phone: '01642 39541',
    status: 'Active',
  },
  {
    id: 2,
    customer_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    customer_name: "Dianne Russel",
    spent: "6.745",
    last_ordered: "1/2/2023",
    email: 'nimka2@gmail.com',
    phone: '04851 39541',
    status: 'Inactive',
  },
  
];
