import { Check } from "lucide-react";

export function TeamInvite() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] w-[360px] text-white shadow-2xl border border-white/5 overflow-hidden">
        <div className="p-2">
          <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-2xl cursor-pointer transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#4a6b9c] flex items-center justify-center text-sm font-medium relative">
                CL
                <div className="absolute -bottom-1 -right-1 bg-[#4a90e2] rounded-full p-0.5 border-2 border-[#1c1c1e]">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-100">Cristofer Levin</div>
                <div className="text-xs text-[#4a90e2] mt-0.5">Administrator <span className="text-zinc-500 ml-1">cr.levin@icloud.com</span></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-2xl cursor-pointer transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#8b5a7b] flex items-center justify-center text-sm font-medium">KC</div>
              <div>
                <div className="text-sm font-medium text-zinc-100">Kierra Calzoni</div>
                <div className="text-xs text-[#a67c96] mt-0.5">Project manager <span className="text-zinc-500 ml-1">calzoni@acme.com</span></div>
              </div>
            </div>
            <Check className="w-4 h-4 text-zinc-500 mr-2" />
          </div>
        </div>

        <div className="bg-[#2c2c2e]/40 px-5 py-2.5 flex items-center gap-3 border-y border-white/5">
          <div className="w-4 h-4 rounded bg-[#f5a623]"></div>
          <span className="text-xs font-medium text-zinc-300">Drata.io</span>
        </div>

        <div className="p-2">
          <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-2xl cursor-pointer transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#6b5a8b] flex items-center justify-center text-sm font-medium">JC</div>
              <div>
                <div className="text-sm font-medium text-zinc-100">James Curtis</div>
                <div className="text-xs text-zinc-500 mt-0.5">james.dev@drata.io</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-2xl cursor-pointer transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#5a8b7b] flex items-center justify-center text-sm font-medium">AC</div>
              <div>
                <div className="text-sm font-medium text-zinc-100">Ann Carder</div>
                <div className="text-xs text-zinc-500 mt-0.5">ann.carder@drata.io</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2c2c2e]/40 px-5 py-2.5 flex items-center gap-3 border-t border-white/5">
          <div className="w-4 h-4 rounded-t bg-[#e24a4a]"></div>
          <span className="text-xs font-medium text-zinc-300">Kludd</span>
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Team invite</span>
    </div>
  );
}
