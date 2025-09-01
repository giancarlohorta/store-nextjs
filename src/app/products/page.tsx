import Products from "@/feature/products/components/Products";
import axios from "axios";

interface ProductsPageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { search } = await searchParams;
  const url = search
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
    : "https://dummyjson.com/products";

  const res = await axios.get(url);

  const { products } = res.data;

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
