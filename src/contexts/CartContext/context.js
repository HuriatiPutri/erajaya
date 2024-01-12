import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}){
    const [value,setValue] = useState([]);

  const initialValue = {
    cart:value,
    setCart:setValue,
  };
    return <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>;

}