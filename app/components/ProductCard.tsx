// components/ProductCard.tsx
import Image from "next/image";
import { Product } from "../types/product"; // パス注意！

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-white">
          {product.tags.map((tag:string, index:string) => (
            <li key={index} className="bg-pink-600 px-2 py-1 rounded">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
