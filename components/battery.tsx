import { Zap } from "lucide-react";

export function Battery() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#141414] rounded-[32px] p-8 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex items-center gap-2 mb-4 text-zinc-300">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">Charging...</span>
        </div>
        
        <div className="text-[32px] font-medium mb-10 tracking-tight">
          85% <span className="text-zinc-600 text-2xl mx-1">•</span> 13 min left
        </div>
        
        <div className="relative">
          <div className="flex justify-between text-xs font-medium text-zinc-600 mb-3 px-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="h-14 bg-[#1c1c1e] rounded-2xl overflow-hidden relative border border-white/5 p-1.5 shadow-inner">
            <div className="h-full w-[85%] bg-white rounded-xl shadow-[0_0_24px_rgba(255,255,255,0.6)] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Battery</span>
    </div>
  );
}
