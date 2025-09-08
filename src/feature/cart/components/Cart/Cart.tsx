"use client";
import Typography from "@/shared/components/atoms/Typography";
import React from "react";
import style from "./Cart.module.css";
import Image from "next/image";
import { formatText } from "@/shared/utils/text";
import Button from "@/shared/components/atoms/Button";
import { useCart } from "../../hooks/useCart";

const Cart = () => {
  const { cart, totalCartItems, removeFromCart, totalCart } = useCart();
  return (
    <div className={style.container}>
      <Typography
        content={`CART (${totalCartItems})`}
        size="xl"
        weight="light"
        color="primary"
        as="h1"
      />
      <div className={style["cart-content"]}>
        {cart.map((item) => (
          <div key={item.id} className={style["cart-item"]}>
            <Image
              src={String(item.images ? item.images[0] : "")}
              alt={item.title}
              className={style["item-image"]}
              width={500}
              height={500}
            />

            <div className={style["item-details"]}>
              <Typography
                content={formatText(item.title)}
                size="sm"
                weight="regular"
                color="primary"
                as="h2"
              />
              <Typography
                content={`${formatText(String(item.category))} | ${formatText(
                  String(item.brand)
                )}`}
                size="sm"
                weight="light"
                color="primary"
                as="p"
              />
              <Typography
                content={`${item.price} EUR`}
                size="sm"
                weight="light"
                color="primary"
                as="p"
                className={style["item-price"]}
              />
              <button
                className={style.remove}
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.footer}>
        {totalCartItems > 0 && (
          <div className={style.checkout}>
            <Typography
              content={`TOTAL `}
              size="md"
              weight="regular"
              color="primary"
              as="p"
              className={style["total-label"]}
            />
            <Typography
              content={`${totalCart} EUR`}
              size="md"
              weight="regular"
              color="primary"
              as="p"
              className={style["total-price"]}
            />
          </div>
        )}
        <Button className={style["footer-button"]} type="secondary" link="/">
          CONTINUE SHOPPING
        </Button>

        {totalCartItems > 0 && (
          <Button
            // disabled={!selected.capacity}
            className={style["footer-button"]}
            type="primary"
            onClick={() => alert("Payment successful!")}
          >
            PAY
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
