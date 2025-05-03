// app/meeting/page.tsx
export default function MeetingPage() {
    return (
      <main className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">面談申込フォーム</h1>
        <form
          action="https://formsubmit.co/your-email@example.com"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="block font-semibold mb-1">お名前</label>
            <input name="name" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1">メールアドレス</label>
            <input type="email" name="email" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1">希望日時</label>
            <input name="date" type="text" placeholder="例：5月7日 17:00〜" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1">面談の目的・質問など</label>
            <textarea name="message" className="w-full border p-2 rounded h-24" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            申し込む
          </button>
        </form>
      </main>
    );
  }
  