import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-slate-800">
      <div className="max-w-4xl">
        <div className="mb-8 font-mono text-sm">
          <div className="text-slate-600">
            <span className="text-emerald-400">$</span> echo &quot;Made with ❤️ by
            developers, for developers&quot;
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm font-mono">
            <span className="text-slate-600">©</span> 2026 Nexoral Systems{" "}
            <span className="text-slate-700">|</span> MIT Licensed{" "}
            <span className="text-slate-700">|</span>{" "}
            <span className="text-emerald-400">Open Source</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/projects"
              className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
            >
              Projects
            </Link>
            <Link
              href="/founder"
              className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
            >
              Founder
            </Link>
            <a
              href="https://github.com/nexoral"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
            >
              GitHub
            </a>
            <a
              href="mailto:connect@ankan.in"
              className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
