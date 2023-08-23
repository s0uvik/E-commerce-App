import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

 
  return (
    <div>
      <div className="delivery-address">
        <h2>Delivery Address</h2>
        <div className="address-details">
          <span>{user && user.displayName}</span>
          <span>
            Sukanta pally, Suroj' Shop, <br />
            Saraitikar, Burdwan, <br />
            West Bengal - 713104
          </span>
        </div>
      </div>
      <Cart page="payment" />


        

    </div>
  );
}

export default Payment;
