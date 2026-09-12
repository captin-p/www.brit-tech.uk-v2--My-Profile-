"use client";

import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw, Square } from "lucide-react";

export function ArticleReader({ title, text }: { title: string; text: string }) {
  const [supported, setSupported] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    setSupported("speechSynthesis" in window);
    return () => window.speechSynthesis?.cancel();
  }, []);

  function start() {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${title}. ${text}`);
    utterance.rate = rate;
    utterance.lang = "en-GB";
    utterance.onend = () => { setSpeaking(false); setPaused(false); };
    window.speechSynthesis.speak(utterance);
    setSpeaking(true); setPaused(false);
  }

  function togglePause() {
    if (paused) { window.speechSynthesis.resume(); setPaused(false); }
    else { window.speechSynthesis.pause(); setPaused(true); }
  }

  function stop() { window.speechSynthesis.cancel(); setSpeaking(false); setPaused(false); }

  if (!supported) return <p className="text-sm text-muted-foreground">Audio reading is not supported by this browser.</p>;

  return (
    <aside className="rounded-2xl border bg-card p-5" aria-label="Listen to this guide">
      <div className="flex flex-wrap items-center gap-3">
        <div className="mr-auto"><p className="font-semibold">Listen to this guide</p><p className="text-sm text-muted-foreground">Have BritTech read the article aloud while you follow the steps.</p></div>
        {!speaking ? <button onClick={start} className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-background"><Play className="h-4 w-4" /> Read to me</button> : <>
          <button onClick={togglePause} className="inline-flex items-center gap-2 rounded-full border px-4 py-2">{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}{paused ? "Resume" : "Pause"}</button>
          <button onClick={stop} className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Square className="h-4 w-4" /> Stop</button>
          <button onClick={start} className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><RotateCcw className="h-4 w-4" /> Restart</button>
        </>}
        <label className="text-sm">Speed <select value={rate} onChange={(e) => { const next = Number(e.target.value); setRate(next); if (speaking) setTimeout(start, 0); }} className="ml-1 rounded border bg-background px-2 py-1"><option value="0.75">0.75x</option><option value="1">1x</option><option value="1.25">1.25x</option><option value="1.5">1.5x</option></select></label>
      </div>
    </aside>
  );
}
