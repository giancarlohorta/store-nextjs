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
