import { Volume2, Clock, X, TrendingUp, TrendingDown } from "lucide-react";

export function SoundSettings() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] p-6 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold text-zinc-100">Sound Settings</h2>
          <button className="text-zinc-500 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
        </div>

        <div className="mb-8">
          <div className="text-sm text-zinc-500 mb-4">Audio</div>
          <div className="flex items-center gap-4">
            <Volume2 className="w-5 h-5 text-zinc-400" />
            <div className="flex-1 h-1.5 bg-zinc-800 rounded-full relative">
              <div className="absolute left-0 top-0 bottom-0 w-[74%] bg-white rounded-full"></div>
              <div className="absolute left-[74%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md -ml-2"></div>
            </div>
            <span className="text-sm font-medium text-zinc-400">74%</span>
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
