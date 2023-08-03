export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { filterProducts: action.payload };
    case "SEARCH_QUERY":
      return {
        filterProducts: state.filterProducts.filter((item) => {
          return item.title.toLowerCase().includes(action.payload.trim().toLowerCase());
        }),
      };

    default:
      state;
  }
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { user: action.payload };

    default:
      return state;
  }
};
