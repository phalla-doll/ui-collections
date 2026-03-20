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
    <main className="min-h-screen bg-[#0a0a0a] p-8 flex justify-center font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-[1400px] items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-12 items-center">
          <AddToFolder />
          <EvCharging />
          <SmartLight />
          <RadioTuner />
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col gap-12 items-center">
          <TeamInvite />
          <Battery />
          <FaceId />
          <TrainingLoad />
        </div>
        
        {/* Column 3 */}
        <div className="flex flex-col gap-12 items-center">
          <SoundSettings />
          <DeviceStorage />
          <ClimateControl />
        </div>
      </div>
    </main>
  );
}
