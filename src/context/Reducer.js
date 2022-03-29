export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_THE_PRODUCT":
      return { ...state, search: action.payload };
    case "SORT_THE_PRODUCT":
      return { ...state, sort: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, category: action.payload };
    case "FILTER_BY_BRAND":
      return {
        ...state,
        brand: action.payload.checked
          ? [
              ...state.brand,
              {
                brandName: action.payload.brandName,
                checked: action.payload.checked,
              },
            ]
          : state.brand.filter((b) => b.brandName !== action.payload.brandName),
      };
    case "FILTER_BY_PRICE":
      return {
        ...state,
        price: action.payload.checked
          ? [
              ...state.price,
              {
                low: action.payload.low,
                high: action.payload.high,
                checked: action.payload.checked,
              },
            ]
          : state.price.filter((p) => p.low !== action.payload.low),
      };
    case "FIND_SIMILAR":
      return {
        ...state,
        similar: action.payload,
      };
    case "REMOVE_SIMILAR":
      return {
        ...state,
        similar: action.payload,
      };
    default:
      return state;
  }
};
