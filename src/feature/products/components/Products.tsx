"use client";
import ListItem from "@/shared/components/organisms/ListItem";
import SearchArea from "@/shared/components/organisms/SearchArea";
import { Product } from "@/shared/types/product.interface";
import styles from "./Products.module.css";

import React from "react";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className={styles["product-container"]}>
      <SearchArea count={products.length} />
      <ListItem list={products} />
    </div>
  );
};

export default Products;
