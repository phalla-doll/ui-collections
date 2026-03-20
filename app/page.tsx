import { RadioTuner } from "@/components/radio-tuner";
import { AddToFolder } from "@/components/add-to-folder";
import { SoundSettings } from "@/components/sound-settings";
import { DeviceStorage } from "@/components/device-storage";
import { TeamInvite } from "@/components/team-invite";
import { Battery } from "@/components/battery";
import { FaceId } from "@/components/face-id";
import { TrainingLoad } from "@/components/training-load";
import { EvCharging } from "@/components/ev-charging";
import { SmartLight } from "@/components/smart-light";
import { ClimateControl } from "@/components/climate-control";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto justify-items-center items-start">
        <AddToFolder />
        <TeamInvite />
        <SoundSettings />
        
        <EvCharging />
        <Battery />
        <DeviceStorage />
        
        <SmartLight />
        <FaceId />
        <ClimateControl />
        
        <RadioTuner />
        <TrainingLoad />
      </div>
    </main>
  );
}
