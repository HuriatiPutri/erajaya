import { CartContextProvider } from "./CartContext";

export default function ContextProvider({children}){

    return(
        <CartContextProvider>
            {children}
        </CartContextProvider>
    )
}