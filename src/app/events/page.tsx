// app/events/page.tsx
export default function EventsPage() {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">イベント情報</h1>
        <div className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-xl">
            <h2 className="text-xl font-semibold">もくもく会 #12</h2>
            <p>📅 5月10日（金）18:00〜 @オンライン（Discord）</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl">
            <h2 className="text-xl font-semibold">LT会 #3</h2>
            <p>📅 5月25日（土）15:00〜 @大学会議室A</p>
          </div>
        </div>
      </main>
    );
  }
  