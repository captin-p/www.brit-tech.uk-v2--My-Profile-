import type { Language } from "@/lib/i18n";

const profileDataByLanguage = {
  en: {
    profile: {
      name: "Bright Konadu",
      title: "Network Infrastructure Specialist",
      roles: [
        "Network Infrastructure Specialist",
        "IT Support Engineer",
        "Network Engineer",
        "Aspiring Cybersecurity Specialist",
        "Freelance Graphic Designer",
      ],
      location: "Dijon, France",
      email: "konadubright024@gmail.com",
      phone: "+33 7 59 50 78 77",
      linkedin: "https://www.linkedin.com/in/bright-konadu",
      github: "https://github.com/captin-p",
      image: "/images/profile/bright-konadu.jpg",
      summary:
        "IT professional with over 8 years of hands-on experience in hardware repair, IT support, network infrastructure, CCTV security systems, and systems administration. Proven track record deploying secure LAN/Wi-Fi environments supporting 40,000+ users across academic and healthcare settings, with freelance project delivery for schools and healthcare facilities. Currently based in Dijon, France and commencing an MSc in Cybersecurity Management at ECE Paris in September 2026, with the goal of specialising in network security, threat management, and cybersecurity governance. Seeking roles in IT infrastructure, network engineering, or cybersecurity where hands-on technical experience can be combined with formal postgraduate training.",
      about: [
        "I design, deploy, and support network and systems infrastructure for academic, healthcare, and commercial environments. My work covers LAN/Wi-Fi design, structured cabling, Windows Server administration, Active Directory, CCTV systems, VoIP, backups, and hands-on technical support.",
        "At USTED, formerly AAMUSTED, I managed infrastructure for 500+ staff and 40,000+ students across multiple campus buildings, deployed 30+ Ubiquiti access points and 5 M5 point-to-point links, and delivered a 1,500-seat lecture-block network with 99.5% uptime.",
        "Alongside infrastructure, I deliver freelance IT and design projects, including school CCTV and network builds, web projects, and 500+ graphic design projects using Adobe Photoshop and Canva. I am now building toward cybersecurity specialisation through postgraduate study at ECE Paris - Ecole d'Ingenieurs.",
      ],
    },
    stats: [
      { value: "8+", label: "Years of experience" },
      { value: "10+", label: "Major projects delivered" },
      { value: "40,000+", label: "Users supported" },
      { value: "50+", label: "Security cameras installed" },
      { value: "99.5%", label: "Network uptime achieved" },
      { value: "500+", label: "Design projects completed" },
    ],
    experience: [
      {
        id: "freelance-it",
        role: "Freelance IT Consultant & Network Engineer",
        company: "Self-employed",
        location: "Kumasi, Ghana",
        period: "2019 - Present",
        type: "Freelance",
        bullets: [
          "Delivered network infrastructure and security system projects for educational and commercial clients across Ghana.",
          "Kwasi Oppong Schools: deployed 64+ CCTV cameras across two locations, complete Wi-Fi infrastructure, and a structured LAN network.",
          "Ghanaian German International School: installed Arlo security cameras with integrated Wi-Fi and LAN connectivity.",
          "Lucienne Community School: implemented a full Wi-Fi and LAN solution.",
          "Completed 10+ projects on time and within budget, achieving 100% client satisfaction.",
          "Installed and configured 50+ security cameras across multiple facilities using Hikvision, Dahua, Arlo, Sannce, Anker, Blink, and Kangaroo systems.",
        ],
      },
      {
        id: "usted",
        role: "Senior IT Technician - Infrastructure & Systems",
        company: "USTED (formerly AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "August 2022 - September 2025",
        type: "Full-time",
        bullets: [
          "Managed IT infrastructure supporting 500+ staff and 40,000+ students across multiple campus buildings, responsible for servers, networks, and telecommunications.",
          "Deployed 30+ Ubiquiti access points and 5 M5 point-to-point links, improving wireless coverage by 85% and reliability by 60%.",
          "Designed and implemented the LAN and Wi-Fi network for a 1,500-seat lecture block, delivering 99.5% uptime.",
          "Administered Windows Server 2012/2016/2019 and Active Directory for 300+ users, including group policies and security configuration.",
          "Implemented automated backup solutions with weekly disaster recovery testing, achieving a zero data loss record.",
          "Monitored server performance using SCOM and proactively resolved issues before they impacted users.",
          "Resolved Sisco Topaz financial software issues with a 95% first-call resolution rate.",
          "Configured Zoom and Teams video conferencing infrastructure and delivered staff training programmes.",
        ],
      },
      {
        id: "hospital",
        role: "IT Technician & Network Support / NHIS Claims Officer",
        company: "Christ Church Mission Hospital, Sunyani Road",
        location: "Kumasi, Ghana",
        period: "October 2024 - September 2025",
        type: "Part-time",
        bullets: [
          "Designed and implemented complete hospital LAN network infrastructure from the ground up, including structured cabling and Wi-Fi systems.",
          "Administered Windows Server environment ensuring 24/7 availability for patient care systems.",
          "Managed system security configurations to maintain HIPAA-compliant healthcare IT operations.",
          "Maintained zero downtime for patient care systems through proactive monitoring and technical support.",
          "Handled NHIS claims processing using the ClaimIt application while maintaining sensitive healthcare data integrity.",
        ],
      },
      {
        id: "usted-ns",
        role: "IT Technician (National Service)",
        company: "USTED (formerly AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "September 2021 - August 2022",
        type: "National Service",
        bullets: [
          "Assisted senior technicians in configuring Cisco network equipment and basic routing and switching tasks.",
          "Supported Windows Server and Active Directory administration, including basic user account management.",
          "Provided tier 1 and tier 2 end-user technical support across multiple departments.",
          "Set up and operated Zoom and live streaming equipment for campus meetings, viva examinations, and online gatherings.",
          "Performed preventive maintenance and routine troubleshooting on IT systems.",
        ],
      },
      {
        id: "seneps",
        role: "IT Technician",
        company: "Seneps Data Solutions",
        location: "Kumasi, Ghana",
        period: "2016 - 2021",
        type: "Part-time",
        bullets: [
          "Diagnosed and repaired hardware and software issues for clients including desktops, laptops, and peripherals.",
          "Installed and configured LAN networks for small businesses.",
          "Provided end-user technical support and basic system configuration.",
          "Performed preventive maintenance and routine troubleshooting across client sites.",
        ],
      },
      {
        id: "graphic-design",
        role: "Freelance Graphic Designer",
        company: "Self-employed",
        location: "Ghana",
        period: "March 2017 - Present",
        type: "Freelance",
        bullets: [
          "Created professional designs including book covers, banners, social media graphics, and marketing materials using Adobe Photoshop and Canva.",
          "Completed 500+ projects for Copy Doctor Publications and various clients.",
        ],
      },
    ],
    skillGroups: [
      {
        category: "Networks & Infrastructure",
        skills: [
          "TCP/IP, DNS, DHCP",
          "VLAN Segmentation",
          "Cisco Routing & Switching",
          "Ubiquiti UniFi / M5",
          "LAN/WAN Design",
          "VPN",
          "Wi-Fi Deployment",
          "Structured Cabling",
          "Fibre & Copper Testing",
          "Wireshark",
          "Nmap",
        ],
      },
      {
        category: "Systems & Security",
        skills: [
          "Windows Server 2012/2016/2019",
          "Active Directory",
          "Group Policy",
          "CCTV Installation (Hikvision, Dahua, Arlo, Sannce, Anker, Blink, Kangaroo)",
          "IT Security Policies",
          "Cybersecurity & Ethical Hacking",
          "Firewall Configuration",
          "System Backups & Disaster Recovery",
          "VoIP Installation",
          "Infrastructure Hardening",
        ],
      },
      {
        category: "Tools & Platforms",
        skills: [
          "SCOM/SCCM",
          "PuTTY",
          "Cisco Packet Tracer",
          "Git / GitHub",
          "Next.js / React",
          "HTML / CSS",
          "WordPress",
          "Microsoft 365",
          "GNS3",
          "TryHackMe",
          "NHIS ClaimIt (Healthcare)",
          "Zoom / Teams",
          "AI-assisted development workflows",
          "Windows 10/11",
        ],
      },
      {
        category: "Hardware & Creative",
        skills: [
          "Computer Assembly",
          "Hardware Diagnosis & Repair",
          "Peripheral Installation",
          "Preventive Maintenance",
          "Adobe Photoshop",
          "Canva",
          "Book Cover Design",
          "Event Banner Design",
          "Social Media Graphics",
          "Marketing Materials",
          "Branding",
        ],
      },
      {
        category: "Support & Operations",
        skills: [
          "Tier 1/2/3 Technical Support",
          "Vendor Coordination",
          "IT Training & Documentation",
          "Project Management",
          "Client Management",
          "Technical Troubleshooting",
        ],
      },
    ],
    certifications: [
      {
        name: "Introduction to Network Routing",
        issuer: "LinkedIn Learning",
        year: "2025",
        image: "/images/certifications/introduction-network-routing.jpg",
      },
      {
        name: "Cybersecurity & Ethical Hacking",
        issuer: "Network Walks Academy",
        year: "2022",
        image: "/images/certifications/cybersecurity-ethical-hacking.jpg",
      },
      {
        name: "CCNA Routing & Switching",
        issuer: "Cisco Networking Academy",
        year: "2019",
        image: "/images/certifications/ccna-routing-switching.jpg",
      },
      {
        name: "Networking Essentials",
        issuer: "Cisco Networking Academy",
        year: "2018",
        image: "/images/certifications/networking-essentials.jpg",
      },
    ],
    education: [
      {
        degree: "MSc Cybersecurity Management - Incoming",
        institution: "ECE Paris - Ecole d'Ingenieurs (Eiffel Campus)",
        country: "France",
        period: "September 2026 - Present",
      },
      {
        degree: "BSc. Information Technology Education",
        institution: "University of Education, Winneba",
        country: "Ghana",
        period: "2017 - 2021",
      },
    ],
    languages: [
      { language: "English", level: "Native" },
      { language: "French", level: "A1 (currently improving toward A2)" },
      { language: "Twi", level: "Native" },
    ],
    achievements: [
      {
        title: "40,000+ Users Supported",
        description:
          "Managed infrastructure supporting 500+ staff and 40,000+ students across multiple USTED campus buildings.",
      },
      {
        title: "10+ Projects Delivered",
        description:
          "Completed 10+ freelance infrastructure and security projects for schools, healthcare, and commercial clients.",
      },
      {
        title: "50+ Cameras Installed",
        description:
          "Installed and configured security cameras across multiple facilities, including 64+ CCTV cameras across two Kwasi Oppong Schools locations.",
      },
      {
        title: "99.5% Network Uptime",
        description:
          "Achieved 99.5% network uptime in enterprise environments through proactive monitoring and maintenance.",
      },
      {
        title: "Zero Data Loss Record",
        description:
          "Implemented automated backup solutions with weekly disaster recovery testing and maintained a zero data loss record.",
      },
      {
        title: "500+ Design Projects",
        description:
          "Completed 500+ professional graphic design projects for Copy Doctor Publications and other clients.",
      },
    ],
    services: [
      {
        title: "Network Infrastructure",
        description:
          "End-to-end LAN and WAN design using Cisco and Ubiquiti equipment, from structured cabling through access-point rollouts.",
        icon: "Network",
      },
      {
        title: "Systems Administration",
        description:
          "Windows Server, Active Directory, Group Policy, and Microsoft 365 administration for organisations of all sizes.",
        icon: "Server",
      },
      {
        title: "CCTV & Security Systems",
        description:
          "Full CCTV installation and configuration integrated with network infrastructure using Hikvision, Dahua, Arlo, Sannce, Anker, Blink, and Kangaroo.",
        icon: "Camera",
      },
      {
        title: "Wireless Engineering",
        description:
          "High-density Wi-Fi deployment and optimisation using Ubiquiti UniFi and M5 point-to-point links for dependable coverage.",
        icon: "Wifi",
      },
      {
        title: "Technical Support",
        description:
          "Tier 1 to tier 3 helpdesk support, troubleshooting, vendor coordination, IT training, and documentation.",
        icon: "Headphones",
      },
      {
        title: "Graphic & Digital Design",
        description:
          "Professional design for print and digital channels, including book covers, banners, social media assets, and branding materials.",
        icon: "Palette",
      },
    ],
  },
  fr: {
    profile: {
      name: "Bright Konadu",
      title: "Specialiste en infrastructure reseau",
      roles: [
        "Specialiste en infrastructure reseau",
        "Ingenieur support IT",
        "Ingenieur reseau",
        "Futur specialiste cybersecurite",
        "Graphiste freelance",
      ],
      location: "Dijon, France",
      email: "konadubright024@gmail.com",
      phone: "+33 7 59 50 78 77",
      linkedin: "https://www.linkedin.com/in/bright-konadu",
      github: "https://github.com/captin-p",
      image: "/images/profile/bright-konadu.jpg",
      summary:
        "Professionnel IT avec plus de 8 ans d'experience pratique en reparation materielle, support IT, infrastructure reseau, systemes CCTV et administration systeme. Parcours confirme dans le deploiement d'environnements LAN/Wi-Fi securises pour plus de 40 000 utilisateurs dans les secteurs academique et hospitalier, avec des projets freelance pour des ecoles et structures de sante. Base a Dijon, France, et entrant en MSc Cybersecurity Management a ECE Paris en septembre 2026 afin de se specialiser en securite reseau, gestion des menaces et gouvernance cybersecurite. Recherche des roles en infrastructure IT, ingenierie reseau ou cybersecurite combinant experience terrain et formation postgraduate.",
      about: [
        "Je concois, deploie et supporte des infrastructures reseau et systemes pour les environnements academiques, hospitaliers et commerciaux. Mon travail couvre la conception LAN/Wi-Fi, le cablage structure, Windows Server, Active Directory, les systemes CCTV, la VoIP, les sauvegardes et le support technique terrain.",
        "A USTED, anciennement AAMUSTED, j'ai gere l'infrastructure de plus de 500 membres du personnel et 40 000 etudiants sur plusieurs batiments du campus, avec plus de 30 points d'acces Ubiquiti, 5 liaisons M5 point a point et un reseau pour amphitheatre de 1 500 places avec 99,5 % de disponibilite.",
        "En parallele de l'infrastructure, je livre des projets IT et design en freelance, notamment des installations CCTV et reseau pour ecoles, des projets web et plus de 500 projets de design graphique avec Adobe Photoshop et Canva. Je developpe maintenant une specialisation cybersecurite via un cursus postgraduate a ECE Paris - Ecole d'Ingenieurs.",
      ],
    },
    stats: [
      { value: "8+", label: "Annees d'experience" },
      { value: "10+", label: "Projets majeurs livres" },
      { value: "40,000+", label: "Utilisateurs accompagnes" },
      { value: "50+", label: "Cameras installees" },
      { value: "99.5%", label: "Disponibilite reseau" },
      { value: "500+", label: "Projets design realises" },
    ],
    experience: [
      {
        id: "freelance-it",
        role: "Consultant IT freelance et ingenieur reseau",
        company: "Independant",
        location: "Kumasi, Ghana",
        period: "2019 - aujourd'hui",
        type: "Freelance",
        bullets: [
          "Livraison de projets d'infrastructure reseau et de systemes de securite pour des clients educatifs et commerciaux au Ghana.",
          "Kwasi Oppong Schools : deploiement de 64+ cameras CCTV sur deux sites, d'une infrastructure Wi-Fi complete et d'un reseau LAN structure.",
          "Ghanaian German International School : installation de cameras Arlo avec connectivite Wi-Fi et LAN integree.",
          "Lucienne Community School : mise en place d'une solution Wi-Fi et LAN complete.",
          "Realisation de plus de 10 projets dans les delais et le budget, avec 100 % de satisfaction client.",
          "Installation et configuration de plus de 50 cameras sur plusieurs sites avec des systemes Hikvision, Dahua, Arlo, Sannce, Anker, Blink et Kangaroo.",
        ],
      },
      {
        id: "usted",
        role: "Technicien IT senior - Infrastructure et systemes",
        company: "USTED (anciennement AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "aout 2022 - sept. 2025",
        type: "Temps plein",
        bullets: [
          "Gestion de l'infrastructure IT pour plus de 500 membres du personnel et 40 000 etudiants sur plusieurs batiments du campus, y compris serveurs, reseaux et telecommunications.",
          "Deploiement de plus de 30 points d'acces Ubiquiti et de 5 liaisons point a point M5, avec une amelioration de 85 % de la couverture et de 60 % de la fiabilite.",
          "Conception et mise en oeuvre du reseau LAN et Wi-Fi d'un amphitheatre de 1 500 places avec 99,5 % de disponibilite.",
          "Administration de Windows Server 2012/2016/2019 et Active Directory pour plus de 300 utilisateurs, y compris les strategies de groupe et la configuration de securite.",
          "Mise en place de sauvegardes automatisees avec tests hebdomadaires de reprise apres sinistre et zero perte de donnees.",
          "Supervision des serveurs avec SCOM et resolution proactive des incidents avant impact utilisateur.",
          "Resolution des incidents sur le logiciel financier Sisco Topaz avec un taux de resolution au premier contact de 95 %.",
          "Configuration d'infrastructures de visioconference Zoom et Teams et formation du personnel.",
        ],
      },
      {
        id: "hospital",
        role: "Technicien IT et support reseau / agent NHIS",
        company: "Christ Church Mission Hospital, Sunyani Road",
        location: "Kumasi, Ghana",
        period: "oct. 2024 - sept. 2025",
        type: "Temps partiel",
        bullets: [
          "Conception et mise en place complete du reseau LAN hospitalier depuis zero, incluant cablage structure et systemes Wi-Fi.",
          "Administration de l'environnement Windows Server avec disponibilite 24/7 pour les systemes de soins.",
          "Gestion des configurations de securite systeme pour maintenir des operations IT hospitalieres conformes HIPAA.",
          "Maintien d'un zero interruption pour les systemes de soins grace a la supervision proactive et au support technique.",
          "Traitement des demandes NHIS avec l'application ClaimIt en preservant l'integrite des donnees de sante sensibles.",
        ],
      },
      {
        id: "usted-ns",
        role: "Technicien IT (service national)",
        company: "USTED (anciennement AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "sept. 2021 - aout 2022",
        type: "Service national",
        bullets: [
          "Assistance aux techniciens seniors dans la configuration d'equipements reseau Cisco et les taches de routage et commutation de base.",
          "Support de l'administration Windows Server et Active Directory, incluant la gestion de base des comptes utilisateurs.",
          "Support technique utilisateur de niveau 1 et 2 dans plusieurs departements.",
          "Installation et exploitation d'equipements Zoom et live streaming pour reunions de campus, soutenances et rassemblements en ligne.",
          "Maintenance preventive et depannage courant des systemes IT.",
        ],
      },
      {
        id: "seneps",
        role: "Technicien IT",
        company: "Seneps Data Solutions",
        location: "Kumasi, Ghana",
        period: "2016 - 2021",
        type: "Temps partiel",
        bullets: [
          "Diagnostic et reparation de problemes materiels et logiciels pour les clients, incluant postes fixes, ordinateurs portables et peripheriques.",
          "Installation et configuration de reseaux LAN pour petites entreprises.",
          "Support technique utilisateur et configuration systeme de base.",
          "Maintenance preventive et depannage courant sur les sites clients.",
        ],
      },
      {
        id: "graphic-design",
        role: "Graphiste freelance",
        company: "Independant",
        location: "Ghana",
        period: "mars 2017 - aujourd'hui",
        type: "Freelance",
        bullets: [
          "Creation de designs professionnels, notamment couvertures de livres, bannieres, visuels reseaux sociaux et supports marketing avec Adobe Photoshop et Canva.",
          "Realisation de plus de 500 projets pour Copy Doctor Publications et divers clients.",
        ],
      },
    ],
    skillGroups: [
      {
        category: "Reseaux et infrastructure",
        skills: [
          "TCP/IP, DNS, DHCP",
          "Segmentation VLAN",
          "Cisco Routing & Switching",
          "Ubiquiti UniFi / M5",
          "Conception LAN/WAN",
          "VPN",
          "Deploiement Wi-Fi",
          "Cablage structure",
          "Tests fibre et cuivre",
          "Wireshark",
          "Nmap",
        ],
      },
      {
        category: "Systemes et securite",
        skills: [
          "Windows Server 2012/2016/2019",
          "Active Directory",
          "Group Policy",
          "Installation CCTV (Hikvision, Dahua, Arlo, Sannce, Anker, Blink, Kangaroo)",
          "Politiques de securite IT",
          "Cybersécurité et ethical hacking",
          "Configuration firewall",
          "Sauvegardes systeme et reprise apres sinistre",
          "Installation VoIP",
          "Durcissement d'infrastructure",
        ],
      },
      {
        category: "Outils et plateformes",
        skills: [
          "SCOM/SCCM",
          "PuTTY",
          "Cisco Packet Tracer",
          "Git / GitHub",
          "Next.js / React",
          "HTML / CSS",
          "WordPress",
          "Microsoft 365",
          "GNS3",
          "TryHackMe",
          "NHIS ClaimIt (sante)",
          "Zoom / Teams",
          "Workflows de developpement assistes par IA",
          "Windows 10/11",
        ],
      },
      {
        category: "Materiel et creation",
        skills: [
          "Assemblage d'ordinateurs",
          "Diagnostic et reparation materielle",
          "Installation de peripheriques",
          "Maintenance preventive",
          "Adobe Photoshop",
          "Canva",
          "Conception de couvertures",
          "Conception de bannieres d'evenement",
          "Visuels pour reseaux sociaux",
          "Supports marketing",
          "Branding",
        ],
      },
      {
        category: "Support et operations",
        skills: [
          "Support technique niveau 1/2/3",
          "Coordination fournisseurs",
          "Formation IT et documentation",
          "Gestion de projet",
          "Gestion client",
          "Resolution de problemes techniques",
        ],
      },
    ],
    certifications: [
      {
        name: "Introduction to Network Routing",
        issuer: "LinkedIn Learning",
        year: "2025",
        image: "/images/certifications/introduction-network-routing.jpg",
      },
      {
        name: "Cybersecurity & Ethical Hacking",
        issuer: "Network Walks Academy",
        year: "2022",
        image: "/images/certifications/cybersecurity-ethical-hacking.jpg",
      },
      {
        name: "CCNA Routing & Switching",
        issuer: "Cisco Networking Academy",
        year: "2019",
        image: "/images/certifications/ccna-routing-switching.jpg",
      },
      {
        name: "Networking Essentials",
        issuer: "Cisco Networking Academy",
        year: "2018",
        image: "/images/certifications/networking-essentials.jpg",
      },
    ],
    education: [
      {
        degree: "MSc Cybersecurity Management - admission confirmee",
        institution: "ECE Paris - Ecole d'Ingenieurs (Eiffel Campus)",
        country: "France",
        period: "septembre 2026 - aujourd'hui",
      },
      {
        degree: "Licence en enseignement des technologies de l'information",
        institution: "University of Education, Winneba",
        country: "Ghana",
        period: "2017 - 2021",
      },
    ],
    languages: [
      { language: "Anglais", level: "Langue maternelle" },
      { language: "Francais", level: "A1 (en progression vers A2)" },
      { language: "Twi", level: "Langue maternelle" },
    ],
    achievements: [
      {
        title: "40 000+ utilisateurs accompagnes",
        description:
          "Gestion d'une infrastructure accompagnant plus de 500 membres du personnel et 40 000 etudiants sur plusieurs batiments du campus USTED.",
      },
      {
        title: "10+ projets livres",
        description:
          "Realisation de plus de 10 projets freelance d'infrastructure et de securite pour des ecoles, structures de sante et clients commerciaux.",
      },
      {
        title: "50+ cameras installees",
        description:
          "Installation et configuration de cameras de securite sur plusieurs sites, dont 64+ cameras CCTV sur deux sites de Kwasi Oppong Schools.",
      },
      {
        title: "99,5 % de disponibilite reseau",
        description:
          "Obtention de 99,5 % de disponibilite reseau en environnement entreprise grace a une supervision proactive et une maintenance reguliere.",
      },
      {
        title: "Zero perte de donnees",
        description:
          "Mise en place de sauvegardes automatisees avec tests hebdomadaires de reprise apres sinistre et maintien d'un historique de zero perte de donnees.",
      },
      {
        title: "500+ projets design",
        description:
          "Realisation de plus de 500 projets de design graphique professionnel pour Copy Doctor Publications et d'autres clients.",
      },
    ],
    services: [
      {
        title: "Infrastructure reseau",
        description:
          "Conception et deploiement LAN et WAN de bout en bout avec Cisco et Ubiquiti, du cablage structure jusqu'au deploiement des points d'acces.",
        icon: "Network",
      },
      {
        title: "Administration systeme",
        description:
          "Administration Windows Server, Active Directory, Group Policy et Microsoft 365 pour des organisations de toute taille.",
        icon: "Server",
      },
      {
        title: "CCTV et systemes de securite",
        description:
          "Installation et configuration completes de systemes CCTV integres a l'infrastructure reseau avec Hikvision, Dahua, Arlo, Sannce, Anker, Blink et Kangaroo.",
        icon: "Camera",
      },
      {
        title: "Ingenierie Wi-Fi",
        description:
          "Deploiement et optimisation de Wi-Fi a forte densite avec Ubiquiti UniFi et liaisons M5 pour une couverture fiable.",
        icon: "Wifi",
      },
      {
        title: "Support technique",
        description:
          "Support helpdesk niveau 1 a 3, depannage, coordination fournisseurs, formation IT et documentation.",
        icon: "Headphones",
      },
      {
        title: "Design graphique et digital",
        description:
          "Creation professionnelle pour le print et le digital, incluant couvertures de livres, bannieres, contenus reseaux sociaux et elements de marque.",
        icon: "Palette",
      },
    ],
  },
} as const;

