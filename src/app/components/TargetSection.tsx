// components/TargetSection.tsx
import { Users, BrainCircuit, Sparkles, Rocket } from 'lucide-react';

const targets = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
    title: '初心者でも安心',
    description: 'プログラミングに不安がある方でも、やさしく学べる環境です。',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: '何から始めるか迷っている',
    description: '学習ロードマップや教材が整っているので、迷いません。',
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: '仲間と学びたい',
    description: 'もくもく会やイベントで一緒に成長できる仲間が見つかります。',
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: 'アプリやAIを作ってみたい',
    description: 'WebアプリやAIなど、実際に手を動かして開発できます。',
  },
];

export default function TargetSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">こんな人におすすめ！</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {targets.map((target, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                {target.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{target.title}</h3>
              <p className="text-sm text-gray-600">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
