import { Product } from "@/shared/types/product.interface";
import axios from "axios";
import { notFound } from "next/navigation";

export async function getProduct(id: string): Promise<Product> {
  try {
    const res = await axios.get<Product>(
      `https://dummyjson.com/products/${id}`
    );
    return res.data;
  } catch {
    notFound();
  }
}

export async function getProducts(search?: string): Promise<Product[]> {
  try {
    const url = search
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
      : "https://dummyjson.com/products";

    const res = await axios.get(url);
    const { products } = res.data;
    return products;
  } catch {
    notFound();
  }
}
