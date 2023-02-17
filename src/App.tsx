import Home from "./pages/Home/Home";
import "./sassStyles/_global.scss";
import { Routes, Route } from "react-router-dom";
import Calender from "./pages/Calendar/Calender";
import Products from "./pages/Products/Products";
import Orders from "./pages/Orders/Orders";
import Users from "./pages/Users/Users";
import NewProduct from "./pages/NewProduct/NewProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calender />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
    </>
  );
}

export default App;
