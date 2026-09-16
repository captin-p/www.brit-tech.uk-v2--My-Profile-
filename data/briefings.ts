export type BriefingCategory = "Cybersecurity" | "Artificial Intelligence" | "IT Infrastructure";

export type BriefingStory = {
  headline: string;
  category: BriefingCategory;
  summary: string;
  whyItMatters: string;
  image: string;
  imageAlt: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type TechBriefing = {
  date: string;
  title: string;
  description: string;
  takeaway: string;
  stories: BriefingStory[];
};

export const briefings: TechBriefing[] = [
  {
    date: "2026-09-16",
    title: "Daily Tech Briefing — 16 September 2026",
    description:
      "Five important developments in cybersecurity, artificial intelligence and IT infrastructure, selected for network engineers, systems administrators and SaaS builders.",
    takeaway:
      "Design for faster automated attacks and rarer but severe infrastructure failures: constrain agent permissions, keep evidence outside the system being protected, and test recovery in a genuinely separate region.",
    stories: [
      {
        headline: "Spain receives its first reported AI-agent data breach notification",
        category: "Cybersecurity",
        summary:
          "Spain's data protection authority says an organisation reported a breach allegedly executed by an AI agent using a well-known language model. According to the notification, the agent logged in, searched for application weaknesses, exploited one, changed personal data and viewed invoices with limited human intervention. The regulator is still reviewing the case and has not identified the organisation or model.",
        whyItMatters:
          "This turns agent security from a future concern into an operational design problem. TouteGestion and similar SaaS products should give automated tools narrowly scoped credentials, enforce action-level authorisation and rate limits, and keep tamper-resistant audit logs so an agent cannot quietly move from discovery to data modification.",
        image: "/images/briefings/2026-09-16/ai-agent-breach.svg",
        imageAlt: "Illustration of an AI agent passing through a security boundary toward protected records.",
        sourceLabel: "Spanish Data Protection Agency (AEPD)",
        sourceUrl:
          "https://www.aepd.es/prensa-y-comunicacion/blog/primera-notiviacion-brecha-datos-personales-causada-por-ataque-ejecutado-mediante-agente-ia",
      },
      {
        headline: "AWS says Bahrain and one UAE cloud zone remain inaccessible after war damage",
        category: "IT Infrastructure",
        summary:
          "AWS says damage in Bahrain crossed multiple availability zones and exceeded what its regional and multi-AZ services were designed to withstand. It also cannot restore resources and data held only in the UAE's mec1-az2 zone. Most customers had already re-established operations elsewhere, but AWS says it exhausted restoration options for some resources that were not migrated.",
        whyItMatters:
          "Multi-AZ is not the same as multi-region resilience. For important SaaS data, maintain tested backups outside the primary region, document DNS and credential dependencies, and rehearse restoration rather than assuming a provider can always recover a damaged zone.",
        image: "/images/briefings/2026-09-16/aws-regional-resilience.svg",
        imageAlt: "Illustration of separated cloud regions with one damaged zone and traffic failing over to another region.",
        sourceLabel: "Reuters, 15 September 2026",
        sourceUrl:
          "https://www.reuters.com/world/middle-east/amazons-aws-is-unable-restore-access-bahrain-one-uae-cloud-data-zone-after-war-2026-09-15/",
      },
      {
        headline: "Anthropic signs for a planned 2.16-gigawatt Australian inference campus",
        category: "Artificial Intelligence",
        summary:
          "Anthropic has reportedly signed its first Australian data-centre lease, covering a planned 2.16-gigawatt campus about 250 km from Brisbane. The project is expected to begin coming online in 2027, would handle inference rather than model training, and plans renewable power purchases plus closed-loop air cooling. The agreement remains subject to foreign-investment approval.",
        whyItMatters:
          "Inference is becoming infrastructure at utility scale. SaaS builders should expect model availability, latency, data residency and pricing to vary by region, so AI integrations need provider abstraction, usage budgets and a non-AI fallback for essential workflows.",
        image: "/images/briefings/2026-09-16/australia-inference-campus.svg",
        imageAlt: "Illustration of a large Australian AI inference campus connected to renewable power.",
        sourceLabel: "Reuters, 16 September 2026",
        sourceUrl:
          "https://www.reuters.com/world/asia-pacific/anthropic-signs-first-australia-data-centre-agreement-2026-09-16/",
      },
      {
        headline: "Indian police uncover 513,847 Gmail accounts used in an abuse network",
        category: "Cybersecurity",
        summary:
          "Police in Gujarat say they dismantled a network managing 513,847 Gmail accounts and credentials that had operated since 2022. The investigation followed hoax bomb-threat emails and found that the fraudulent accounts used two-factor authentication; police now plan to question Google about how safeguards were bypassed.",
        whyItMatters:
          "Two-factor authentication protects an account after creation; it does not prove that the account or registration is legitimate. SaaS platforms need signup velocity controls, device and network risk signals, progressive privileges, anomaly detection and rapid bulk-revocation tools in addition to MFA.",
        image: "/images/briefings/2026-09-16/account-abuse-network.svg",
        imageAlt: "Illustration of many automated email accounts converging on a security monitoring gateway.",
        sourceLabel: "Reuters, 15 September 2026",
        sourceUrl:
          "https://www.reuters.com/world/indian-police-query-google-over-500000-fake-gmail-ids-linked-bomb-hoax-2026-09-15/",
      },
      {
        headline: "AI infrastructure competition shifts toward the network between accelerators",
        category: "IT Infrastructure",
        summary:
          "Intel veterans behind Delos Data raised $100 million to develop networking chips and software for increasingly mixed AI clusters. The practical issue is bigger than one startup: as data centres combine different accelerators for agentic inference, expensive compute can sit idle when the interconnect cannot move data quickly enough.",
        whyItMatters:
          "This is where your network-infrastructure background becomes directly relevant to AI. Cluster performance depends on fabric bandwidth, congestion control, topology, telemetry and failure isolation—not GPUs alone. AI infrastructure teams increasingly need engineers who understand both systems and networks.",
        image: "/images/briefings/2026-09-16/ai-network-fabric.svg",
        imageAlt: "Illustration of different AI accelerators linked through a high-speed data-centre network fabric.",
        sourceLabel: "Reuters, 15 September 2026",
        sourceUrl:
          "https://www.reuters.com/business/delos-data-chip-startup-founded-by-intel-veterans-raises-100-million-ai-networks-2026-09-15/",
      },
    ],
  },
];

export function getBriefing(date: string) {
  return briefings.find((briefing) => briefing.date === date);
}
