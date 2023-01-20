import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import OrderSummary from "../Pages/Address";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/address" element={<OrderSummary />} />
    </Routes>
  );
};
export default AllRoutes;
