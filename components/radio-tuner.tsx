"use client";

import { Circle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function RadioTuner() {
  const [frequency, setFrequency] = useState(98.8);
  const scrollRef = useRef<HTMLDivElement>(null);

  const maxFreq = 108;
  const minFreq = 88;
  const tickSpacing = 50; // 50px between major ticks (1 MHz)
  const majorTicks = Array.from({ length: maxFreq - minFreq + 1 }, (_, i) => maxFreq - i);

  useEffect(() => {
    // Initialize scroll position to 98.8
    if (scrollRef.current) {
      const initialOffset = (maxFreq - 98.8) * tickSpacing;
      scrollRef.current.scrollTop = initialOffset;
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollTop = scrollRef.current.scrollTop;
    const currentFreq = maxFreq - (scrollTop / tickSpacing);
    const clampedFreq = Math.max(minFreq, Math.min(maxFreq, currentFreq));
    setFrequency(Math.round(clampedFreq * 10) / 10);
  };

  const formattedFreq = frequency.toFixed(1);
  const isLessThan100 = frequency < 100;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#141414] rounded-[32px] p-8 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex justify-end items-center gap-2 text-xs font-medium tracking-wider mb-8">
          <span className="text-zinc-400">REC</span>
          <Circle className="w-3 h-3 text-white" />
          <span className="text-zinc-400">13:27</span>
        </div>

        <div className="flex">
          {/* Scrollable Tuner */}
          <div className="relative w-16 h-[220px] overflow-hidden">
            {/* Center indicator line */}
            <div className="absolute top-1/2 left-0 right-6 h-[2px] bg-[#f5a623] -translate-y-1/2 z-10 pointer-events-none shadow-[0_0_8px_rgba(245,166,35,0.8)]"></div>
            
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="h-full overflow-y-scroll pr-6 text-[10px] text-zinc-500 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{
                paddingTop: '110px',
                paddingBottom: '110px',
              }}
            >
              <div className="relative" style={{ height: `${(maxFreq - minFreq) * tickSpacing}px` }}>
                {majorTicks.map((num) => {
                  const topPos = (maxFreq - num) * tickSpacing;
                  return (
                    <div key={num}>
                      {/* Major tick */}
                      <div 
                        className="absolute w-full flex items-center justify-between"
                        style={{ top: `${topPos}px`, transform: 'translateY(-50%)' }}
                      >
                        <span className={Math.abs(frequency - num) < 0.5 ? "text-zinc-200 font-bold transition-colors" : "transition-colors"}>{num}</span>
                        <div className={`w-6 h-[1px] ${Math.abs(frequency - num) < 0.5 ? "bg-zinc-200" : "bg-zinc-400"} transition-colors`}></div>
                      </div>
                      
                      {/* Minor ticks */}
                      {num > minFreq && (
                        <>
                          <div className="absolute right-0 w-3 h-[1px] bg-zinc-700" style={{ top: `${topPos + 10}px`, transform: 'translateY(-50%)' }}></div>
                          <div className="absolute right-0 w-3 h-[1px] bg-zinc-700" style={{ top: `${topPos + 20}px`, transform: 'translateY(-50%)' }}></div>
                          <div className="absolute right-0 w-3 h-[1px] bg-zinc-700" style={{ top: `${topPos + 30}px`, transform: 'translateY(-50%)' }}></div>
                          <div className="absolute right-0 w-3 h-[1px] bg-zinc-700" style={{ top: `${topPos + 40}px`, transform: 'translateY(-50%)' }}></div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#141414] to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none z-10"></div>
          </div>

          <div className="flex-1 pl-6 flex flex-col justify-center">
            <div className="text-xs font-medium text-zinc-500 mb-3 tracking-wide">
              <span className="text-zinc-300">KISS {formattedFreq} FM</span> CHANNEL
            </div>
            
            <div className="bg-[#1a1a1a] rounded-2xl p-6 flex items-center justify-center mb-8 shadow-inner border border-black/40">
              <span className="text-6xl font-light tracking-tighter">
                {isLessThan100 && <span className="text-zinc-600">0</span>}
                {formattedFreq}
              </span>
            </div>

            <div className="flex justify-center gap-6 text-sm font-bold tracking-widest">
              <span className="text-[#f5a623]">FM</span>
              <span className="text-zinc-600">AM</span>
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Radio tuner</span>
    </div>
  );
}
