import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types";

type CartType = {
  items: CartItem[],
  addItem: (product: Product, size: CartItem['size']) => void
}

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => { }
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product, size: CartItem['size']) => {
    //if already in cart, increment quantity

    const newCartItem: CartItem = {
      product,
      size,
      quantity: 1,
      product_id: product.id,
      id: '1' //generate
    }

    setItems([newCartItem, ...items])
  }
  //TODO: update quantity

  return (
    <CartContext.Provider
      value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export const useCart = () => useContext(CartContext)