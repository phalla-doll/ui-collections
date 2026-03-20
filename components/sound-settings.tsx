"use client";

import { useState, useEffect } from "react";
import { Volume2, Clock, X, TrendingUp, TrendingDown } from "lucide-react";

export function SoundSettings() {
  const [volume, setVolume] = useState(74);
  const [levels, setLevels] = useState<number[]>(Array(32).fill(4));

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdate = 0;
    
    const updateVisualizer = (timestamp: number) => {
      if (timestamp - lastUpdate > 50) {
        setLevels(prev => prev.map(() => {
          const base = 4;
          const randomPart = Math.random() * 20;
          // Scale the random part by the volume percentage
          return base + (randomPart * (volume / 100));
        }));
        lastUpdate = timestamp;
      }
      animationFrameId = requestAnimationFrame(updateVisualizer);
    };
    
    animationFrameId = requestAnimationFrame(updateVisualizer);
    return () => cancelAnimationFrame(animationFrameId);
  }, [volume]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] p-6 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold text-zinc-100">Sound Settings</h2>
          <button className="text-zinc-500 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <div className="text-sm text-zinc-500">Audio</div>
            {/* Real-time Audio Visualizer */}
            <div className="flex items-end h-6 gap-[2px] w-32">
              {levels.map((level, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-white rounded-t-[1px] transition-all duration-75"
                  style={{ 
                    height: `${level}px`, 
                    opacity: volume === 0 ? 0.2 : 0.4 + (level/24)*0.6 
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Volume2 className="w-5 h-5 text-zinc-400" />
            <div className="flex-1 h-1.5 bg-zinc-800 rounded-full relative">
              <div className="absolute left-0 top-0 bottom-0 bg-white rounded-full pointer-events-none" style={{ width: `${volume}%` }}></div>
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md -ml-2 pointer-events-none" style={{ left: `${volume}%` }}></div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-sm font-medium text-zinc-400 w-8 text-right">{volume}%</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-sm text-zinc-500 mb-4">Speed</div>
          <div className="flex justify-between gap-2">
            {['0.5x', '1.0x', '1.5x', '2.0x', '2.7x'].map((speed) => (
              <button 
                key={speed}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                  speed === '1.0x' ? 'bg-[#2c2c2e] text-white' : 'text-zinc-500 hover:bg-white/5'
                }`}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="text-sm text-zinc-500 mb-4">Duration</div>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-[#2c2c2e] rounded-xl p-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-500" />
              <span className="text-sm font-mono text-zinc-200">00:00.00</span>
            </div>
            <div className="w-2 h-[1px] bg-zinc-600"></div>
            <div className="flex-1 bg-[#2c2c2e] rounded-xl p-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-500" />
              <span className="text-sm font-mono text-zinc-200">01:43.09</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-zinc-500 mb-4">Effects</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium text-zinc-300">Fade In</span>
              </div>
              <div className="w-11 h-6 bg-zinc-800 rounded-full p-0.5 cursor-pointer transition-colors">
                <div className="w-5 h-5 bg-zinc-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium text-zinc-300">Fade Out</span>
              </div>
              <div className="w-11 h-6 bg-white rounded-full p-0.5 cursor-pointer flex justify-end transition-colors">
                <div className="w-5 h-5 bg-[#1c1c1e] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Sound settings</span>
    </div>
  );
}
