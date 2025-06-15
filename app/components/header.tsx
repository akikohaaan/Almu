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
            {/* 🌟 ヘッダーナビゲーションバー */}
                <div className="bg-white shadow-md">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                        <Link href="/">
                            <Image
                                src="/AlmuLogoRecutangular.png"
                                alt="Almu Logo"
                                width={80}
                                height={80}
                                className="mb-6 mx-auto"
                            />
                        </Link>

                        {/* ナビゲーションリンク */}
                        <nav className="flex space-x-6 text-sm">
                            <Link href="/products" className="text-gray-700 hover:underline">
                                商品一覧
                            </Link>
                            <Link href="/mct" className="text-gray-700 hover:underline">
                                MCTオイルについて
                            </Link>
                            <Link href="/lakanka_sugar" className="text-gray-700 hover:underline">
                                ラカンカ糖について
                            </Link>
                            <Link href="/molecular_nutrition">分子栄養学に基づく健康知識</Link>                        
                            <Link href="/about" className="text-gray-700 hover:underline">
                                Almuの想い
                            </Link>
                            <Link href="contact" className="text-gray-700 hover:underline"></Link>
                    </nav>
                    
                    {/* アイコン */}
                    <div className="flex space-x-4 text-gray-600">
                        <span className="cursor-pointer">🔍</span>
                        <span className="cursor-pointer">👤</span>
                        <span className="cursor-pointer">🛒</span>
                    </div>
                </div>
            </div>
        </header>
    );
}