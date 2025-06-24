'use client';

import Image from 'next/image';

export default function MCTPage() {
  return (
    <main className="font-sans text-gray-800">
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <Image
          src="/MCT_BG.png"
          alt="MCTオイル背景"
          fill
          className="object-cover -z-10"
        />
        <div className="bg-black/50 w-full h-full absolute -z-10" />
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow">
          MCTオイルとは
        </h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6 leading-relaxed text-lg">
        <p>
          MCT（中鎖脂肪酸）は、体内ですばやくエネルギーに変わるオイル。
          肝臓ですぐに代謝され、血糖値を乱さずに「静かな力」を供給します。
        </p>

        <p>
          糖に頼らない体は、感情の波にも強くなる。
          だからAlmuでは、血糖値スパイクを避け、持続的な集中力を支えるMCTを選びました。
        </p>

        <p>細胞のエネルギー源に革命を。ブレない集中と持続力をあなたに。</p>

        <p>MCTオイル（中鎖脂肪酸油）は、一般的な油とは異なり、素早くエネルギーに変換されるという特性を持ちます。
        特に「C8（カプリル酸）」や「C10（カプリン酸）」といった分子構造の短い脂肪酸は、消化を経ずに直接肝臓へ運ばれ、ケトン体を生成します。
        このケトン体は、糖質とは異なり血糖値を急上昇させることなく、脳や筋肉に持続的なエネルギーを提供します。血糖値の乱高下による「だるさ」「眠気」「集中力の低下」などを回避し、内側から安定したエネルギーの土台を築くことができます。
        </p>
        <p className="mt-4">
        分子栄養学では、ミトコンドリアの機能低下を防ぐ脂質エネルギーの重要性が注目されています。
        MCTオイルは、まさにこの“細胞の発電所”にとって理想的な燃料です。
        </p>
        <div className="flex justify-center">
          <Image
            src="/mct-oil.png"
            alt="MCTオイルの瓶"
            width={500}
            height={350}
            className="rounded-lg shadow"
          />
        </div>


        <p>
          朝の一歩を軽くしたいとき。登山前や集中力を必要とするとき。
          あなたの内なる火を灯す、静かな燃料として。
        </p>

        <p className="text-right font-semibold text-green-700">
          ー 揺れないエネルギーを、あなたに。
        </p>
      </section>
    </main>
  );
}
