'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      <section className="relative h-[80vh] md:h-screen flex items-center justify-center text-white">
      {/* 背景画像 */}
      <Image
        src="/Almu_logo_clear.png" 
        alt="Almu background"
        fill
        className="object-cover object-center z-[-1]"
        priority
      />
           {/* 🌄 Hero Section */}
      {/* <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white bg-black/50"> */}
        {/* 背景画像 */}

          {/* <div className="position:20% inset-0 z-0">
            <Image
              src="/AlmuLogoWithNature.png"
              alt="Almu Hero background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>       */}


        {/* ロゴとテキスト */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-white px-4 space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
            夢に向かって孤独に歩むあなたに手を添える。
          </h1>
          <p className="text-lg drop-shadow">
            分子栄養学に基づく細胞から支えるスナック『Almu』
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link href="/products" className="text-gray-700 hover:underline">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded">
                商品を見る
              </button>
            </Link>
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
