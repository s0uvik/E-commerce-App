import React, { useContext } from "react";
import Product from "../../product/Product";
import "./Payment.scss";
import { useSelector } from "react-redux";

function Payment() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="payment">
      <div className="address">
        <h3>Delivery Address</h3>
        <div>
          {user && user.displayName} <br />
          Sukanta pally, Suroj' Shop, <br />
          Saraitikar, Burdwan, West Bengal - 713104
        </div>
      </div>
      <div className="review-items">
        <h3>Review items and Delivery</h3>
        <div className="order-items">
          {cart.map((item, index) => {
            return <Product props={item} key={index} page="payment" />;
          })}
        </div>
      </div>
      <div className="payment-method">
        <button className="btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Payment;
