import type { Guide } from "@/data/guides";

export const guides20260923: Guide[] = [
  {
    slug: "camera-not-working-windows-11",
    title: "Camera Not Working in Windows 11? Fix It Before Your Next Video Call",
    description: "A safe, beginner-friendly path for a built-in or USB webcam that is missing, blocked, showing a black screen or working in one app but not another.",
    category: "fix",
    difficulty: "Beginner",
    minutes: 12,
    published: "2026-09-23",
    tags: ["Windows", "Camera", "Webcam", "Video Calls", "Privacy", "Troubleshooting"],
    videoSearch: "Windows 11 camera not working webcam privacy settings Device Manager troubleshooting",
    sections: [
      {
        heading: "Before you change drivers",
        body: [
          "Start with the simple checks. If your laptop has a physical camera shutter, privacy slider or camera key, make sure it is open or enabled. For a USB webcam, reconnect it directly to the computer and try another USB port before changing Windows settings.",
          "Do not download random driver packages or registry fixes from third-party websites. First find out whether Windows can see the camera and whether the problem affects every app or only one app."
        ]
      },
      {
        heading: "1. Test the camera in the Windows Camera app",
        body: [
          "Open the Camera app from Start. If you can see yourself there, the camera hardware and basic Windows camera path are working, so focus on the app that is failing, such as Teams, Zoom or your browser.",
          "If the Camera app also fails, continue with the device, privacy and driver checks below."
        ]
      },
      {
        heading: "2. Check camera privacy permissions",
        body: [
          "Open Settings, then Privacy & security, then Camera. Make sure Camera access is enabled and that apps are allowed to access the camera. Desktop applications such as browsers and many video-conferencing programs also depend on the desktop-app camera access setting.",
          "If the camera works in Windows but not in a meeting app, also check that app's own video settings and confirm that the correct camera is selected."
        ]
      },
      {
        heading: "3. Check for another app using the camera",
        body: [
          "Close other meeting, recording, browser and camera applications, then try again. A camera can appear unavailable when another application or process already has control of it. Restarting the PC is a useful clean test if you are unsure what is still running."
        ]
      },
      {
        heading: "4. Check Device Manager",
        body: [
          "Open Device Manager and look under Cameras or Imaging devices. If the camera is disabled, enable it. If it has a warning symbol, note the error before making changes because that information can help identify a driver or hardware problem.",
          "Use Windows Update and the computer or webcam manufacturer's official support page for supported drivers. If the problem started immediately after a driver or Windows update, Windows may also offer a driver rollback option."
        ]
      },
      {
        heading: "5. Separate an app problem from a hardware problem",
        body: [
          "For a USB webcam, test it on another computer if possible. For an integrated laptop camera, compare the Windows Camera app with another trusted application. If one application works and another does not, changing hardware is unlikely to be the right first move.",
          "If Windows cannot detect the camera at all after checking the physical privacy control, Device Manager, supported updates and a restart, use the device manufacturer's diagnostics or support information next."
        ]
      },
      {
        heading: "When to stop and get help",
        body: [
          "Stop before opening a laptop display assembly, disconnecting internal camera cables, flashing firmware or installing unofficial drivers if you are not trained to do so. A camera that disappeared after physical damage, liquid exposure or a display repair may need hardware inspection.",
          "If this is a work or school computer and Camera access is disabled and locked by policy, contact the administrator rather than trying to bypass the restriction."
        ]
      }
    ]
  }
];
