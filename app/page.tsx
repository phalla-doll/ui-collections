import { RadioTuner } from "@/components/radio-tuner";
import { AddToFolder } from "@/components/add-to-folder";
import { SoundSettings } from "@/components/sound-settings";
import { DeviceStorage } from "@/components/device-storage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-8 flex items-start justify-center gap-8 flex-wrap font-sans">
      <RadioTuner />
      <AddToFolder />
      <SoundSettings />
      <DeviceStorage />
    </main>
  );
}
