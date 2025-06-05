'use client';

import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md w-full">
            {/* 🌟 お知らせ場0 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold text-pink-600">
                        Almu
                    </Link>
                    <nav className="space-x-4">
                        <Link href="/" className="text-gray-700 hover:text-pink-600">
                            ホーム
                        </Link>
                        <Link href="/products" className="text-gray-700 hover:text-pink-600">
                            商品一覧
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-pink-600">
                            Almuの想い
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );