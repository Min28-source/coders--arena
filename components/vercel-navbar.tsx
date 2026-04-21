"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [time, setTime] = useState(0);
  const [activeProblem, setActiveProblem] = useState("A");

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (t: number) => {
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;

    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleRun = () => {
    console.log("Run clicked");
  };

  const handleSubmit = () => {
    console.log("Submit clicked");
  };

  return (
    <div className="flex items-center justify-between px-4 h-14 border-b bg-black text-white">

      {/* LEFT: Logo + Problems */}
      <div className="flex items-center gap-4">
        <span className="font-semibold text-sm tracking-wide">
          Code Arena
        </span>

        <div className="flex items-center gap-2">
          {["A", "B", "C", "D"].map((p) => (
            <button
              key={p}
              onClick={() => setActiveProblem(p)}
              className={`px-3 py-1 rounded text-sm transition ${
                activeProblem === p
                  ? "bg-white text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* CENTER: Timer */}
      <div className="text-sm font-mono">
        ⏱️ {formatTime(time)}
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleRun}
          className="px-3 py-1 bg-blue-600 rounded text-sm hover:bg-blue-700 transition"
        >
          Run
        </button>

        <button
          onClick={handleSubmit}
          className="px-3 py-1 bg-green-600 rounded text-sm hover:bg-green-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}