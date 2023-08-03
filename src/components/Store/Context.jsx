import React, { createContext, useEffect, useReducer, useState } from "react";
import { authReducer, cartReducer, filterReducer } from "./reducer";

export const globalContext = createContext();

const Context = ({ children }) => {
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const authInitialState = {
    user: null,
  };
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  // filter context
  const filterInitialState = {
    filterProducts: []
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  return (
    <globalContext.Provider
      value={{
        state,
        dispatch,
        authState,
        authDispatch,
        filterState,
        filterDispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default Context;
