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
    <main className="min-h-screen bg-[#0a0a0a] p-8 flex items-start justify-center gap-8 flex-wrap font-sans">
      <RadioTuner />
      <AddToFolder />
      <TeamInvite />
      <SoundSettings />
      <DeviceStorage />
      <Battery />
      <FaceId />
      <TrainingLoad />
      <EvCharging />
      <SmartLight />
      <ClimateControl />
    </main>
  );
}
