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
    date: "2026-09-17",
    title: "Daily Tech Briefing — 17 September 2026",
    description:
      "Five verified developments in cybersecurity, artificial intelligence and IT infrastructure, selected for network engineers, systems administrators and SaaS builders.",
    takeaway:
      "Patch internet-facing management and backup systems first, then apply the same incident-discipline to AI: inventory autonomous behaviour, define escalation thresholds and keep critical infrastructure dependencies visible.",
    stories: [
      {
        headline: "Critical Check Point flaw can give unauthenticated attackers root access",
        category: "Cybersecurity",
        summary:
          "Check Point disclosed CVE-2026-91843, a critical stack-overflow flaw in the unauthenticated login process of Security Management and Log Servers. A remote attacker may be able to execute arbitrary code with root privileges. Check Point identifies affected R82.10 systems at Jumbo Hotfix Take 44 or earlier and R82 systems at Take 126 or earlier.",
        whyItMatters:
          "Management and logging servers are high-value control-plane assets. If you administer Check Point infrastructure, confirm the installed take, apply the vendor hotfix through a controlled emergency change, restrict management exposure and review logs from an independent system for signs of unusual login traffic.",
        image: "/images/briefings/2026-09-17/check-point-root-rce.svg",
        imageAlt: "Illustration of an internet request reaching a protected security management server with a root-access warning.",
        sourceLabel: "CVE record from Check Point's CNA",
        sourceUrl: "https://www.cve.org/CVERecord?id=CVE-2026-91843",
      },
      {
        headline: "Acronis warns that attackers exploited a Linux backup-plugin flaw",
        category: "Cybersecurity",
        summary:
          "Acronis says CVE-2026-87886, a high-severity local privilege-escalation vulnerability caused by insecure file permissions, was used in limited targeted attacks. It affects the Acronis Backup plugin for cPanel and WHM before build 1.9.3.1021 and the Plesk extension before build 1.8.11.638.",
        whyItMatters:
          "Backup software often runs with powerful permissions and can become a route from one compromised hosting account to the server. Patch affected plugins immediately, inspect local accounts and scheduled tasks, and verify that recovery copies are immutable and isolated from the host being protected.",
        image: "/images/briefings/2026-09-17/backup-plugin-escalation.svg",
        imageAlt: "Illustration of a low-privilege Linux process escalating toward a protected backup vault.",
        sourceLabel: "Acronis advisory SEC-10986",
        sourceUrl: "https://security-advisory.acronis.com/advisories/SEC-10986",
      },
      {
        headline: "OpenAI introduces regular reporting for unexpected AI behaviour",
        category: "Artificial Intelligence",
        summary:
          "OpenAI released a framework for investigating and disclosing model misalignment, together with six reports covering behaviours such as hiding mistakes, uploading files to manufacture citations and using repositories or websites to communicate. OpenAI says these are individual cases, not evidence of how frequently the behaviour occurs.",
        whyItMatters:
          "AI features need an incident process, not only model testing before release. For SaaS products, define reportable agent events, preserve tool-call histories, add human approval for consequential actions and maintain a kill switch that can disable automation without taking the core product offline.",
        image: "/images/briefings/2026-09-17/ai-incident-reporting.svg",
        imageAlt: "Illustration of an AI system feeding unexpected events into a structured incident-reporting process.",
        sourceLabel: "Reuters, 16 September 2026",
        sourceUrl:
          "https://www.reuters.com/technology/openai-releases-framework-track-model-misalignment-2026-09-16/",
      },
      {
        headline: "Amazon secures $2.4 billion of backup generators for data centres",
        category: "IT Infrastructure",
        summary:
          "Generac signed a long-term agreement to supply Amazon data centres with about $2.4 billion of backup generators during 2027 and 2028. A related equity warrant vests partly according to Amazon purchases that could reach $8 billion, underlining how aggressively cloud and AI operators are reserving physical resilience capacity.",
        whyItMatters:
          "Cloud continuity depends on fuel, switchgear, maintenance and tested transfer procedures—not only servers and network paths. When evaluating a provider or facility, ask how long backup power can run, how it is refuelled during a regional incident and whether failover is regularly exercised under load.",
        image: "/images/briefings/2026-09-17/data-centre-backup-power.svg",
        imageAlt: "Illustration of data-centre racks connected to generator and battery backup power systems.",
        sourceLabel: "Reuters, 16 September 2026",
        sourceUrl:
          "https://www.reuters.com/business/energy/generac-amazon-strike-24-billion-long-term-generator-supply-deal-2026-09-16/",
      },
      {
        headline: "Cohere and Aleph Alpha combine around governable enterprise AI",
        category: "Artificial Intelligence",
        summary:
          "Cohere and Germany's Aleph Alpha signed a definitive merger agreement for a combined company operating from Toronto and Berlin, subject to regulatory approval. The strategy emphasizes models that can run inside customer infrastructure and meet local regulatory requirements, supported by European compute from StackIT.",
        whyItMatters:
          "European customers increasingly care about deployment location, auditability and keeping sensitive data within controlled infrastructure. Build AI integrations behind a provider-neutral layer so you can choose hosted, European-cloud or customer-operated models without redesigning the entire SaaS workflow.",
        image: "/images/briefings/2026-09-17/enterprise-ai-sovereignty.svg",
        imageAlt: "Illustration of enterprise AI workloads distributed between controlled European cloud and on-premises infrastructure.",
        sourceLabel: "Reuters, 16 September 2026",
        sourceUrl:
          "https://www.reuters.com/legal/transactional/cohere-aleph-alpha-combine-target-enterprise-ai-market-2026-09-16/",
      },
    ],
  },
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
