import Link from "next/link";
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0A0A0A] text-zinc-100 font-mono">
      <div className="max-w-md w-full p-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl backdrop-blur-xl text-center space-y-6">
        <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
          <Terminal className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <div className="text-xs text-rose-400 font-semibold tracking-wider uppercase">
            Error 404 · Route Not Found
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            404: Page Missing
          </h1>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            The requested URI does not exist on this server or has been relocated to another endpoint.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-left text-xs text-zinc-400 space-y-1">
          <div>
            <span className="text-cyan-400">status:</span> 404 NOT_FOUND
          </div>
          <div>
            <span className="text-cyan-400">stack:</span> client.request.failed
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition-colors shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
