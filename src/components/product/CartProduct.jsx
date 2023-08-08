import React from "react";
import "./CartProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux-store/cart-slice";

function CartProduct({ props, page }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-product">
      <img className="cart-item-image" src={props.image} alt="" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{props.title}</h3>
        <span className="cart-item-rating">
          <StarIcon />
          {props.rating.rate}({props.rating.count})
        </span>
        <span className="cart-item-price">₹{props.price}</span>
        {page !== "payment" && (
          <button
            onClick={() => {
              dispatch(cartAction.removeFromCart(props));
            }}
            className="btn"
          >
            Remove{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
