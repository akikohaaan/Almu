'use client';

import Image from 'next/image';

export default function LakankaPage() {
  return (
    <main className="font-sans text-gray-800">
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <Image
          src="/LakankaChina.png"
          alt="ラカンカ背景"
          fill
          className="object-cover -z-10"
        />
        <div className="bg-black/50 w-full h-full absolute -z-10" />
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow">
          ラカンカ糖とは
        </h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6 leading-relaxed text-lg">
        <p>
          ラカンカ糖は、中国の古来から伝わる自然甘味料。
          血糖値にほとんど影響を与えず、甘さだけを届けてくれます。
        </p>
        <p>
          糖質の“害”を断ちつつ、やさしい甘さを。血糖値を揺らさないスイートサイエンス。
          ラカンカ（羅漢果）は中国の伝統医学にも用いられてきた植物で、抽出された甘味成分「モグロサイド」は、血糖値に影響を与えない天然甘味料として知られています。
          一般的な糖質は急激な血糖上昇とともに、インスリン分泌→低血糖→疲労感・食欲増進という負のスパイラルを引き起こします。
          しかしラカンカ糖は、血糖値に関与しないため、急激なエネルギーの波を起こさず、安定した代謝リズムを保つことができます。
        </p>
        <p>
          分子栄養学では、血糖値の急変動は炎症・老化・メンタル不調の原因とされます。          
          ラカンカ糖は「身体に優しい甘味」として、そのリスクを回避しながら甘さを楽しむ方法です。
        </p>
        <p>
          Almuでは、砂糖の代替としてラカンカ糖を使用。
          人工甘味料に頼らず、自然の力で身体にやさしい商品づくりを大切にしています。
        </p>

        <div className="flex justify-center">
          <Image
            src="/Lakanka.png"
            alt="ラカンカの果実"
            width={500}
            height={350}
            className="rounded-lg shadow"
          />
        </div>

        <p>
          血糖値スパイクを防ぎながら、日々の食生活に「やさしい甘さ」を。
          心の揺れを減らす第一歩は、血糖の安定から。
        </p>

        <p className="text-center font-semibold text-green-700">
          ー 甘さは、やさしさ。
        </p>
      </section>
    </main>
  );
}