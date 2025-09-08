import { Product } from "@/shared/types/product.interface";

export interface CartProduct extends Product {
  quantity: number;
}
