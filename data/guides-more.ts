import type { Guide } from "@/data/guides";

export const moreGuides: Guide[] = [
  {
    slug: "slow-wifi-one-device",
    title: "Internet Is Fast Everywhere Except One Device — What to Check",
    description: "Use a simple elimination process to find out whether one slow device has an adapter, driver, signal, DNS, VPN or background-traffic problem.",
    category: "fix", difficulty: "Beginner", minutes: 12, published: "2026-09-12",
    tags: ["Wi-Fi", "Laptop", "Slow Internet", "Troubleshooting"], videoSearch: "slow wifi one device troubleshooting",
    sections: [
      { heading: "Start with comparison", body: ["Test another device in the same room on the same Wi-Fi. If the second device is fast, that strongly suggests the issue is local to the slow device rather than a complete internet outage."] },
      { heading: "Check signal and band", body: ["Move closer to the router and retest. If performance improves sharply, the device may be using a weaker band, have a less capable wireless adapter, or simply be in a poor radio location."] },
      { heading: "Check background activity", body: ["Cloud sync, operating-system updates, game downloads and backup tools can consume bandwidth without being obvious. Pause heavy transfers before comparing speeds."] },
      { heading: "Check VPN, proxy and DNS", body: ["Temporarily disconnect a VPN and verify that no old manual proxy is configured. If raw connectivity is fine but browsing feels delayed, DNS can also be part of the problem."] },
      { heading: "Check the adapter", body: ["Restart the device, review the manufacturer's current Wi-Fi driver, and compare Ethernet if available. If Ethernet is fast while Wi-Fi remains poor, focus on the wireless path rather than the ISP."] }
    ]
  },
  {
    slug: "second-monitor-not-detected",
    title: "Second Monitor Not Detected? Check These Things in Order",
    description: "A practical display troubleshooting sequence covering cables, inputs, ports, display settings, docks and graphics drivers.",
    category: "fix", difficulty: "Beginner", minutes: 10, published: "2026-09-12",
    tags: ["Monitor", "Windows", "HDMI", "USB-C", "Troubleshooting"], videoSearch: "second monitor not detected windows troubleshooting",
    sections: [
      { heading: "1. Confirm the monitor input", body: ["Make sure the monitor is powered on and set to the same input type you are using, such as HDMI, DisplayPort or USB-C."] },
      { heading: "2. Check the cable and port", body: ["Reconnect both ends firmly. If possible, test a known-good cable or another output port. A working-looking cable can still fail or support fewer features than expected."] },
      { heading: "3. Ask Windows to detect it", body: ["Open Display settings and use the detect option. If the screen appears, choose whether you want to duplicate or extend the desktop."] },
      { heading: "4. Consider docks and USB-C limitations", body: ["Not every USB-C port carries video. If you use a dock or hub, confirm that the laptop port and adapter both support video output and the monitor resolution you need."] },
      { heading: "5. Driver and hardware checks", body: ["If the physical path is proven good, check the laptop or graphics manufacturer's current display driver. Test the monitor with another device when possible to isolate the fault."] }
    ]
  },
  {
    slug: "ssd-vs-hdd",
    title: "SSD vs HDD: Which Storage Should You Buy?",
    description: "Understand speed, capacity, durability and price before choosing storage for a laptop, desktop, backup or archive.",
    category: "buy", difficulty: "Beginner", minutes: 8, published: "2026-09-12",
    tags: ["SSD", "HDD", "Storage", "Buying Guide"], videoSearch: "ssd vs hdd explained beginner",
    sections: [
      { heading: "The short answer", body: ["For an operating system and everyday applications, an SSD is usually the better experience because it has much lower access latency and no mechanical seek time."] },
      { heading: "When HDD still makes sense", body: ["Hard drives can still be useful when you need a lot of storage at low cost, especially for backups, archives and media that do not need SSD-like responsiveness."] },
      { heading: "Check the interface", body: ["Before buying, confirm whether your device accepts 2.5-inch SATA, M.2 SATA, M.2 NVMe or another format. M.2 describes a physical form factor and does not automatically mean NVMe."] },
      { heading: "Do not confuse storage with backup", body: ["A larger or faster drive is not a backup by itself. Important files should exist in more than one independent location."] }
    ]
  },
  {
    slug: "2-4ghz-vs-5ghz-wifi",
    title: "2.4 GHz vs 5 GHz Wi-Fi — Which One Should You Use?",
    description: "A simple explanation of range, capacity, interference and why the faster-looking option is not always the best one for every room.",
    category: "explained", difficulty: "Beginner", minutes: 7, published: "2026-09-12",
    tags: ["Wi-Fi", "2.4 GHz", "5 GHz", "Networking"], videoSearch: "2.4ghz vs 5ghz wifi explained",
    sections: [
      { heading: "2.4 GHz", body: ["2.4 GHz generally travels farther and penetrates obstacles better, but it has fewer non-overlapping channels and often faces more interference from nearby networks and other devices."] },
      { heading: "5 GHz", body: ["5 GHz usually offers more channel capacity and can deliver higher throughput at shorter range, but signal strength tends to fall more quickly through walls and distance."] },
      { heading: "Which should you choose?", body: ["Use the band that gives the best real connection where the device is actually used. Close to the router, 5 GHz is often preferable. Farther away or through several obstacles, 2.4 GHz may be more reliable."] },
      { heading: "Do not judge only by the label", body: ["Modern routers may steer devices automatically between bands. The best band depends on the client device, radio environment, distance and network design."] }
    ]
  },
  {
    slug: "wifi-extender-makes-internet-faster-myth",
    title: "Myth: A Wi-Fi Extender Makes Your Internet Faster",
    description: "An extender can improve coverage, but it cannot create more internet bandwidth than your connection and network design can provide.",
    category: "myth", difficulty: "Beginner", minutes: 5, published: "2026-09-12",
    tags: ["Wi-Fi", "Extender", "Myth Buster", "Internet Speed"], videoSearch: "wifi extender speed myth explained",
    sections: [
      { heading: "Verdict: Misleading", body: ["A Wi-Fi extender can improve usability in a weak-signal area by extending coverage. That does not mean it increases the speed supplied by your ISP."] },
      { heading: "Why placement matters", body: ["If you put an extender where the existing Wi-Fi is already extremely weak, it has a poor signal to repeat. Better placement can matter more than buying a more expensive unit."] },
      { heading: "When another design is better", body: ["If Ethernet is available, a wired access point may provide a stronger result. For several coverage zones where cabling is difficult, a well-designed mesh system may be more appropriate."] }
    ]
  }
];
