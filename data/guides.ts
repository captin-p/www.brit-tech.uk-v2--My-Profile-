export type GuideCategory = "diy" | "fix" | "buy" | "explained" | "myth";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  difficulty: "Beginner" | "Intermediate";
  minutes: number;
  published: string;
  tags: string[];
  videoSearch?: string;
  sections: { heading: string; body: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "wifi-connected-no-internet",
    title: "Wi-Fi Connected but No Internet? Diagnose It Step by Step",
    description: "A practical troubleshooting path that helps you find out whether the problem is your device, Wi-Fi, router, DNS or internet connection.",
    category: "fix", difficulty: "Beginner", minutes: 12, published: "2026-09-12",
    tags: ["Wi-Fi", "Internet", "Windows", "Troubleshooting"], videoSearch: "wifi connected no internet troubleshooting windows",
    sections: [
      { heading: "Before you start", body: ["Do not factory-reset your router yet. A reset removes settings and is very different from a restart.", "Check whether another phone or computer on the same Wi-Fi can access the internet. This immediately tells you whether to focus on one device or the wider network."] },
      { heading: "1. Check another device", body: ["If other devices work, concentrate on the affected device. If nothing works, check the router, internet connection and ISP status first."] },
      { heading: "2. Reconnect to Wi-Fi", body: ["Turn Wi-Fi off and on, reconnect to the correct network and confirm that airplane mode is disabled. If necessary, forget the network and reconnect using the correct password."] },
      { heading: "3. Check your IP address", body: ["On Windows, open Command Prompt and run ipconfig. A 169.254.x.x address often means the computer did not receive a usable address from DHCP. A normal private address such as 192.168.x.x or 10.x.x.x means you can continue testing."] },
      { heading: "4. Test the path", body: ["First test your default gateway. Then test an external IP address. If external IP connectivity works but website names do not, investigate DNS rather than repeatedly restarting the router."] },
      { heading: "5. When to get help", body: ["If several devices fail, router status lights indicate a WAN problem, physical cabling is damaged, or the fault returns frequently after basic troubleshooting, contact your ISP or an IT professional with the observations you collected."] }
    ]
  },
  {
    slug: "setup-home-wifi-router",
    title: "How to Set Up a New Home Wi-Fi Router Yourself",
    description: "From cabling and first login to secure Wi-Fi names, passwords, placement and final testing.",
    category: "diy", difficulty: "Beginner", minutes: 20, published: "2026-09-12",
    tags: ["Wi-Fi", "Router", "Installation"], videoSearch: "home wifi router setup beginner",
    sections: [
      { heading: "What you need", body: ["Your router, its power adapter, an Ethernet cable, your ISP modem/ONT if separate, and a phone or computer."] },
      { heading: "1. Connect the internet side", body: ["Connect the modem or ONT Ethernet output to the router's WAN/Internet port. Do not confuse a LAN port with the WAN port."] },
      { heading: "2. Power up and sign in", body: ["Power on the equipment and use the manufacturer's documented app or local setup address. Change the administrator password if the router asks you to create one."] },
      { heading: "3. Configure Wi-Fi", body: ["Choose a recognizable network name and a strong unique Wi-Fi password. Use WPA2 or WPA3 where supported and avoid obsolete security modes."] },
      { heading: "4. Place and test", body: ["Place the router in an open, reasonably central position rather than hidden behind furniture. Test several rooms before deciding that you need an extender or mesh system."] }
    ]
  },
  {
    slug: "wifi-extender-vs-mesh-vs-access-point",
    title: "Wi-Fi Extender vs Mesh vs Access Point: What Do You Actually Need?",
    description: "Understand the problem before buying the solution. Choose based on coverage, Ethernet availability and the size of your space.",
    category: "buy", difficulty: "Beginner", minutes: 10, published: "2026-09-12",
    tags: ["Wi-Fi", "Mesh", "Access Point", "Buying Guide"], videoSearch: "wifi extender vs mesh vs access point explained",
    sections: [
      { heading: "Start with the problem", body: ["Do not buy a Wi-Fi product just because one room has poor service. First establish whether you have a coverage problem, an internet-speed problem or interference/congestion."] },
      { heading: "Access point", body: ["If Ethernet is already available near the weak area, a wired access point is often the cleanest way to create strong Wi-Fi there."] },
      { heading: "Mesh", body: ["Mesh can be useful when you need coordinated coverage across several areas and running Ethernet is difficult. Wired backhaul, when available, can improve the design."] },
      { heading: "Extender", body: ["An extender can solve a modest coverage gap, but placement matters: it needs a usable connection to the existing Wi-Fi before it can repeat it effectively."] }
    ]
  },
  {
    slug: "router-modem-switch-access-point",
    title: "Router vs Modem vs Switch vs Access Point — Explained Simply",
    description: "Four devices people often confuse, explained by the job each one performs on a network.",
    category: "explained", difficulty: "Beginner", minutes: 7, published: "2026-09-12",
    tags: ["Networking", "Router", "Switch", "Access Point"], videoSearch: "router modem switch access point explained",
    sections: [
      { heading: "The simple picture", body: ["A modem or ONT connects your premises to the provider service. A router moves traffic between networks and usually provides key home-network functions. A switch connects wired devices on a LAN. An access point provides wireless access to that LAN."] },
      { heading: "Why it looks confusing", body: ["Many home routers combine routing, Ethernet switching and Wi-Fi access-point functions in one box, so the physical device can perform several roles."] }
    ]
  },
  {
    slug: "full-wifi-bars-fast-internet-myth",
    title: "Myth: Full Wi-Fi Bars Mean Fast Internet",
    description: "Strong Wi-Fi signal and fast internet are not the same measurement. Here is what those bars actually tell you.",
    category: "myth", difficulty: "Beginner", minutes: 5, published: "2026-09-12",
    tags: ["Wi-Fi", "Myth Buster", "Internet Speed"], videoSearch: "wifi signal strength vs internet speed explained",
    sections: [
      { heading: "Verdict: False", body: ["Wi-Fi bars mainly describe the wireless connection between your device and the nearby Wi-Fi equipment. They do not guarantee that the router itself has a fast path to the internet."] },
      { heading: "A useful test", body: ["Compare performance close to the router and in the problem location, then compare more than one device. This helps separate coverage issues from ISP or device-specific problems."] }
    ]
  },
  {
    slug: "printer-offline-but-switched-on",
    title: "Printer Offline but Switched On? Fix It Step by Step",
    description: "A clear way to separate a printer power problem from a Wi-Fi, IP address, queue or Windows print-service problem.",
    category: "fix", difficulty: "Beginner", minutes: 14, published: "2026-09-12",
    tags: ["Printer", "Windows", "Wi-Fi", "Troubleshooting"], videoSearch: "printer offline windows wifi troubleshooting",
    sections: [
      { heading: "1. Confirm the printer is really connected", body: ["Check the printer display or network report for its Wi-Fi or Ethernet status. Being powered on does not automatically mean the printer is reachable over the network."] },
      { heading: "2. Check the same network", body: ["Make sure the computer and printer are on the intended network. Guest Wi-Fi networks can isolate devices and prevent printing even when both devices have internet access."] },
      { heading: "3. Check the printer address", body: ["Find the printer's current IP address from its screen, app or network report. If Windows still points to an old address, the printer can appear offline even though it is connected."] },
      { heading: "4. Check the queue and print service", body: ["Clear stuck jobs, make sure 'Use Printer Offline' is not selected, and restart the Windows Print Spooler if the queue is frozen."] },
      { heading: "5. Re-add only when necessary", body: ["If the network path is healthy but Windows still cannot communicate with the printer, remove and add the printer again using the manufacturer's current setup method or its known IP address."] }
    ]
  },
  {
    slug: "wifi-works-phone-not-laptop",
    title: "Wi-Fi Works on Your Phone but Not Your Laptop",
    description: "Use the working phone as evidence: the internet may be fine, so focus on the laptop's adapter, address, DNS and local settings.",
    category: "fix", difficulty: "Beginner", minutes: 11, published: "2026-09-12",
    tags: ["Wi-Fi", "Laptop", "Windows", "Troubleshooting"], videoSearch: "wifi works phone not laptop windows fix",
    sections: [
      { heading: "Start with what you already know", body: ["If the phone works on the same Wi-Fi at the same location, the router and internet service are probably not completely down. That makes the laptop the best place to start."] },
      { heading: "Forget and reconnect", body: ["Forget the Wi-Fi network on the laptop, reconnect and enter the password again. This can clear a bad saved profile without changing the router for everyone else."] },
      { heading: "Check adapter and IP details", body: ["Verify the wireless adapter is enabled and inspect ipconfig. A self-assigned 169.254.x.x address points toward DHCP or local connectivity trouble."] },
      { heading: "Check DNS and proxy settings", body: ["If the laptop can reach external IP addresses but websites do not open, check DNS. Also verify that an old VPN or manual proxy is not intercepting traffic."] },
      { heading: "Driver and hardware checks", body: ["If networks disappear, connections drop repeatedly or the adapter behaves differently after updates, check the laptop manufacturer's current wireless driver and test close to the router before assuming the router is faulty."] }
    ]
  },
  {
    slug: "8gb-vs-16gb-ram",
    title: "8GB vs 16GB RAM: What Do You Actually Need?",
    description: "Choose memory based on what you do, not on the biggest number in the shop.",
    category: "buy", difficulty: "Beginner", minutes: 9, published: "2026-09-12",
    tags: ["RAM", "Laptop", "Buying Guide", "Upgrade"], videoSearch: "8gb vs 16gb ram laptop explained",
    sections: [
      { heading: "What RAM changes", body: ["RAM is working memory used by active applications and data. More RAM mainly helps when your workload is pushing beyond the memory you already have; it is not a universal speed upgrade."] },
      { heading: "When 8GB can still be enough", body: ["Light browsing, basic documents and simple everyday tasks can fit within 8GB, especially when you keep fewer heavy applications open at once."] },
      { heading: "Why 16GB is the safer general choice", body: ["For heavier multitasking, many browser tabs, programming tools, creative work or a laptop you plan to keep for several years, 16GB generally gives more headroom."] },
      { heading: "Before paying for more", body: ["Check whether the laptop's memory is upgradeable or soldered. Also consider the CPU, storage and GPU because slow performance is not always a RAM problem."] }
    ]
  },
  {
    slug: "change-wifi-name-password",
    title: "How to Change Your Wi-Fi Name and Password Safely",
    description: "A beginner-friendly guide to changing your SSID and Wi-Fi password without accidentally locking yourself out of the router.",
    category: "diy", difficulty: "Beginner", minutes: 10, published: "2026-09-12",
    tags: ["Wi-Fi", "Router", "Security", "DIY"], videoSearch: "change wifi name password router beginner",
    sections: [
      { heading: "Before changing anything", body: ["Make sure you know how to access the router's official app or administration page and, if possible, connect one computer by Ethernet. Do not factory-reset the router simply because you forgot the Wi-Fi password."] },
      { heading: "Change the network name", body: ["Open the wireless settings and edit the SSID. Choose a name that identifies your network without exposing unnecessary personal information such as a full address."] },
      { heading: "Choose a strong Wi-Fi password", body: ["Use a long, unique password and WPA2 or WPA3 security where available. Avoid WEP and avoid reusing an important email or banking password."] },
      { heading: "Reconnect your devices", body: ["After saving the change, phones, laptops, TVs and smart devices will usually need to reconnect using the new network name or password."] },
      { heading: "Do not confuse Wi-Fi and admin passwords", body: ["The Wi-Fi password lets devices join the wireless network. The router administrator password controls the router settings. They should not be treated as the same credential."] }
    ]
  },
  {
    slug: "restart-vs-reset-router",
    title: "Myth Buster: Restarting and Resetting a Router Are the Same Thing",
    description: "They are not. One reboots the device; the other can erase your configuration.",
    category: "myth", difficulty: "Beginner", minutes: 5, published: "2026-09-12",
    tags: ["Router", "Myth Buster", "Wi-Fi", "Troubleshooting"], videoSearch: "router restart vs factory reset explained",
    sections: [
      { heading: "Verdict: False", body: ["Restarting or rebooting turns the router off and back on while normally keeping its configuration. A factory reset returns it toward its original settings and can remove Wi-Fi names, passwords and ISP-specific configuration."] },
      { heading: "When to restart", body: ["A restart is a reasonable basic troubleshooting step when a router has become unresponsive or a temporary fault is suspected."] },
      { heading: "When not to reset", body: ["Do not press and hold the reset button unless you understand what will be erased and know how the router will be configured again afterward."] }
    ]
  }
];

export function getGuide(slug: string) { return guides.find((guide) => guide.slug === slug); }
