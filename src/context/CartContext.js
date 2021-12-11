import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, listItems: [...state.listItems, action.payload] };
    case "INCREASE_QTY":
      return { ...state, listItems: action.payload };
    case "DECREASE_QTY":
      return { ...state, listItems: action.payload };
      case "DELETE_ITEM":
        return {...state, listItems: action.payload}
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
    const newItem = { id: id, title: title, price: price, qty: 1 };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const increaseQty = (id) => {
    const updatedListItems = [...state.listItems];
    updatedListItems.map((item) => {
      if (item.id === id) {
        item.qty = item.qty + 1;
      }
    });
    dispatch({ type: "INCREASE_QTY", payload: updatedListItems });
  };
  const decreaseQty = (id) => {
    const updatedListItems = [...state.listItems];
    updatedListItems.map((item) => {
      if (item.id === id) {
        item.qty = item.qty - 1;
      }
    });
    dispatch({ type: "DECREASE_QTY", payload: updatedListItems });
  };

  //If qty its 0, deletes the item
  useEffect(() => {
    console.log("testing qty to 0");
    const itemToDelete = state.listItems.find((item) => item.qty === 0);
    if (itemToDelete) {
      const updatedListItems = state.listItems.filter((item) => itemToDelete !== item);
      dispatch({ type: "DELETE_ITEM", payload: updatedListItems });
      console.log('DELETING ITEM')
    }


  }, [state.listItems]);

  console.log(state.listItems);
  // useEffect for Total, every time that listItems changes, total will be updated with a dispatch

  return (
    <CartContext.Provider
      value={{ ...state, addItem, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}
