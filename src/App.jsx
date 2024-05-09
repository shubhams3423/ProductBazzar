import React from "react";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import NoPage from "./pages/NoPage/NoPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Registration/Login";
import SignUp from "./pages/Registration/SignUp";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import UserAddress from "./components/UserAddress/UserAddress";
import Dashboard from "./pages/Seller/Dashboard/Dashboard";
import TotalProducts from "./pages/Seller/Dashboard/TotalProducts";
import TotalOrders from "./pages/Seller/Dashboard/TotalOrders";
import TotalUsers from "./pages/Seller/Dashboard/TotalUsers";
import AddProduct from "./pages/Seller/Dashboard/AddProduct";
import UpdateProduct from "./pages/Seller/Dashboard/UpdateProduct";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="totalProducts" />} />
        <Route path="totalProducts" element={<TotalProducts />} />
        <Route path="totalUsers" element={<TotalUsers />} />
        <Route path="totalOrders" element={<TotalOrders />} />
        <Route path="updateProduct" element={<UpdateProduct />} />
      </Route>
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/updateProduct" element={<UpdateProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/userAddress" element={<UserAddress />} />
      <Route path="/productInfo/:id" element={<ProductInfo />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
