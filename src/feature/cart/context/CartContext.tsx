import { createContext } from "react";
import { CartProduct } from "../types/cartProduct.interface";

interface CartContextType {
  cart: CartProduct[];
  addToCart: (item: CartProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalCart: number;
  totalCartItems: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
