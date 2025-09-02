import { Product } from "@/shared/types/product.interface";

export const formatText = (text: string) => {
  return text.toUpperCase();
};

export const humanizeKey = (key: string) =>
  formatText(key.replace(/([A-Z])/g, " $1"));

export const formatSpecList = (productData: Product) => {
  return {
    brand: productData.brand,
    name: productData.title,
    description: productData.description,
    ...productData.dimensions,
  };
};
