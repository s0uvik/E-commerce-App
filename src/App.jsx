import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import Login from "./components/authentication/Login";
import { auth } from "./firebase";
import Signup from "./components/authentication/Signup";
import Payment from "./components/pages/payment/Payment";
import { authAction } from "./redux-store/auth-slice";

const App = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        dispatch(authAction.setUser(user));
      } else {
        // User is signed out
        dispatch(authAction.setUser(null));
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/payment"
          element={cart.length === 0 ? <Home /> : <Payment />}
        />
      </Routes>
    </>
  );
};

export default App;
