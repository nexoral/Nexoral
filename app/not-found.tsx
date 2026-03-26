import Link from "next/link";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { FadeIn } from "@/components/animations/fade-in";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* 404 Content */}
      <div className="flex-1 container mx-auto px-6 py-20 md:py-32 flex items-center">
        <PageTransition>
          <div className="w-full max-w-3xl mx-auto text-center">
            {/* Error Code */}
            <FadeIn delay={0.1}>
              <div className="mb-6 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-sm font-mono text-red-400">
                &lt;Error 404 /&gt;
              </div>
            </FadeIn>

            {/* Large 404 */}
            <FadeIn delay={0.2}>
              <div className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent font-mono">
                404
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Page Not Found
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
              </p>
            </FadeIn>

            {/* Terminal-style message */}
            <FadeIn delay={0.5}>
              <div className="bg-slate-900 rounded-lg border border-slate-700 p-6 mb-8 max-w-2xl mx-auto">
                <div className="font-mono text-sm text-slate-300 mb-4">
                  <div className="text-red-400 mb-2">&gt; nexoral --fetch path="{typeof window !== 'undefined' ? window.location.pathname : '/unknown'}"</div>
                  <div className="text-slate-500 pl-4">⚠️ Resource not found in our systems</div>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/"
                  className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-3 border border-slate-600 hover:border-emerald-400 rounded-lg transition-colors font-semibold"
                >
                  Explore Projects →
                </Link>
              </div>
            </FadeIn>

            {/* Fun fact */}
            <FadeIn delay={0.7}>
              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-slate-400 text-sm font-mono">
                  💡 <span className="text-slate-300">Pro tip:</span> Did you know? A 404 error is named after the HTTP status code. Check your URL and try again!
                </p>
              </div>
            </FadeIn>
          </div>
        </PageTransition>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
