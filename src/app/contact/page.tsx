// app/contact/page.tsx
export default function ContactPage() {
    return (
      <main className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
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
            <label className="block font-semibold mb-1">内容</label>
            <textarea name="message" required className="w-full border p-2 rounded h-32" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            送信する
          </button>
        </form>
      </main>
    );
  }
  