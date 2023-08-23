import "./Header.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import SearchBox from "./searchBox/SearchBox";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

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
      
      <SearchBox name="searchBarInNav" />

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
    </div>
  );
};

export default Header;
