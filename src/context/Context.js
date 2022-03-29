import React, { createContext, useContext, useReducer } from "react";
import { prodData } from "../Data";
import { cartReducer, productReducer } from "./Reducer";

let Cart = createContext();
function Context({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    products: prodData,
    cart: [],
    wishList: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    sort: "",
    category: "",
    brand: [],
    price: [],
    search: "",
    similar: {},
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
