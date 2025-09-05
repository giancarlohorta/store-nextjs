"use client";
import Typography from "@/shared/components/atoms/Typography";
import React from "react";
import style from "./Cart.module.css";
import Image from "next/image";
import { formatText } from "@/shared/utils/text";
import Button from "@/shared/components/atoms/Button";

const Cart = () => {
  const totalCartItems = 3; // Example value
  const totalCart = 1500; // Example value
  const removeFromCart = (id: number, capacity: string, color: string) => {
    console.log(
      `Remove item with id: ${id}, capacity: ${capacity}, color: ${color}`
    );
  };
  const cart = [
    {
      id: 1,
      name: "iPhone 13 Pro Max",
      capacity: "256GB",
      color: "Silver",
      price: 1200,
      imageUrl:
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21 Ultra",
      capacity: "128GB",
      color: "Black",
      price: 800,
      imageUrl:
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    },
    {
      id: 3,
      name: "Google Pixel 6 Pro",
      capacity: "256GB",
      color: "Stormy Black",
      price: 900,
      imageUrl:
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    },
  ];
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
              src={item.imageUrl}
              alt={item.name}
              className={style["item-image"]}
              width={500}
              height={500}
            />

            <div className={style["item-details"]}>
              <Typography
                content={formatText(item.name)}
                size="sm"
                weight="regular"
                color="primary"
                as="h2"
              />
              <Typography
                content={`${formatText(item.capacity)} | ${formatText(
                  item.color
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
                onClick={() =>
                  removeFromCart(item.id, item.capacity, item.color)
                }
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
              content={`TOTAL`}
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
