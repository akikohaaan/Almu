import { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

const products: Product[] = [
  {
    id: "mct",
    name: "Almu MCT Boost",
    description: "即エネルギーに変換される中鎖脂肪酸。携帯用＆家庭用。",
    image: "/images/mct.jpg",
    variants: ["携帯個包装", "ボトル500ml"],
    tags: ["代謝アップ", "集中力サポート"],
  },
  {
    id: "monkfruit",
    name: "Almu Monk Sweet",
    description: "血糖値に影響しない甘さ。アウトドアにも◎。",
    image: "/images/monkfruit.jpg",
    variants: ["個包装", "100g袋"],
    tags: ["糖質制限", "抗酸化"],
  },
];

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
