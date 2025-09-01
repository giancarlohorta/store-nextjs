import Image from "next/image";
import { getProduct } from "@/feature/products/services";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
      />
    </main>
  );
}