const profilePageCopyByLanguage = {
  en: {
    contactButton: "Contact Me",
    downloadButton: "Download Profile",
    downloadAriaLabel: "Download profile",
    linkedInLabel: "LinkedIn",
    gitHubLabel: "GitHub",
    careerLabel: "Career",
    experienceTitle: "Experience",
    expertiseLabel: "Expertise",
    skillsTitle: "Skills",
    qualificationsLabel: "Qualifications",
    certificationsTitle: "Certifications",
    academicLabel: "Academic",
    educationTitle: "Education",
    communicationLabel: "Communication",
    languagesTitle: "Languages",
    impactLabel: "Impact",
    achievementsTitle: "Key Achievements",
    achievementsSubtitle:
      "Selected highlights that demonstrate the value I have delivered across organisations and projects.",
  },
  fr: {
    contactButton: "Me contacter",
    downloadButton: "Telecharger le profil",
    downloadAriaLabel: "Telecharger le profil",
    linkedInLabel: "LinkedIn",
    gitHubLabel: "GitHub",
    careerLabel: "Parcours",
    experienceTitle: "Experience",
    expertiseLabel: "Expertise",
    skillsTitle: "Competences",
    qualificationsLabel: "Qualifications",
    certificationsTitle: "Certifications",
    academicLabel: "Academique",
    educationTitle: "Formation",
    communicationLabel: "Communication",
    languagesTitle: "Langues",
    impactLabel: "Impact",
    achievementsTitle: "Realisations cles",
    achievementsSubtitle:
      "Quelques resultats marquants qui illustrent la valeur que j'ai apportee aux organisations et aux projets.",
  },
} as const;

export function getProfileData(language: Language) {
  return profileDataByLanguage[language];
}

export function getProfilePageCopy(language: Language) {
  return profilePageCopyByLanguage[language];
}
