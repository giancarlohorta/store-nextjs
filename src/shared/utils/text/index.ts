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
    sku: productData.sku,
    ...productData.dimensions,
  };
};

export const unitFormat = (value: number, unit: string) => {
  return `${value} ${unit}`;
};

export const formatAdapter = (key: string, value: string) => {
  switch (key) {
    case "width":
      return unitFormat(Number(value), "mm");
    case "height":
      return unitFormat(Number(value), "mm");
    case "depth":
      return unitFormat(Number(value), "mm");
    default:
      return value;
  }
};
