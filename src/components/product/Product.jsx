import React, { useContext } from "react";
import "./Product.scss";
import { globalContext } from "../Store/Context";

const Product = ({ props }) => {
  const {state: {cart}, dispatch } = useContext(globalContext);

  return (
    <div className="product">
      <div className="product_info">
        <p> {props.title}</p>
        <span className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </span>
        <div className="product_rating">
          {/* {props.rating.rate}⭐ ({props.rating.count}) */}
        </div>
      </div>
      <div className="product_image">
        <img src={props.image} alt="" />
      </div>
      {cart.includes(props) ? (
        <button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: props,
            });
          }}
          className="product_cart btn"
        >
          Remove From Cart
        </button>
      ) : (
        <button  onClick={() => {
          dispatch({
            type: "ADD_TO_CART",
            payload: props,
          });
        }} className="product_cart btn">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
