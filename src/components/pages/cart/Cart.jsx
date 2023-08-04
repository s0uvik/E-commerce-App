import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Product from "../../product/Product";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
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
    <>
      <div className="cart">
        <div className="cart_header">
          <h3>Welcome {user && user.displayName}</h3>
          <h3>Total Amount: {total.toFixed(2)} </h3>
          {Boolean(total) && (
            <button
              className="btn"
              onClick={() => navigate(cart.length !== 0 ? "/payment" : "/")}
            >
              Order Now
            </button>
          )}
        </div>
        {cart.length !== 0 ? (
          <div className="cart_left">
            {cart.map((item, index) => {
              return <Product props={item} key={index} />;
            })}
          </div>
        ) : (
          <h1>Your cart in empty</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
