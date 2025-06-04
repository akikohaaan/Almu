// app/page.tsx

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      {/* 🌄 Hero Section */}
      

      <section className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-black/50">

        {/* 背景画像 */}
        
        {/* ロゴとテキスト */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-white px-4 space-y-6"
        >
          <Image
            src="/AlmuLogo.png"
            alt="Almu Logo"
            width={160}
            height={160}
            // className="mb-6 opacity-true justify-center items-center text-center"
            className="mb-6 mx-auto"
          />
          
          <div className="absolute inset-0 top-10">
            <Image
              src="/AlmuLogoWithNatureAndGirl.png"
              alt="Almu Hero background"
              fill
              className="object-cover object-top  -z-10"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
            夢に向かって孤独に歩むあなたに手を添える。
          </h1>
          <p className="text-lg drop-shadow">
            分子栄養学に基づく細胞から支えるスナック『Almu』
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded">
              商品を見る
            </button>
            <button className="bg-white/90 text-pink-700 hover:bg-white px-6 py-3 rounded font-semibold">
              ログを記録
            </button>
          </div>
        </motion.div>
      </section>
      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Almuの想い</h2>
        <p className="mt-6 text-gray-700 leading-loose">
          夢に向かって歩みを止めないあなたへ。<br />
          誰にも頼れない夜、孤独のなかでふと手に取るスナックが、<br />
          あなたを内側からそっと支えられたら。<br />
          <br />
          Almuは、分子栄養学に基づいた<br />
          高機能・低糖質・高タンパクのスナック。<br />
          細胞レベルで、あなたの「本当の力」を引き出します。
        </p>
      </section>
    </main>
  );
}
