import { Circle } from "lucide-react";

export function RadioTuner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#141414] rounded-[32px] p-8 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex justify-end items-center gap-2 text-xs font-medium tracking-wider mb-8">
          <span className="text-zinc-400">REC</span>
          <Circle className="w-3 h-3 text-white" />
          <span className="text-zinc-400">13:27</span>
        </div>

        <div className="flex">
          <div className="flex flex-col justify-between text-[10px] text-zinc-500 pr-6 h-[220px] relative w-16">
            {[104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94].map((num, idx) => (
              <div key={num} className="flex flex-col items-end w-full">
                <div className="flex items-center justify-between w-full">
                  <span>{num}</span>
                  <div className="w-6 h-[1px] bg-zinc-400"></div>
                </div>
                {idx < 10 && (
                  <div className="flex flex-col gap-[4px] my-[4px] items-end w-full">
                    <div className="w-3 h-[1px] bg-zinc-700"></div>
                    <div className="w-3 h-[1px] bg-zinc-700"></div>
                    <div className="w-3 h-[1px] bg-zinc-700"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 pl-6 flex flex-col justify-center">
            <div className="text-xs font-medium text-zinc-500 mb-3 tracking-wide">
              <span className="text-zinc-300">KISS 98.8 FM</span> CHANNEL
            </div>
            
            <div className="bg-[#1a1a1a] rounded-2xl p-6 flex items-center justify-center mb-8 shadow-inner border border-black/40">
              <span className="text-6xl font-light tracking-tighter">
                <span className="text-zinc-600">0</span>98.8
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
