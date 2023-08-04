import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Product.scss";
import { cartAction } from "../../redux-store/cart-slice";

const Product = ({ props, page }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product_info">
        <p> {props.title}</p>
        <span className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </span>
        <div className="product_rating">
          {props.rating.rate}⭐ ({props.rating.count})
        </div>
      </div>
      <div className="product_image">
        <img src={props.image} alt="" />
      </div>
      {page !== "payment" && ( // In payment page we don't want remove from cart button
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
      )}
    </div>
  );
};

export default Product;
