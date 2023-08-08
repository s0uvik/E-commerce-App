import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order has been placed, Thankyou");

    navigate("/");
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.meassage : "");
  };

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

      <form className="payment-details" onSubmit={handleSubmit}>
        <input className="card" onChange={handleChange} />
        <div></div>
        <button className="btn">Place Order</button>
      </form>
    </div>
  );
}

export default Payment;
