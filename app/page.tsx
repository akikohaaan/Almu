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
      <p className="text-xl">頑張る人に手を差し伸べる。</p>
      <p className="text-gray-600">分子栄養学で支えるあなたの夢。</p>
      <section>CONCEPT</section>
      <section>PRODUCT</section>
      <section>使用シーン</section>
      <section>記録機能紹介</section>
      <footer></footer>
    </main>
  );
}
