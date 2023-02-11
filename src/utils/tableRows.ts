import { GridRowsProp } from "@mui/x-data-grid";

// add dynamic name color variant to status cell 
const objVal = [
  { name: "Pending", color: "primary", variant: "outlined"},
  { name: "Approved", color: "success", variant: "filled"},
  { name: "Failed", color: "error", variant: "filled"},
];

export const rows: GridRowsProp = [
  {
    id: 1,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 37",
    status: objVal[0],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 2,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 45",
    status: objVal[1],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 3,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 45",
    status: objVal[2],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 4,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 37",
    status: objVal[0],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 5,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 45",
    status: objVal[1],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 6,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 45",
    status: objVal[0],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 7,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 45",
    status: objVal[0],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 8,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 21",
    status: objVal[0],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 9,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 99",
    status: objVal[0],
    total_order: 320,
    total_amount: 32.0,
  },
  {
    id: 10,
    tracking_no: 68451,
    product_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    product_name: "Nike shoes",
    price: "$ 45",
    status: objVal[0],
    total_order: 320,
    total_amount: 32.0,
  },
];

