import Home from "./pages/Home/Home";
import "./sassStyles/_global.scss";
import { Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar/Calender";
import Products from "./pages/Products/Products";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
