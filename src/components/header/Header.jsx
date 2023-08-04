import React, { useEffect, useState } from "react";
import "./Header.scss";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../redux-store/filter-slice";

const Header = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  const searchQuary = useSelector((state) => state.filter.searchQuary);

  return (
    <div className="header">
      <Link
        className="header_logo"
        to="/"
        onClick={() => {
          document.title = "Amazon | home";
        }}
      >
        amazon<span style={{}}>.in</span>
      </Link>

      <div className="header_search">
        <select
          name="cars"
          className="header_filter"
          onChange={(e) => {
            return dispatch(filterAction.getFilterOption(e.target.value));
          }}
        >
          <option className="header_filter_option" value="filterBy">
            Filter By{" "}
          </option>
          <option className="header_filter_option" value="priceLowToHigh">
            Price Low To High
          </option>
          <option className="header_filter_option" value="priceHighToLow">
            Price High To Low
          </option>
          <option className="header_filter_option" value="highRating">
            High Rating
          </option>
          <option className="header_filter_option" value="lowRating">
            Low Rating
          </option>
        </select>
        <input
          type="text"
          value={searchQuary}
          placeholder="Search Amazon.in"
          onChange={(e) => {
            dispatch(filterAction.getSearchQuery(e.target.value));
          }}
        />
        <button className="search_btn">
          <SearchOutlinedIcon />
        </button>
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} className="header_option">
          <span className="header_optionLineOne">
            Hello, <i>{user && user.displayName}</i>
          </span>
          <span className="header_optionLineTwo" onClick={() => auth.signOut()}>
            {user ? " Sign out" : "Sign in"}
          </span>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&&nbsp;Orders</span>
        </div>
      </div>

      <Link
        to="/cart"
        className="header_optionCart header_option"
        onClick={() => {
          document.title = "Amazon | cart";
        }}
      >
        <span className="header_optionLineTwo">{cart.length}</span>
        <ShoppingCartOutlinedIcon />
      </Link>
    </div>
  );
};

export default Header;
