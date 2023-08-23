import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../../redux-store/filter-slice";
import "./SearchBox.css"

function SearchBox({name}) {
  const dispatch = useDispatch();
  const searchQuary = useSelector((state) => state.filter.searchQuary);

  return (
    <div className={`header_search ${name === "searchBarInNav" ? "searchBarInNav" : "searchBarUnderNav"} `}>
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
  );
}

export default SearchBox;
