import React from "react";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import NoPage from "./pages/NoPage/NoPage";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Registration/Login";
import SignUp from "./pages/Registration/SignUp";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import UserAddress from "./components/UserAddress/UserAddress";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/userAddress" element={<UserAddress />} />
      <Route path="/productInfo/:id" element={<ProductInfo />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
