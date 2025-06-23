'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="text-gray-800 font-sans">
      {/* Hero セクション */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/bridWithMountain.JPG"
          alt="Background"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="bg-black/50 w-full h-full absolute -z-10" />
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Almuの想い
        </h1>
      </section>

      {/* 本文セクション */}
      <section className="px-6 py-12 max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
        <p>
          「もう歩けないかもしれない。」エベレストベースキャンプへの道中、私は何度もそう思いました。
          血糖値の乱高下、身体の冷え、孤独、過去のトラウマが何度も襲ってきたのです。
        </p>

        <p>
          かつて、摂食障害により私はエネルギーのない、動けない体になっていました。汗も出ず、便も出ず、感情すら凍りついたように。
          でもインドへ渡り、山を登り、自分の足で前に進むには、安定した感情とエネルギーが必要だと気づいたのです。
        </p>

        <div className="w-full flex justify-center py-6">
          <Image
            src="/mountain_with_me.jpg"
            alt="Founder on a mountain"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <p>
          分子栄養学を学び、細胞レベルで身体を整えることが、心の安定へとつながると実感しました。
          Almuはラカンカ糖やMCTオイルを使用し、血糖値のスパイクを防ぎながら持続的なエネルギーを提供する、
          “本当に身体が求めるスナック”として誕生したのです。
        </p>

        <p>
          過去にいじめを受け、何度も「死にたい」と泣いていた私の背中を、母が静かにさすってくれていました。
          山で出会った人々の手のように、誰かにそっと寄り添う存在に——Almuはそんな「手」になりたいのです。
        </p>

        <p className="font-semibold">
          細胞からあなたの力を引き出す。
          夢に向かって、孤独に歩むあなたに手を添える。それが、Almuの原点です。
        </p>
      </section>
    </main>
  );
}
