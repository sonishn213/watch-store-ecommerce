import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import SingleProduct from "../../pages/SingleProduct";
import Checkout from "../../pages/Checkout";
import Thankyou from "../../pages/Thankyou";
import Orders from "../../pages/Orders";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/view/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/successpayment" element={<Thankyou />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default Routers;
