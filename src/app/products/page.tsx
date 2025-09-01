import Products from "@/feature/products/components/Products";
import { getProducts } from "@/feature/products/services";

interface ProductsPageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { search } = await searchParams;

  const products = await getProducts(search);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
