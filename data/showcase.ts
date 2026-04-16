import type { Language } from "@/lib/i18n";

const whatsappLinks = {
  en: "https://wa.me/33759507877?text=Hello%20Bright%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  fr: "https://wa.me/33759507877?text=Bonjour%20Bright%2C%20je%20souhaite%20parler%20d%27un%20projet.",
} as const;

const showcaseDataByLanguage = {
  en: {
    contact: {
      whatsappLabel: "WhatsApp",
      whatsappUrl: whatsappLinks.en,
      emailLabel: "Email",
    },
    impact: {
      label: "Project Results",
      title: "Proof From Real Deployments",
      subtitle:
        "Selected outcomes from network, systems, CCTV, support, and digital delivery work.",
      items: [
        {
          value: "30+",
          label: "Ubiquiti APs Deployed",
          description:
            "Expanded wireless coverage and reliability across campus environments.",
        },
        {
          value: "32",
          label: "Camera School CCTV Build",
          description:
            "Delivered a complete CCTV system with supporting Wi-Fi and LAN infrastructure.",
        },
        {
          value: "1,500",
          label: "Seat Lecture Block",
          description:
            "Designed LAN and Wi-Fi connectivity for a high-capacity university lecture block.",
        },
        {
          value: "1,000+",
          label: "Users Supported",
          description:
            "Supported students, staff, healthcare teams, and business users across projects.",
        },
        {
          value: "99.5%",
          label: "Network Uptime",
          description:
            "Maintained dependable infrastructure through monitoring and preventive support.",
        },
        {
          value: "10+",
          label: "Major Projects",
          description:
            "Delivered infrastructure and digital projects from planning through handover.",
        },
      ],
    },
    liveProjects: {
      label: "GitHub & Live Projects",
      title: "Code, Websites, and Deployed Work",
      subtitle:
        "A compact view of current public GitHub work and live digital projects.",
      githubProfileLabel: "View GitHub profile",
      repoLabel: "GitHub repo",
      liveLabel: "Live site",
      items: [
        {
          title: "ProWIFETA Website",
          type: "Live Website",
          description:
            "Responsive association website for women in fashion education and training, including mission sections, leadership, gallery, events, membership CTA, and blog updates.",
          repoUrl: "https://github.com/captin-p/prowifeta",
          liveUrl: "https://www.prowifeta.com",
          stack: ["JavaScript", "React", "Responsive UI", "SEO"],
        },
        {
          title: "BritTech Profile Site",
          type: "Portfolio Site",
          description:
            "This professional profile and portfolio site, built with Next.js, bilingual content, project galleries, service sections, and downloadable profile output.",
          repoUrl: "https://github.com/captin-p/www.brit-tech.uk-v2--My-Profile-",
          liveUrl: "/",
          stack: ["TypeScript", "Next.js", "Tailwind CSS", "Portfolio"],
        },
        {
          title: "File Management System",
          type: "Python Project",
          description:
            "A public Python project focused on file-management workflow foundations and practical programming structure.",
          repoUrl: "https://github.com/captin-p/File-management-System",
          stack: ["Python", "File handling", "System workflow"],
        },
      ],
    },
    testimonials: {
      label: "Client Confidence",
      title: "What Clients Value In The Work",
      subtitle:
        "Anonymised feedback themes from infrastructure, support, and creative delivery.",
      items: [
        {
          quote:
            "Clear planning, neat installation, and steady support made the network rollout easy for staff to trust.",
          name: "Education infrastructure client",
          role: "School network and CCTV deployment",
        },
        {
          quote:
            "The hospital LAN work was handled with care for day-to-day operations, with connectivity kept stable for the team.",
          name: "Healthcare operations team",
          role: "Mission hospital network support",
        },
        {
          quote:
            "Design work was delivered with clean layouts, fast revisions, and final files ready for sharing and print.",
          name: "Creative design client",
          role: "Branding and print materials",
        },
      ],
    },
    servicesPage: {
      label: "Services",
      title: "Practical IT, Security, Web, and Design Services",
      subtitle:
        "Hands-on delivery for organisations that need reliable infrastructure, clear support, visible security, and polished digital presence.",
      primaryLabel: "Message on WhatsApp",
      secondaryLabel: "Send an email",
      processLabel: "How Work Moves",
      processTitle: "From site check to handover",
      servicesLabel: "Service Lines",
      servicesTitle: "What You Can Bring Me In For",
      process: [
        {
          title: "Assess",
          description:
            "Review the site, users, equipment, risks, and the outcome the organisation needs.",
        },
        {
          title: "Design",
          description:
            "Map the network, security, support, or digital layout before equipment or content work starts.",
        },
        {
          title: "Deploy",
          description:
            "Install, configure, test, document, and refine the solution in the real environment.",
        },
        {
          title: "Support",
          description:
            "Provide follow-up, troubleshooting, updates, and clear user guidance after launch.",
        },
      ],
      services: [
        {
          title: "Network Installation",
          description:
            "LAN, Wi-Fi, point-to-point links, structured cabling, routing, switching, and site connectivity.",
          deliverables: [
            "Site survey and network plan",
            "Cisco and Ubiquiti deployment",
            "Cable routing, testing, and documentation",
          ],
          icon: "Network",
        },
        {
          title: "CCTV Installation",
          description:
            "Security camera planning, installation, connection, and integration with the supporting network.",
          deliverables: [
            "Camera placement planning",
            "Hikvision, Dahua, Arlo, and Sannce setup",
            "Remote viewing and basic user handover",
          ],
          icon: "Camera",
        },
        {
          title: "Website Design",
          description:
            "Responsive websites and landing pages for associations, schools, service providers, and small businesses.",
          deliverables: [
            "Mobile-friendly page structure",
            "Clear calls to action",
            "Live deployment support",
          ],
          icon: "Monitor",
        },
        {
          title: "Graphic Design",
          description:
            "Book covers, flyers, social media graphics, business cards, event materials, and brand layouts.",
          deliverables: [
            "Print and digital layouts",
            "Social media-ready exports",
            "Brand-consistent visual systems",
          ],
          icon: "Palette",
        },
        {
          title: "IT Support",
          description:
            "Tier 1 to tier 3 troubleshooting, user support, system setup, documentation, and staff guidance.",
          deliverables: [
            "Troubleshooting and repair",
            "Windows and Microsoft 365 support",
            "User training and documentation",
          ],
          icon: "Headphones",
        },
        {
          title: "Systems Administration",
          description:
            "Windows Server, Active Directory, group policy, backups, and operational continuity support.",
          deliverables: [
            "Server and user administration",
            "Backup and recovery planning",
            "Policy and access configuration",
          ],
          icon: "Server",
        },
      ],
    },
  },
  fr: {
    contact: {
      whatsappLabel: "WhatsApp",
      whatsappUrl: whatsappLinks.fr,
      emailLabel: "Email",
    },
    impact: {
      label: "Resultats projets",
      title: "Des preuves issues de deploiements reels",
      subtitle:
        "Quelques resultats en reseau, systemes, CCTV, support et projets digitaux.",
      items: [
        {
          value: "30+",
          label: "Points d'acces Ubiquiti",
          description:
            "Extension de la couverture Wi-Fi et de la fiabilite sur des environnements campus.",
        },
        {
          value: "32",
          label: "Cameras pour une ecole",
          description:
            "Livraison d'un systeme CCTV complet avec Wi-Fi et infrastructure LAN.",
        },
        {
          value: "1,500",
          label: "Places en amphitheatre",
          description:
            "Conception LAN et Wi-Fi pour un grand bloc de cours universitaire.",
        },
        {
          value: "1,000+",
          label: "Utilisateurs accompagnes",
          description:
            "Support pour etudiants, personnels, equipes de sante et utilisateurs business.",
        },
        {
          value: "99.5%",
          label: "Disponibilite reseau",
          description:
            "Infrastructure stable grace a la supervision et au support preventif.",
        },
        {
          value: "10+",
          label: "Projets majeurs",
          description:
            "Livraison de projets infrastructure et digitaux, du cadrage a la remise.",
        },
      ],
    },
    liveProjects: {
      label: "GitHub et projets live",
      title: "Code, sites web et projets deployes",
      subtitle:
        "Un apercu des projets publics GitHub et des realisations digitales en ligne.",
      githubProfileLabel: "Voir le profil GitHub",
      repoLabel: "Depot GitHub",
      liveLabel: "Site live",
      items: [
        {
          title: "Site web ProWIFETA",
          type: "Site live",
          description:
            "Site responsive pour une association de femmes dans l'education et la formation en mode, avec mission, leadership, galerie, evenements, adhesion et blog.",
          repoUrl: "https://github.com/captin-p/prowifeta",
          liveUrl: "https://www.prowifeta.com",
          stack: ["JavaScript", "React", "UI responsive", "SEO"],
        },
        {
          title: "Site profil BritTech",
          type: "Portfolio",
          description:
            "Ce site de profil professionnel et portfolio, avec contenu bilingue, galeries projets, services et profil telechargeable.",
          repoUrl: "https://github.com/captin-p/www.brit-tech.uk-v2--My-Profile-",
          liveUrl: "/",
          stack: ["TypeScript", "Next.js", "Tailwind CSS", "Portfolio"],
        },
        {
          title: "File Management System",
          type: "Projet Python",
          description:
            "Projet Python public autour des bases d'un workflow de gestion de fichiers et d'une structure de programmation pratique.",
          repoUrl: "https://github.com/captin-p/File-management-System",
          stack: ["Python", "Gestion de fichiers", "Workflow systeme"],
        },
      ],
    },
    testimonials: {
      label: "Confiance client",
      title: "Ce que les clients apprecient",
      subtitle:
        "Themes de retours anonymises issus de projets infrastructure, support et creation.",
      items: [
        {
          quote:
            "Une planification claire, une installation propre et un support constant ont facilite l'adoption du reseau par l'equipe.",
          name: "Client infrastructure education",
          role: "Deploiement reseau et CCTV",
        },
        {
          quote:
            "Le LAN de l'hopital a ete traite avec attention aux operations quotidiennes, tout en gardant une connectivite stable.",
          name: "Equipe operations sante",
          role: "Support reseau hospitalier",
        },
        {
          quote:
            "Les designs ont ete livres avec des mises en page propres, des revisions rapides et des fichiers prets pour le print.",
          name: "Client design creatif",
          role: "Branding et supports imprimes",
        },
      ],
    },
    servicesPage: {
      label: "Services",
      title: "Services IT, securite, web et design",
      subtitle:
        "Execution terrain pour les organisations qui ont besoin d'infrastructure fiable, de support clair, de securite visible et d'une presence digitale soignee.",
      primaryLabel: "Ecrire sur WhatsApp",
      secondaryLabel: "Envoyer un email",
      processLabel: "Methode",
      processTitle: "Du diagnostic a la remise",
      servicesLabel: "Domaines",
      servicesTitle: "Les missions que vous pouvez me confier",
      process: [
        {
          title: "Evaluer",
          description:
            "Analyser le site, les utilisateurs, les equipements, les risques et le resultat attendu.",
        },
        {
          title: "Concevoir",
          description:
            "Preparer le reseau, la securite, le support ou la structure digitale avant le deploiement.",
        },
        {
          title: "Deployer",
          description:
            "Installer, configurer, tester, documenter et ajuster la solution dans l'environnement reel.",
        },
        {
          title: "Supporter",
          description:
            "Assurer le suivi, le depannage, les mises a jour et les consignes utilisateurs.",
        },
      ],
      services: [
        {
          title: "Installation reseau",
          description:
            "LAN, Wi-Fi, liaisons point a point, cablage structure, routage, switching et connectivite site.",
          deliverables: [
            "Audit site et plan reseau",
            "Deploiement Cisco et Ubiquiti",
            "Cablage, tests et documentation",
          ],
          icon: "Network",
        },
        {
          title: "Installation CCTV",
          description:
            "Planification, installation, connexion et integration reseau des cameras de securite.",
          deliverables: [
            "Plan de positionnement des cameras",
            "Installation Hikvision, Dahua, Arlo et Sannce",
            "Acces distant et prise en main utilisateur",
          ],
          icon: "Camera",
        },
        {
          title: "Creation de sites web",
          description:
            "Sites responsives et landing pages pour associations, ecoles, prestataires et petites entreprises.",
          deliverables: [
            "Structure mobile-friendly",
            "Appels a l'action clairs",
            "Support a la mise en ligne",
          ],
          icon: "Monitor",
        },
        {
          title: "Design graphique",
          description:
            "Couvertures, flyers, reseaux sociaux, cartes de visite, supports evenementiels et identite visuelle.",
          deliverables: [
            "Layouts print et digitaux",
            "Exports prets pour les reseaux sociaux",
            "Systemes visuels coherents",
          ],
          icon: "Palette",
        },
        {
          title: "Support IT",
          description:
            "Depannage niveau 1 a 3, support utilisateur, installation systeme, documentation et formation.",
          deliverables: [
            "Diagnostic et resolution",
            "Support Windows et Microsoft 365",
            "Formation et documentation",
          ],
          icon: "Headphones",
        },
        {
          title: "Administration systeme",
          description:
            "Windows Server, Active Directory, Group Policy, sauvegardes et continuite operationnelle.",
          deliverables: [
            "Administration serveurs et comptes",
            "Plan sauvegarde et reprise",
            "Configuration des acces et politiques",
          ],
          icon: "Server",
        },
      ],
    },
  },
} as const;

export function getShowcaseData(language: Language) {
  return showcaseDataByLanguage[language];
}
