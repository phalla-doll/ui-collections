export function TrainingLoad() {
  // Generate histogram data matching the visual curve
  const bars = Array.from({ length: 48 }, (_, i) => {
    const x = i / 48;
    const bell = Math.sin(x * Math.PI);
    return 20 + bell * 60 + Math.random() * 15;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#141414] rounded-[32px] p-6 w-[360px] text-white shadow-2xl border border-white/5">
        <div className="flex justify-between mb-8">
          <div>
            <div className="text-[10px] font-bold tracking-wider text-zinc-500 mb-1">TRIMP EXP</div>
            <div className="text-4xl font-semibold text-[#e25c4a] tracking-tight">507</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold tracking-wider text-zinc-500 mb-1">ATL</div>
            <div className="text-4xl font-semibold text-white tracking-tight">40</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold tracking-wider text-zinc-500 mb-1">CTL</div>
            <div className="text-4xl font-semibold text-white tracking-tight">33</div>
          </div>
        </div>

        <div className="relative h-16 flex items-end gap-[2px] mb-3">
          {bars.map((h, i) => {
            // Gradient from green (130) to pink/red (-30)
            const hue = 130 - (i / 48) * 160;
            const color = `hsl(${hue}, 80%, 55%)`;
            
            return (
              <div 
                key={i} 
                className="flex-1 rounded-[1px] opacity-90"
                style={{ height: `${h}%`, backgroundColor: color }}
              ></div>
            );
          })}
          {/* Marker line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-white left-[75%] shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-t-[6px] border-t-white border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-b-[6px] border-b-white border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></div>
          </div>
        </div>
        
        <div className="flex justify-between text-[10px] font-bold tracking-wider text-zinc-600">
          <span>0</span>
          <span>MAX: 763</span>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Training load</span>
    </div>
  );
}
