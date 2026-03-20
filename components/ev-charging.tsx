import { Zap } from "lucide-react";

export function EvCharging() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] p-6 w-[260px] text-white shadow-2xl border border-white/5 relative overflow-hidden">
        <div className="flex justify-between items-start mb-16">
          <Zap className="w-6 h-6 text-[#4ade80]" strokeWidth={1.5} />
          <div className="text-right">
            <div className="text-xl text-zinc-300 font-medium">51min</div>
            <div className="text-lg text-[#4ade80] font-medium">250kW</div>
          </div>
        </div>
        
        <div>
          <div className="text-6xl font-light text-[#4ade80] tracking-tighter mb-1">72%</div>
          <div className="text-[40px] font-medium text-white tracking-tight flex items-baseline">
            223<span className="text-xl text-zinc-400 font-normal ml-1">MI</span>
          </div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">EV charging</span>
    </div>
  );
}
