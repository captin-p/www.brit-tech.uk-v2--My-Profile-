import type { Guide } from "@/data/guides";

export const guideAdditions: Guide[] = [
  {
    slug: "microphone-not-working-windows-11",
    title: "Microphone Not Working in Windows 11? Fix It Before Your Next Call",
    description: "A safe, beginner-friendly path for a microphone that is muted, missing, using the wrong input, blocked by privacy settings or failing only in Teams, Zoom or another app.",
    category: "fix",
    difficulty: "Beginner",
    minutes: 12,
    published: "2026-09-18",
    tags: ["Microphone", "Windows", "Teams", "Zoom", "Audio", "Troubleshooting"],
    videoSearch: "Windows 11 microphone not working Teams Zoom microphone permissions input device fix",
    sections: [
      { heading: "Before you change drivers", body: ["Start with the microphone itself. If your headset or USB microphone has a physical mute switch, mute button or gain control, check it first. Then unplug and reconnect an external microphone and, if practical, test it on another device.", "Do not reinstall Windows, change BIOS settings or download random driver packages as a first response. Most microphone faults can be narrowed down with safer checks first."] },
      { heading: "1. Make sure Windows is listening to the right microphone", body: ["Open Settings, then System, then Sound. Under Input, select the microphone you actually want to use and speak while watching the input level. Laptops and headsets can expose several microphones, so a working device may simply not be the selected input.", "If Windows shows activity here but your meeting app hears nothing, the problem is more likely inside the app or its permissions than the microphone hardware."] },
      { heading: "2. Check that the microphone is not muted", body: ["Check the headset cable, keyboard microphone key, device mute button and any gain knob. Also inspect the microphone level in Windows. A microphone can be detected correctly while its input is muted or its gain is effectively turned down."] },
      { heading: "3. Check Windows microphone privacy permissions", body: ["In Windows 11, open Settings, Privacy & security, then Microphone. Make sure Microphone access is enabled and that apps are allowed to access the microphone. For desktop programs such as meeting applications, also check the setting that allows desktop apps to use the microphone.", "If these permissions are disabled, repeatedly reinstalling audio drivers will not solve the app-access problem."] },
      { heading: "4. Check Teams, Zoom or the app itself", body: ["Open the meeting application's audio or device settings and select the same microphone you tested in Windows. Make a test call or recording where the app provides that feature. If the microphone works in Windows Voice Recorder but not in one meeting app, focus on that application's selected device and permissions."] },
      { heading: "5. If Windows says no input device is found", body: ["Open Device Manager and inspect Audio inputs and outputs, Sound, video and game controllers, and any devices showing warning symbols. Restart the computer before making deeper changes. If the microphone disappeared after an update, use the computer or audio-device manufacturer's support page for the correct model-specific driver rather than an unofficial driver-download site."] },
      { heading: "6. Separate software from hardware", body: ["Try a known-good external microphone if available, or test the affected microphone on another computer. If several different microphones fail only on one Windows PC, that points more strongly toward that PC's configuration, driver or audio subsystem. If one microphone fails on multiple devices, hardware becomes more likely."] },
      { heading: "When to stop and get help", body: ["Stop before changing BIOS settings, deleting unknown devices, installing unofficial drivers or reinstalling Windows just to fix a microphone. If the device is absent from Windows after model-specific driver checks, the audio jack is physically damaged, liquid damage is involved, or the microphone is required for urgent work, use the manufacturer's support channel or an IT professional."] }
    ]
  }
];
