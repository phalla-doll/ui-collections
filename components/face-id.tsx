import { ScanFace } from "lucide-react";

export function FaceId() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[28px] p-5 w-[360px] text-white shadow-2xl border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ScanFace className="w-8 h-8 text-zinc-200" strokeWidth={1.5} />
          <div>
            <div className="text-base font-medium text-zinc-100 mb-0.5">Face ID</div>
            <div className="text-xs text-zinc-500">User Face ID Authentication</div>
          </div>
        </div>
        <div className="w-12 h-7 bg-[#4ade80] rounded-full p-1 cursor-pointer flex justify-end transition-colors shadow-[0_0_10px_rgba(74,222,128,0.2)]">
          <div className="w-5 h-5 bg-white rounded-full shadow-sm"></div>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Face ID</span>
    </div>
  );
}
