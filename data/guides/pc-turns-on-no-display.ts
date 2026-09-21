import type { Guide } from "@/data/guides";

export const pcTurnsOnNoDisplayGuide: Guide = {
  slug: "pc-turns-on-no-display",
  title: "PC Turns On but No Display? Check These Things Before Replacing Parts",
  description: "Fans and lights can turn on even when a PC has not completed startup. Use this safe troubleshooting order to separate a monitor or cable problem from a graphics, memory or deeper hardware fault.",
  category: "fix",
  difficulty: "Beginner",
  minutes: 15,
  published: "2026-09-21",
  tags: ["PC", "Windows", "Monitor", "Graphics", "RAM", "Troubleshooting"],
  videoSearch: "PC turns on no display no signal troubleshooting monitor RAM GPU beginner",
  sections: [
    {
      heading: "Before you open the computer",
      body: [
        "A spinning fan or glowing RGB light only proves that some power is reaching the computer. It does not prove that the PC has completed its startup checks or that Windows has loaded.",
        "Start outside the case. If you smell burning, hear electrical crackling, see liquid damage, or the power supply repeatedly clicks or shuts down, switch the computer off, unplug it and get qualified help rather than repeatedly powering it on."
      ]
    },
    {
      heading: "1. Check the monitor and its input",
      body: [
        "Confirm that the monitor is powered on and set to the input you are actually using, such as HDMI 1 or DisplayPort. A monitor can be working normally while showing 'No signal' simply because it is listening to the wrong input.",
        "Disconnect and reconnect the display cable at both ends. If available, test a known-good cable or another monitor or TV. This is safer and faster than changing internal PC parts first."
      ]
    },
    {
      heading: "2. Make sure the cable is connected to the correct video output",
      body: [
        "On a desktop with a dedicated graphics card, the monitor will normally connect to a port on that graphics card rather than a motherboard video port. A motherboard HDMI or DisplayPort socket does not guarantee that the processor has integrated graphics.",
        "If your processor does support integrated graphics, testing the motherboard output can be useful for isolating a dedicated-GPU problem, but check the PC or processor documentation before assuming that output should work."
      ]
    },
    {
      heading: "3. Disconnect unnecessary accessories",
      body: [
        "Shut the PC down and disconnect unnecessary USB drives, hubs, external disks and other accessories, leaving only the display, keyboard and essential power connections. Then try one clean startup.",
        "If the display returns, reconnect accessories one at a time. This can identify a device or dock that is interfering with startup without changing Windows or firmware settings."
      ]
    },
    {
      heading: "4. Decide whether Windows is running behind the blank screen",
      body: [
        "Listen for normal Windows startup sounds and check whether keyboard indicators respond. If the machine appears to have reached Windows but the screen is blank, the problem can be different from a PC that never completes its hardware startup checks.",
        "For a Windows blank screen after login or an update, Microsoft recommends checking display connections and can also use the Windows graphics-driver reset shortcut Windows key + Ctrl + Shift + B. If you can see a cursor or reach recovery options, follow Windows-specific blank-screen troubleshooting rather than immediately opening the PC."
      ]
    },
    {
      heading: "5. If you are comfortable inside a desktop, check memory carefully",
      body: [
        "Only continue with internal hardware if you are comfortable doing so. Shut the PC down, switch off and unplug the power supply, and follow the manufacturer's service instructions. Avoid touching contacts and never remove or install RAM while the system has power.",
        "A poorly seated memory module can prevent a PC from completing startup. If the problem began after moving the computer or changing hardware, checking that the RAM is fully seated can be useful. Do not use abrasive cleaning tricks or force a module into a slot."
      ]
    },
    {
      heading: "6. Look for diagnostic clues instead of swapping parts at random",
      body: [
        "Many motherboards provide diagnostic LEDs, beep codes or a small status display for CPU, DRAM, VGA or boot problems. Check the motherboard manual for what your exact indicator means.",
        "If a VGA light remains on, that is more useful evidence than simply buying another graphics card. Likewise, a DRAM indicator gives you a reason to investigate memory installation or compatibility first."
      ]
    },
    {
      heading: "When to stop and get help",
      body: [
        "Stop if troubleshooting would require opening a power supply, working around exposed mains-voltage components, repeatedly forcing connectors, flashing firmware without a confirmed reason, or buying replacement parts just to guess at the fault.",
        "If the monitor and cable work on another device but the PC never reaches its startup screen, or motherboard diagnostics consistently point to CPU, memory, graphics or power hardware, record those symptoms and seek hardware support. That evidence makes professional diagnosis much faster."
      ]
    }
  ]
};
