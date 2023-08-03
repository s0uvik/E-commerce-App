import React, { useContext, useState } from "react";
import "./Header.scss";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";
import { globalContext } from "../Store/Context";
import { auth } from "../../firebase";

const Header = () => {
  const [searchValue, setSearchvalue] = useState("");

  const {
    state: { cart },
    authState: { user },
    filterState: { filterProducts },
    filterDispatch,
  } = useContext(globalContext);
console.log(filterProducts)
  const handleChange = (e) => {
    setSearchvalue(e.target.value);
    filterDispatch({
      type: "SEARCH_QUERY",
      payload: searchValue,
    });
  };
  return (
    <div className="header">
      <Link className="header_logo" to="/">
        amazon<span style={{}}>.in</span>
      </Link>

      <div className="header_search">
        <input type="text" value={searchValue} onChange={handleChange} />
        <button
          onClick={() => {
            filterDispatch({
              type: "SEARCH_QUERY",
              payload: searchValue,
            });
          }}
          className="search_btn"
        >
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

      <Link to="/cart" className="header_optionCart header_option">
        <span className="header_optionLineTwo">{cart.length}</span>
        <ShoppingCartOutlinedIcon />
      </Link>
    </div>
  );
};

export default Header;
