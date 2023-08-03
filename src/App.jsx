import React, { useContext, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/Login";
import { globalContext } from "./components/Store/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Signup from "./components/authentication/Signup";
import Payment from "./components/payment/Payment";

const App = () => {
  const { authDispatch } = useContext(globalContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        authDispatch({
          type: "SET_USER",
          payload: user,
        });
      } else {
        // User is signed out
        authDispatch({
          type: "SET_USER",
          payload: null,
        });
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
        <Route path="/signup" element={<Signup/>}/>   
        <Route path="/payment" element={<Payment/>}/>   
      </Routes>
    </>
  );
};

export default App;
