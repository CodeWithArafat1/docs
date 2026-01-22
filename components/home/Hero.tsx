import Link from 'next/link';
import { Terminal, Cpu, Server, ArrowRight, Code2 } from 'lucide-react'; // প্রফেশনাল আইকন ইমপোর্ট

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[90vh] py-16 px-4 relative overflow-hidden">
      
      {/* Background Elements for modern feel */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full -z-10 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-500/20 blur-[100px] rounded-full -z-10 opacity-50 pointer-events-none" />

      {/* 1. HERO SECTION - More commanding typography */}
      <div className="text-center space-y-8 max-w-4xl mx-auto mb-24 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 shadow-sm shadow-blue-500/20 mb-6">
          <Code2 className="h-4 w-4" />
          <span>My Golang Documentation & Notes</span>
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl leading-tight">
          Mastering <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">Backend Engineering</span> with Go
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A collection of my personal notes, code snippets, and projects from my journey to becoming a skilled backend engineer. Dive into the world of simplicity and performance.
        </p>
        
        <div className="flex flex-wrap justify-center gap-5 pt-6">
          <Link
            href="/docs"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Start Learning Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://github.com/codewitharafat1"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View on GitHub
          </Link>
        </div>
      </div>

      {/* 2. FEATURES SECTION - Premium Cards with Icons */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl w-full relative z-10">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-linear-to-br from-background/80 to-background/40 backdrop-blur-md p-8 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            {/* Corner Glow Effect on Hover */}
            <div className="absolute -top-20 -right-20 h-37.5 w-37.5 bg-blue-500/30 blur-[80px] transition-all group-hover:bg-blue-400/50" />

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 shadow-sm ring-1 ring-blue-500/20 transition-transform group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

// Features Data with Lucide Icons
const features = [
  {
    icon: <Terminal className="h-7 w-7" />,
    title: 'Core Syntax & Basics',
    desc: 'ভেরিয়েবল, লুপ, ফাংশন এবং Go-এর টাইপ সিস্টেমের গভীর ধারণা। শক্তিশালী ফাউন্ডেশন তৈরি করুন।',
  },
  {
    icon: <Cpu className="h-7 w-7" />,
    title: 'Advanced Concurrency',
    desc: 'Goroutines এবং Channels ব্যবহার করে প্যারালাল এবং হাই-পারফরম্যান্স সিস্টেম ডিজাইন।',
  },
  {
    icon: <Server className="h-7 w-7" />,
    title: 'Microservices & APIs',
    desc: 'প্রোডাকশন-রেডি REST এবং gRPC সার্ভিস তৈরি, ডাটাবেস কানেকশন এবং ডেপ্লয়মেন্ট গাইড।',
  },
];