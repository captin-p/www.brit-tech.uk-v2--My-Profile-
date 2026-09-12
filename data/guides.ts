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
    category: "fix",
    difficulty: "Beginner",
    minutes: 12,
    published: "2026-09-12",
    tags: ["Wi-Fi", "Internet", "Windows", "Troubleshooting"],
    videoSearch: "wifi connected no internet troubleshooting windows",
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
  }
];

export function getGuide(slug: string) { return guides.find((guide) => guide.slug === slug); }
