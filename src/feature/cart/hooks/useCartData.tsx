"use client";
import { useState, useEffect, useCallback } from "react";
import { CartProduct } from "../types/cartProduct.interface";
import { CART_KEY } from "@/shared/constants/cart";

export const useCartData = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch {
        localStorage.removeItem(CART_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } else {
      localStorage.removeItem(CART_KEY);
    }
  }, [cart]);

  const addToCart = useCallback((item: CartProduct) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalCart = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalCart,
    totalCartItems,
  };
};
