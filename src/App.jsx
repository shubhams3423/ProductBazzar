import React from "react";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/Dashboard/Dashboard";
import NoPage from "./pages/NoPage/NoPage";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Registration/Login";
import SignUp from "./pages/Registration/SignUp";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
