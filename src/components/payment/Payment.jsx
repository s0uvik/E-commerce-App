import React, { useContext } from "react";
import { globalContext } from "../Store/Context";
import Product from "../product/Product";
import "./Payment.scss";

function Payment() {
  const {
    state: { cart },
    authState: { user },
  } = useContext(globalContext);
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
            return <Product props={item} key={index} />;
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
