export function DeviceStorage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] p-6 w-[320px] text-white shadow-2xl border border-white/5">
        <h2 className="text-xs font-bold tracking-wider text-zinc-500 mb-6">DEVICE STORAGE</h2>
        
        <div className="flex h-10 rounded-xl overflow-hidden mb-8 gap-1 bg-transparent">
          <div className="bg-[#4a90e2] w-[40%] rounded-l-xl"></div>
          <div className="bg-[#0d9488] w-[15%]"></div>
          <div className="bg-[#4ade80] w-[15%]"></div>
          <div className="bg-[#3f3f46] w-[30%] rounded-r-xl"></div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4a90e2]"></div>
            <span className="text-sm font-medium text-zinc-200">Apps</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]"></div>
            <span className="text-sm font-medium text-zinc-200">Photos</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0d9488]"></div>
            <span className="text-sm font-medium text-zinc-200">Media</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]"></div>
            <span className="text-sm font-medium text-zinc-400">System</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wider text-[#4a90e2] mb-1">AVAILABLE</div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-light text-zinc-100">113.95</span>
            <span className="text-sm font-medium text-zinc-500">GB 45%</span>
          </div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Device storage</span>
    </div>
  );
}
