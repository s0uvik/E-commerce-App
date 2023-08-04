import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchQuary: "",
    filterOption: "filterBy",
  },
  reducers: {
    getSearchQuery(state, action) {
      state.searchQuary = action.payload.trim();
    },
    getFilterOption(state, action) {
      state.filterOption = action.payload;
    },
  },
});

export default filterSlice;
export const filterAction = filterSlice.actions;
