import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [listItems, setListItems] = useState([
    { title: "Tata deciratuve", price: 500},
    { title: "Decorative", price: 500},
  ]);

  const addItem = ({id, title, price}) => {
    setListItems([...listItems, { id: id, title: title, price: price }]);
  };


  return (
    <CartContext.Provider value={{listItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
