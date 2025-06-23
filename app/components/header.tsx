'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            {/* 🌟 お知らせバー */}
            <div className="bg-blue-800 text-white text-sm text-center py-1">
                <p>発売記念！10%クーポン配布。</p>
            </div>

            {/* 🌟 ナビゲーションバー */}
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                
                {/* ロゴ */}
                <Link href="/">
                    <Image
                        src="/AlmuLogo.png"
                        alt="Almu Logo"
                        width={80}
                        height={80}
                        className="mr-6"
                    />
                </Link>

                {/* ナビゲーションリンク */}
                <nav className="flex space-x-6 text-sm text-gray-700 items-center">
                    <Link href="/products" className="hover:underline">
                        商品一覧
                    </Link>
                    <Link href="/aboutMct" className="hover:underline">
                        MCTオイルについて
                    </Link>
                    <Link href="/aboutLakanka" className="hover:underline">
                        ラカンカ糖について
                    </Link>
                    <Link href="/molecular_nutrition" className="hover:underline">
                        分子栄養学に基づく健康知識
                    </Link>
                    <Link href="/about" className="hover:underline">
                        Almuの想い
                    </Link>
                </nav>

                {/* アイコン */}
                <div className="flex space-x-4 text-xl text-gray-600">
                    <span className="cursor-pointer">🔍</span>
                    <span className="cursor-pointer">👤</span>
                    <span className="cursor-pointer">🛒</span>
                </div>
            </div>
        </header>
    );
}
