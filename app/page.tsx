import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center py-10 px-4 space-y-8">
      <Image
        src="/AlmuLogo.png"
        alt="AlmuLogo"
        width={160}
        height={160}
        className="mx-auto"
      />
      <h1 className="text-4xl font-bold text-pink-600">Almu</h1>
      <p className="text-xl">頑張る人に手を差し伸べる。</p>
      <p className="text-gray-600">分子栄養学で支えるあなたの夢。</p>
      <div className="space-x-4">
        <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
          商品を見る
        </button>
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
          ログを記録
        </button>
      </div>
    </main>
  );
}
