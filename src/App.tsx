import Home from "./pages/Home/Home";
import "./sassStyles/_global.scss";
import { Routes, Route } from "react-router-dom";
import Calender from "./pages/Calendar/Calender";
import Products from "./pages/Products/Products";
import Orders from "./pages/Orders/Orders";
import NewProduct from "./pages/NewProduct/NewProduct";
import { QueryClientProvider, QueryClient } from "react-query";
import Customers from "./pages/Customers/Customers";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
