import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartProduct from "../../product/CartProduct";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";

const Cart = ({ page, cardElement }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <div className="cart-items">
          {cart.map((item, index) => {
            return <CartProduct props={item} key={index} page={page} />;
          })}
        </div>
      ) : (
        <h1 className="cart-items">Your cart in empty</h1>
      )}

      <div className="price-details">
        <h2 style={{ padding: "10px" }}>Price Details</h2>
        <hr />
        <div className="price-details-item">
          <p>Price ({cart.length} items)</p>
          <p> ₹{total.toFixed()}</p>
        </div>
        <div className="price-details-item">
          <p>Coupons for you:</p> <p>-50</p>
        </div>
        <div className="price-details-item">
          <p>Delivery Charges</p> <p>50</p>
        </div>
        <h3 className="total price-details-item">
          <p>Total amount</p> <p>₹{total.toFixed(2)}</p>
        </h3>
        <div className="button">
          {page !== "payment" && (
            <button
              className="btn"
              style={{ width: "200px" }}
              onClick={() => {
                navigate(cart.length !== 0 ? "/payment" : "/");
                {
                  cart.length === 0 && alert("Your cart in empty");
                }
              }}
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
