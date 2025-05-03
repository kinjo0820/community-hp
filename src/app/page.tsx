// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-100">
        <h1 className="text-4xl font-bold mb-4">大学生のためのプログラミング学習コミュニティ</h1>
        <p className="text-lg mb-6">仲間と一緒に、楽しく・実践的に学ぼう！</p>
        <Link href="/meeting">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            面談を申し込む
          </button>
        </Link>
      </section>

      {/* 課題の明確化 */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">大学生が直面するプログラミング学習の課題</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>独学は挫折しやすく継続が難しい</li>
          <li>実践の機会や学び合いの環境が少ない</li>
          <li>質問できる相手がいない</li>
          <li>教材が英語ばかりでとっつきにくい</li>
        </ul>
      </section>

      {/* ターゲット */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">こんな人におすすめ！</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>プログラミングに不安のある初心者</li>
            <li>何から始めたらいいかわからない人</li>
            <li>一緒に学べる仲間がほしい人</li>
            <li>Webアプリやゲーム、AIを作ってみたい人</li>
          </ul>
        </div>
      </section>

      {/* 差別化ポイント */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">私たちの強み</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="bg-white p-4 rounded-lg shadow">大学生による、大学生のための団体</li>
          <li className="bg-white p-4 rounded-lg shadow">無料または低コストで参加しやすい</li>
          <li className="bg-white p-4 rounded-lg shadow">実践重視のプロジェクト学習</li>
          <li className="bg-white p-4 rounded-lg shadow">定期的なイベント・ミーティングあり</li>
          <li className="bg-white p-4 rounded-lg shadow">現役エンジニアや大学院生がサポート</li>
        </ul>
      </section>

      {/* 最後のCTA */}
      <section className="text-center py-12 bg-blue-50">
        <p className="text-xl mb-4">「楽しみながら成長できる」そんな仲間と出会いませんか？</p>
        <Link href="/meeting">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            面談を申し込む
          </button>
        </Link>
      </section>
    </main>
  );
}
