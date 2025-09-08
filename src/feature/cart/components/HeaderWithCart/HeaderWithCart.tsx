"use client";
import React from "react";
import Header from "@/shared/components/molecules/Header";
import { useCart } from "../../hooks/useCart";
import { usePathname } from "next/navigation";
import { CART_PATH } from "@/shared/constants/cart";

const HeaderWithCart = () => {
  const { totalCartItems } = useCart();
  const pathname = usePathname();

  const isCartPage = pathname === CART_PATH;

  return <Header cart={!isCartPage} count={totalCartItems} />;
};

export default HeaderWithCart;
