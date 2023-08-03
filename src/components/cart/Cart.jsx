import React, { useContext, useEffect, useState } from "react";
import "./Cart.scss";
import { globalContext } from "../Store/Context";
import Product from "../product/Product";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate()

  const {
    state: { cart },
    authState: { user },
  } = useContext(globalContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="cart">
      <div className="cart_header">
        <h3>Welcome {user && user.displayName}</h3>
        <h3>Total Amount: {total.toFixed(2)} </h3>
        {Boolean(total) && <button className="btn" onClick={() => navigate("/payment")}>Order Now</button>}
      </div>

      <div className="cart_left">
        {cart.map((item, index) => {
          return <Product props={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
