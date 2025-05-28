import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 背景画像 */}
      <Image
        src="/AlmuLogoWithNatureAndGirl.jpg"
        alt="Almu hero"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* 重ねるコンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-screen bg-black bg-opacity-40">
        <h1 className="text-4xl md:text-6xl font-bold">INNTER STRENGTH - 頑張る人に手を差し伸べる。</h1>
        <p className="text-lg md:text-2xl mt-4">分子栄養学で支えるあなたの夢。</p>
        <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded shadow">
          商品を見る
        </button>
      </div>
    </main>
  );
}
