import { Lightbulb, Sun, Power } from "lucide-react";

export function SmartLight() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] p-6 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fcd34d]/20 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-[#fcd34d]" />
            </div>
            <div>
              <h3 className="text-base font-medium text-zinc-100">Office Lamp</h3>
              <p className="text-xs text-zinc-500">Connected</p>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
            <Power className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
        
        <div className="flex gap-3 mb-6">
          {/* Temperature Slider */}
          <div className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#fef08a] via-[#f59e0b] to-[#ea580c] relative shadow-inner border border-white/5">
            {/* Slider Thumb */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[75%] -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-black/5 flex items-center justify-center cursor-pointer">
              <div className="w-1 h-4 bg-zinc-300 rounded-full"></div>
            </div>
          </div>
          {/* Color Preview / Power state */}
          <div className="w-14 h-14 rounded-2xl bg-[#ea580c] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_0_20px_rgba(234,88,12,0.3)] border border-white/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs font-medium text-zinc-400">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <Sun className="w-4 h-4 text-[#fcd34d]" />
            <span className="text-zinc-200">Warm Scene</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-300">80%</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span>2700K</span>
          </div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Smart light</span>
    </div>
  );
}
