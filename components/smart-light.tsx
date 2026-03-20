import { Lightbulb, Sun } from "lucide-react";

export function SmartLight() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#141414] rounded-[32px] p-6 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-5 h-5 text-zinc-300" />
          <span className="text-base font-medium text-zinc-100">Office Lamp</span>
        </div>
        
        <div className="flex gap-3 mb-5">
          <div className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#fcd34d] via-[#d97706] to-[#451a03] relative overflow-hidden shadow-inner">
            <div className="absolute inset-y-0 right-0 w-1/4 bg-black/40 backdrop-blur-md border-l border-black/20"></div>
            {/* Slider Thumb */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[25%] w-2 h-8 bg-white rounded-full shadow-md translate-x-1/2"></div>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#fcd34d] to-[#9d174d] shadow-inner border border-white/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/20 blur-[2px]"></div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-[10px] font-bold tracking-wider text-zinc-500">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-[#fcd34d]" />
            <span className="text-[#fcd34d]">WARM SCENE</span>
            <span>•</span>
            <span>80%</span>
          </div>
          <span>2700 K</span>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Smart light</span>
    </div>
  );
}
