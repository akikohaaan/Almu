import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center py-16 px-4 space-y-8">
      <div className="flex justify-center">
         <Image
        src="/AlmuLogoWithNatureAndGirl.png"
        alt="Almu hero"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* <Image
        src="/AlmuLogo.png"
        alt="AlmuLogo"
        width={160}
        height={160}
        className="mx-auto"
      /> */}
      </div>

      {/* キャッチコピー */}
      <h1 className="text-4xl font-bold text-green-800">Almu</h1>
      <p className="text-xl text-gray-600 tracking-wide">INNTER STRENGTH - 頑張る人に手を差し伸べる。</p>
      <p className="text-gray-600">分子栄養学で支えるあなたの夢。</p>
      <div className="mt-6 space-x-4">
        <section><button>CONCEPT</button></section>
        <section><button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">PRODUCT</button></section>
        <section><button>使用シーン</button></section>
        <section><button>記録機能紹介</button></section>
      </div>
      <footer></footer>
    </main>
  );
}
