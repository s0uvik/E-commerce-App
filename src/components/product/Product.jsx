import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Product.css";
import { cartAction } from "../../redux-store/cart-slice";
import { useNavigate } from "react-router-dom";

const Product = ({ props, page }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductNavigate = () => {
    navigate(`product/${props.id}`);
  };

  return (
    <div className="product" onClick={handleProductNavigate}>
      <div className="product_image">
        <img src={props.image} alt="product image" />
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

      
    </div>
  );
};

export default Product;
