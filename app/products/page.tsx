// app/products/page.tsx
import ProductCard from "@/components/ProductCard";

const products = [
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
    description: "血糖値に影響しない甘さ。アウトドアにも◎",
    image: "/images/monkfruit.jpg",
    variants: ["個包装", "100g袋"],
    tags: ["糖質制限", "抗酸化"],
  },
];

export default function ProductsPage() {
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">商品一覧</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
}