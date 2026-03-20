export function ClimateControl() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] p-8 w-[360px] h-[320px] text-white shadow-2xl border border-white/5 relative overflow-hidden flex flex-col">
        <h2 className="text-lg font-medium text-zinc-100 mb-4 z-10">Climate Control</h2>
        
        <div className="flex-1 relative flex items-center justify-center mt-8">
          {/* Semi-circle dial */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="climateGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="40%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            {/* Background track (dashed) */}
            <path 
              d="M 30 170 A 80 80 0 1 1 170 170" 
              fill="none" 
              stroke="#2c2c2e" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeDasharray="4 8"
            />
            {/* Active track */}
            <path 
              d="M 30 170 A 80 80 0 0 1 160 50" 
              fill="none" 
              stroke="url(#climateGrad)" 
              strokeWidth="12" 
              strokeLinecap="round" 
            />
            {/* Dots along the track */}
            <circle cx="30" cy="170" r="3" fill="white" />
            <circle cx="170" cy="170" r="3" fill="white" />
            <circle cx="100" cy="10" r="3" fill="white" />
            
            {/* Thumb */}
            <circle cx="160" cy="50" r="12" fill="white" className="shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
            <circle cx="160" cy="50" r="4" fill="#1c1c1e" />
          </svg>
          
          <div className="text-[64px] font-light tracking-tighter mt-12 text-white">
            26<span className="text-4xl align-top font-normal text-zinc-400">°</span>
          </div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Climate Control</span>
    </div>
  );
}
