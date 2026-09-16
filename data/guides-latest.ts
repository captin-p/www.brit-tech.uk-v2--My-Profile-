import type { Guide } from "@/data/guides";

export const latestGuides: Guide[] = [{
  slug: "bluetooth-connected-no-sound-windows",
  title: "Bluetooth Connected but No Sound in Windows? Fix It Step by Step",
  description: "Your headphones or speaker says Connected, but Windows is silent. Use this safe troubleshooting order before changing advanced settings.",
  category: "fix", difficulty: "Beginner", minutes: 12, published: "2026-09-16",
  tags: ["Bluetooth", "Windows", "Audio", "Headphones", "Troubleshooting"],
  videoSearch: "Bluetooth connected but no sound Windows 11 headphones troubleshooting",
  sections: [
    { heading: "Start with the simplest test", body: ["Play audio you know works and raise the volume on both Windows and the Bluetooth device. If possible, test the headphones or speaker with another device too. This helps separate a Windows problem from a problem with the audio device.", "Do not start with advanced changes. A device can be correctly paired while Windows is simply sending sound to the wrong output."] },
    { heading: "1. Check the Windows sound output", body: ["Select the sound icon on the taskbar and check the current output. Then open Settings, System, Sound and confirm that your Bluetooth headphones or speaker is selected under Output. Microsoft lists this among the first checks for a Bluetooth device that connects but produces no sound."] },
    { heading: "2. Restart the Bluetooth connection", body: ["Open Settings, Bluetooth & devices, turn Bluetooth off, wait about 10 seconds and turn it on again. Reconnect the audio device and test before changing anything else."] },
    { heading: "3. Remove and pair again", body: ["If Windows still shows the device but audio does not work, remove it from Bluetooth settings and pair it again. Put the headphones or speaker into its proper pairing mode and make sure another nearby phone is not taking the connection."] },
    { heading: "4. Check the audio format", body: ["If the device connects but audio remains silent or poor, open its advanced sound properties. Microsoft's current guidance suggests testing 2-channel, 16-bit, 48000 Hz where that option is available. Note the original value before changing it."] },
    { heading: "5. Use Windows troubleshooting", body: ["On Windows 11, Microsoft recommends the automated Bluetooth troubleshooter in the Get Help app. Let it complete, then test the audio again so you know whether that step changed the result."] },
    { heading: "6. Check supported updates", body: ["If the problem began after a Windows change, check Windows Update and your computer manufacturer's support information for current Bluetooth support. Avoid unofficial download sites and test after each supported change rather than changing several things at once."] },
    { heading: "When to stop and get help", body: ["Stop if Windows repeatedly reports a hardware error, Bluetooth disappears completely, the computer has physical or liquid damage, or the same audio device fails on multiple known-good systems. Avoid destructive system changes when the evidence points to hardware or compatibility trouble."] }
  ]
}];
