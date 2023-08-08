import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Product.css";
import { cartAction } from "../../redux-store/cart-slice";

const Product = ({ props, page }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product_image">
        <img src={props.image} alt="" />
      </div>
      <div className="product_info">
        <p className="product_title"> {props.title}</p>
        <div className="product_price_rating">
          <span className="product_rating">
            <strong>{props.rating.rate}</strong>⭐({props.rating.count})
          </span>
          <span className="product_price">
            <strong>₹{props.price}</strong>
          </span>
        </div>
      </div>

      <div>
        {cart.includes(props) ? (
          <button
            onClick={() => {
              dispatch(cartAction.removeFromCart(props));
            }}
            className="product_cart btn"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(cartAction.addToCart(props));
            }}
            className="product_cart btn"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
