'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'TOP', path: '/' },
  { name: '活動内容', path: '/about' },
  { name: 'メンバー紹介', path: '/member' },
  { name: 'イベント情報', path: '/events' },
  { name: 'お問い合わせ', path: '/contact' },
  { name: '面談フォーム', path: '/meeting' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">WellnessGeekLab</Link>
        <nav className="space-x-4 text-sm sm:text-base">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`hover:text-blue-600 transition ${
                pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
