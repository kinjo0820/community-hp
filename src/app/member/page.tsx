// app/members/page.tsx
const members = [
    { name: "田中 太郎", role: "代表", bio: "大学3年生。ReactとNext.jsが好き。" },
    { name: "佐藤 花子", role: "副代表", bio: "PythonとAIに興味があります。" },
    { name: "鈴木 一郎", role: "デザイナー", bio: "UI/UXデザインを勉強中です。" },
  ];
  
  export default function MembersPage() {
    return (
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">メンバー紹介</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white shadow p-4 rounded-xl">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  