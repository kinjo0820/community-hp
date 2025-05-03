// app/about/page.tsx
export default function AboutPage() {
    return (
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">活動内容</h1>
        <ul className="space-y-6">
          <li>
            <h2 className="text-xl font-semibold">もくもく会（週1回）</h2>
            <p>集まって各自の課題に集中。最後に進捗を共有しモチベーションUP！</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">LT会（月1回）</h2>
            <p>5〜10分のプレゼン形式で、学んだことや作ったものを発表！</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">学習支援コンテンツ</h2>
            <p>教材やロードマップ、おすすめの動画・本などを共有。</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Discordコミュニティ</h2>
            <p>質問や雑談、進捗報告など、日常的に交流できる場所。</p>
          </li>
        </ul>
      </main>
    );
  }
  