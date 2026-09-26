"use client";

import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Bio } from "../data";

export default function ContactActions() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(Bio.email);
      setCopied(true);
      setCopyFailed(false);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyFailed(true);
      window.setTimeout(() => setCopyFailed(false), 2500);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${Bio.email}`}
        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
      >
        Email me <Mail size={16} aria-hidden="true" />
      </a>
      <a
        href={Bio.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm text-zinc-200 transition-colors hover:border-cyan-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        LinkedIn <Linkedin size={16} aria-hidden="true" />
      </a>
      <a
        href={Bio.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm text-zinc-200 transition-colors hover:border-cyan-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        GitHub <Github size={16} aria-hidden="true" />
      </a>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm text-zinc-400 transition-colors hover:border-cyan-300/60 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        {copied ? "Email copied" : copyFailed ? "Copy failed" : "Copy email"}
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email copied to clipboard" : copyFailed ? "Could not copy email" : ""}
      </span>
    </div>
  );
}
