import Product from "@/feature/product/components";
import { getProduct } from "@/feature/product/services";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return <Product data={product} />;
}
