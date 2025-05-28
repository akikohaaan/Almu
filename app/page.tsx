'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
       <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"></section>
        {/* 背景画像 */}
        {/* <Image
          src="/AlmuLogoWithNatureAndGirl.jpg"
          alt="Almu hero"
          fill
          className='object-cover brightness-75'
          priority
        /> */}

        {/* ロゴとテキスト */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-white px-4 space-y-6"
          >
          <Image
          src="/Almulogo.png"
          alt="Almu Logo"
          width={180}
          height={180}
          className="mx-auto"
          />
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
            中身こそ力だ
          </h1>
          <p className="text-lg drop-shadow">
            夢に向かう、あなたに手を差しのべる。
            栄養分子学に基づくスナック
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white gont-semibold px-6 py-3 rounded">
              商品を見る
            </button>
            <button className="bg-white/90 text-pink-700 hover:bg-white px-6 py-3 rounded font-semibold">
            　ログを記録
            </button>
          </div>
          </motion.div>

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
