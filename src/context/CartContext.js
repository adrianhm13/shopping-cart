import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, listItems: [...state.listItems, action.payload] };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    total: 0,
    listItems: [],
  });

  const addItem = ({ title, price }, id) => {
    if (!state.listItems.some((item) => item.id === id)) {
      const newItem = { id: id, title: title, price: price, qty: 1 };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    }
  };

  return (
    <CartContext.Provider value={{ ...state, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
