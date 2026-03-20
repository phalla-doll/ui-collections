import { Search, Folder, X } from "lucide-react";

export function AddToFolder() {
  const folders = [
    { name: "Design System", count: 31 },
    { name: "Inspiration", count: 18 },
    { name: "Components", count: 24 },
    { name: "Layouts", count: 12 },
    { name: "Archived", count: 7 },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1c1c1e] rounded-[32px] p-6 w-[380px] text-white shadow-2xl border border-white/5">
        <div className="flex justify-between items-start mb-1">
          <h2 className="text-lg font-semibold text-zinc-100">Add lineups to selected folders</h2>
          <button className="text-zinc-500 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
        </div>
        <p className="text-sm text-zinc-500 mb-6">2 Lineups selected</p>

        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#2c2c2e] text-sm rounded-2xl py-3.5 pl-11 pr-4 outline-none placeholder:text-zinc-500 text-zinc-200 border border-transparent focus:border-zinc-700 transition-colors"
          />
        </div>

        <div className="border border-dashed border-zinc-700 rounded-2xl p-1.5 flex items-center mb-6">
          <div className="flex items-center gap-3 px-3 flex-1 text-zinc-400">
            <Folder className="w-5 h-5" />
            <span className="text-sm">Create new folder</span>
          </div>
          <button className="bg-[#2c2c2e] hover:bg-[#3c3c3e] text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors">
            Create
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {folders.map((folder, i) => (
            <div key={i} className="flex items-center gap-4 p-2 rounded-2xl hover:bg-white/5 transition-colors group">
              <Folder className="w-5 h-5 text-zinc-400" />
              <span className="text-sm font-medium flex-1 text-zinc-200">{folder.name}</span>
              <span className="text-xs text-zinc-500">{folder.count} Lineups</span>
              <button className="text-[#4a90e2] border border-[#4a90e2]/30 rounded-xl px-4 py-1.5 text-xs font-semibold hover:bg-[#4a90e2]/10 transition-colors">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
      <span className="text-xs text-zinc-500 font-medium">Add to folder</span>
    </div>
  );
}
