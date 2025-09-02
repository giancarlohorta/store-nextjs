import { getProduct } from "@/feature/products/services";
import Product from "@/feature/Product";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return <Product data={product} />;
}
