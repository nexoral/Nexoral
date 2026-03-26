import Link from "next/link";

export function Navigation() {
  return (
    <nav className="border-b border-slate-800 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold font-mono">
            <span className="text-emerald-400">nexoral</span>
            <span className="text-slate-500">$</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/founder"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Founder
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
