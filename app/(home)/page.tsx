import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center space-y-20">
      
      {/* 1. HERO SECTION */}
      <div className="space-y-6 max-w-3xl">
        <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500 mb-4">
          🚀 Learning Journey
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Mastering Golang <br /> The Backend Future
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          আমার Golang শেখার সম্পূর্ণ নোট, প্রজেক্ট এবং রিসোর্স এখানে সাজানো আছে। 
          Simplicity এবং Concurrency-র জাদুকরী দুনিয়ায় স্বাগতম।
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Start Reading
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View on GitHub
          </Link>
        </div>
      </div>

      {/* 2. TOPICS / FEATURES */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl w-full text-left">
        {features.map((feature, i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm transition-all hover:border-blue-500/50 hover:shadow-md">
            <div className="mb-4 text-3xl">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. CODE PREVIEW (Visual Appeal) */}
      <div className="w-full max-w-3xl rounded-xl border bg-[#1e1e1e] p-4 text-left shadow-2xl overflow-hidden">
        <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-gray-400 font-mono">main.go</span>
        </div>
        <pre className="overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed">
          <code>
            <span className="text-purple-400">package</span> main{'\n\n'}
            <span className="text-purple-400">import</span> <span className="text-green-400">"fmt"</span>{'\n\n'}
            <span className="text-purple-400">func</span> <span className="text-blue-400">main</span>() {'{'}{'\n'}
            {'  '}fmt.<span className="text-yellow-400">Println</span>(<span className="text-green-400">"Hello, Gopher! Let's build scalable systems."</span>){'\n'}
            {'}'}
          </code>
        </pre>
      </div>

    </main>
  );
}

// Features Data
const features = [
  {
    icon: '🐹',
    title: 'Go Basics',
    desc: 'Variables, loops, functions থেকে শুরু করে Go-এর সিনট্যাক্স শেখার শুরু।',
  },
  {
    icon: '⚡',
    title: 'Concurrency',
    desc: 'Go Routines এবং Channels ব্যবহার করে প্যারালাল প্রসেসিং মাস্টারিং।',
  },
  {
    icon: '🌐',
    title: 'Web Servers',
    desc: 'Gin বা standard library দিয়ে হাই-পারফর্মেন্স API ডেভেলপমেন্ট।',
  },
];