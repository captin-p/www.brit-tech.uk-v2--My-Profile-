import type { Language } from "@/lib/i18n";

const profileDataByLanguage = {
  en: {
    profile: {
      name: "Bright Konadu",
      title: "IT Infrastructure & Network Support Engineer",
      roles: [
        "IT Infrastructure & Network Support Engineer",
        "Field Network Engineer",
        "Network Engineer",
        "Systems Administrator",
        "Cybersecurity Management MSc - Incoming",
      ],
      location: "Paris, France",
      email: "konadubright024@gmail.com",
      phone: "+33 7 59 50 78 77",
      linkedin: "https://www.linkedin.com/in/bright-konadu",
      github: "https://github.com/captin-p",
      image: "/images/profile/bright-konadu.jpg",
      summary:
        "IT Infrastructure and Network Support Engineer with 5+ years of hands-on experience across systems administration, network infrastructure, Windows Server, Active Directory, Wi-Fi deployment, troubleshooting, structured cabling and end-user support. Experienced in education, healthcare, commercial environments and freelance field engineering in France. Based in Paris and preparing to begin an MSc in Cybersecurity Management at ECE Paris in October 2026. Seeking IT infrastructure, network engineering, systems administration, technical support and alternance opportunities in France.",
      about: [
        "I design, deploy, troubleshoot and support network and systems infrastructure across academic, healthcare, commercial and field-engineering environments. My work covers LAN/WAN, Wi-Fi, structured cabling, Windows Server, Active Directory, DNS/DHCP, rack-and-stack, access-point deployment, CCTV, endpoint support and remote hands.",
        "At USTED, formerly AAMUSTED, I supported infrastructure serving 500+ staff and 40,000+ students across multiple campus buildings, administered Windows Server and Active Directory, deployed 30+ Ubiquiti access points and point-to-point links, and helped deliver network infrastructure for a 1,500-seat lecture block.",
        "Since moving to France, I have continued hands-on field engineering work involving rack-and-stack, server hardware replacement, network-device installation, AP installation, cabling, labeling, remote implementation support and desktop support. I am strengthening this infrastructure background with postgraduate study in cybersecurity management at ECE Paris.",
      ],
    },
    stats: [
      { value: "5+", label: "Years of professional experience" },
      { value: "10+", label: "Infrastructure projects delivered" },
      { value: "40,000+", label: "Users supported" },
      { value: "64+", label: "CCTV cameras deployed on a major school project" },
      { value: "30+", label: "Ubiquiti access points deployed" },
      { value: "1,500", label: "Seat lecture-block network delivered" },
    ],
    experience: [
      {
        id: "france-field-engineering",
        role: "Freelance IT Consultant & Field Network Engineer",
        company: "Self-employed",
        location: "France",
        period: "2026 - Present",
        type: "Freelance",
        bullets: [
          "Provide on-site field engineering and remote-hands support for infrastructure assignments in France.",
          "Perform rack-and-stack work, server hardware replacement, structured cabling, patching, labeling and network-device installation.",
          "Install and support routers, switches, wireless access points and associated peripherals under remote implementation guidance.",
          "Carry out desktop support, hardware troubleshooting, device replacement, connectivity checks and post-installation validation.",
          "Document work with device inventories, cable and port labels, before/after photographs and handover information.",
        ],
      },
      {
        id: "freelance-it-ghana",
        role: "Freelance IT Consultant & Field Network Engineer",
        company: "Self-employed",
        location: "Ghana",
        period: "2019 - 2025",
        type: "Freelance",
        bullets: [
          "Delivered network infrastructure, structured cabling, Wi-Fi, CCTV and technical-support projects for educational and commercial clients.",
          "Kwasi Oppong Schools: deployed 64+ CCTV cameras across two locations together with Wi-Fi and structured LAN infrastructure.",
          "Ghanaian German International School: installed Arlo security cameras integrated with Wi-Fi and LAN connectivity.",
          "Lucienne Community School: implemented a complete Wi-Fi and LAN solution.",
          "Completed 10+ infrastructure and security projects across client sites.",
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
          "Managed and supported IT infrastructure serving 500+ staff and 40,000+ students across multiple campus buildings.",
          "Administered Windows Server 2012/2016/2019, Active Directory, user accounts, Group Policy, backups and systems monitoring.",
          "Deployed 30+ Ubiquiti access points and 5 M5 point-to-point links across campus environments.",
          "Designed and implemented LAN and Wi-Fi infrastructure for a 1,500-seat lecture block.",
          "Supported LAN/WAN operations, switching, wireless connectivity, endpoint troubleshooting and telecommunications services.",
          "Monitored server performance using SCOM and resolved infrastructure issues proactively.",
          "Supported Sisco Topaz financial software and delivered Zoom/Teams conferencing setup and user training.",
        ],
      },
      {
        id: "hospital",
        role: "IT Technician & Network Support / NHIS Claims Officer",
        company: "Sunyani Road Church of Christ Mission Hospital",
        location: "Kumasi, Ghana",
        period: "October 2024 - September 2025",
        type: "Part-time",
        bullets: [
          "Designed and supported hospital LAN/Wi-Fi infrastructure, including structured cabling and endpoint connectivity.",
          "Administered the Windows Server environment and provided technical support for patient-care systems and users.",
          "Maintained security configurations and protected sensitive healthcare information during day-to-day IT operations.",
          "Handled NHIS claims processing using the ClaimIt application while maintaining data integrity.",
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
          "Assisted with Cisco network equipment, routing and switching tasks and campus connectivity support.",
          "Supported Windows Server and Active Directory administration, including user-account management.",
          "Provided tier 1 and tier 2 technical support across multiple departments.",
          "Set up and operated Zoom and live-streaming equipment for meetings, viva examinations and online events.",
          "Performed preventive maintenance and troubleshooting on IT systems and peripherals.",
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
          "Diagnosed and repaired desktop, laptop, peripheral, hardware and software issues for clients.",
          "Installed and configured LAN networks for small businesses.",
          "Provided end-user support, system configuration, preventive maintenance and troubleshooting across client sites.",
        ],
      },
      {
        id: "graphic-design",
        role: "Freelance Graphic Designer",
        company: "Self-employed",
        location: "Ghana / Remote",
        period: "March 2017 - Present",
        type: "Freelance",
        bullets: [
          "Created book covers, banners, social-media graphics and marketing materials using Adobe Photoshop and Canva.",
          "Completed 500+ design projects for Copy Doctor Publications and other clients.",
        ],
      },
    ],
    skillGroups: [
      {
        category: "Networks & Infrastructure",
        skills: [
          "TCP/IP, DNS, DHCP",
          "VLANs & Subnetting",
          "Switching & Routing",
          "Cisco Networking",
          "Ubiquiti UniFi / M5",
          "LAN/WAN",
          "VPN",
          "Wi-Fi Deployment",
          "Structured Cabling",
          "Rack & Stack",
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
          "Group Policy / OU Management",
          "Microsoft 365",
          "VMware",
          "Proxmox",
          "System Backups & Disaster Recovery",
          "Firewall Configuration",
          "Infrastructure Hardening",
          "Cybersecurity & Ethical Hacking",
          "CCTV Systems",
        ],
      },
      {
        category: "Support & Field Engineering",
        skills: [
          "IT Support & Troubleshooting L1/L2",
          "Remote Hands",
          "Server Hardware Replacement",
          "Desktop Support",
          "Network Device Installation",
          "Access Point Installation",
          "Cabling & Labeling",
          "Hardware Diagnosis & Repair",
          "Vendor Coordination",
          "Technical Documentation",
        ],
      },
      {
        category: "Tools & Platforms",
        skills: [
          "SCOM/SCCM",
          "PuTTY",
          "Cisco Packet Tracer",
          "GNS3",
          "TryHackMe",
          "Git / GitHub",
          "Windows 10/11",
          "Zoom / Teams",
          "NHIS ClaimIt",
        ],
      },
      {
        category: "Additional Digital Skills",
        skills: [
          "Next.js / React",
          "HTML / CSS",
          "WordPress",
          "Adobe Photoshop",
          "Canva",
          "AI-assisted development workflows",
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
        name: "Cybersecurity & Ethical Hacking Training",
        issuer: "Network Walks Academy",
        year: "2022",
        image: "/images/certifications/cybersecurity-ethical-hacking.jpg",
      },
      {
        name: "CCNA Routing & Switching Training",
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
        degree: "MSc Cybersecurity Management - Expected Start October 2026",
        institution: "ECE Paris - Ecole d'Ingenieurs (Eiffel Campus)",
        country: "France",
        period: "Expected start: October 2026",
      },
      {
        degree: "French Language Studies - A1 Completed",
        institution: "Universite de Bourgogne - CIEF",
        country: "France",
        period: "Completed 2026",
      },
      {
        degree: "BSc. Information Technology Education",
        institution: "University of Education, Winneba",
        country: "Ghana",
        period: "2017 - 2021",
      },
    ],
    languages: [
      { language: "English", level: "Fluent" },
      { language: "French", level: "A1 completed; A2 developing" },
      { language: "Twi", level: "Native" },
    ],
    achievements: [
      {
        title: "40,000+ Users Supported",
        description:
          "Supported infrastructure serving 500+ staff and 40,000+ students across multiple USTED campus buildings.",
      },
      {
        title: "10+ Infrastructure Projects Delivered",
        description:
          "Delivered network, Wi-Fi, structured-cabling, CCTV and technical-support projects for schools and commercial clients.",
      },
      {
        title: "64+ Cameras on a Major School Deployment",
        description:
          "Deployed 64+ CCTV cameras across two Kwasi Oppong Schools locations together with supporting network infrastructure.",
      },
      {
        title: "30+ Ubiquiti Access Points Deployed",
        description:
          "Deployed and supported 30+ Ubiquiti wireless access points and point-to-point links across campus environments.",
      },
      {
        title: "1,500-Seat Lecture Block Network",
        description:
          "Designed and implemented LAN and Wi-Fi infrastructure for a large university lecture block.",
      },
      {
        title: "France Field Engineering",
        description:
          "Delivered hands-on rack-and-stack, remote-hands, cabling, labeling, network-device installation, AP installation and desktop-support assignments in France.",
      },
    ],
    services: [
      {
        title: "Network Infrastructure",
        description:
          "LAN/WAN, switching, routing, Wi-Fi, structured cabling, rack-and-stack and access-point deployment.",
        icon: "Network",
      },
      {
        title: "Systems Administration",
        description:
          "Windows Server, Active Directory, Group Policy, Microsoft 365, backups and virtualisation support.",
        icon: "Server",
      },
      {
        title: "Field Engineering & Remote Hands",
        description:
          "On-site infrastructure implementation, hardware replacement, cabling, labeling, device installation and validation under remote engineering guidance.",
        icon: "Wrench",
      },
      {
        title: "Wireless Engineering",
        description:
          "Wi-Fi deployment and troubleshooting using Ubiquiti and enterprise access-point infrastructure.",
        icon: "Wifi",
      },
      {
        title: "Technical Support",
        description:
          "L1/L2 desktop and infrastructure support, troubleshooting, endpoint deployment, vendor coordination and documentation.",
        icon: "Headphones",
      },
      {
        title: "CCTV & Security Systems",
        description:
          "CCTV installation and integration with LAN/Wi-Fi infrastructure for schools and commercial environments.",
        icon: "Camera",
      },
    ],
  },
  fr: {
    profile: {
      name: "Bright Konadu",
      title: "Ingenieur infrastructure IT et support reseau",
      roles: [
        "Ingenieur infrastructure IT et support reseau",
        "Ingenieur reseau terrain",
        "Ingenieur reseau",
        "Administrateur systemes",
        "MSc Cybersecurity Management - rentree prochaine",
      ],
      location: "Paris, France",
      email: "konadubright024@gmail.com",
      phone: "+33 7 59 50 78 77",
      linkedin: "https://www.linkedin.com/in/bright-konadu",
      github: "https://github.com/captin-p",
      image: "/images/profile/bright-konadu.jpg",
      summary:
        "Ingenieur infrastructure IT et support reseau avec plus de 5 ans d'experience pratique en administration systeme, infrastructure reseau, Windows Server, Active Directory, deploiement Wi-Fi, depannage, cablage structure et support utilisateurs. Experience dans l'education, la sante, les environnements commerciaux et les missions de field engineering en France. Base a Paris et admis en MSc Cybersecurity Management a ECE Paris, avec une rentree prevue en octobre 2026. Recherche des opportunites en infrastructure IT, reseau, administration systeme, support technique et alternance en France.",
      about: [
        "Je concois, deploie, depanne et supporte des infrastructures reseau et systemes dans des environnements academiques, hospitaliers, commerciaux et de field engineering. Mon travail couvre LAN/WAN, Wi-Fi, cablage structure, Windows Server, Active Directory, DNS/DHCP, rack-and-stack, points d'acces, CCTV, support postes de travail et remote hands.",
        "A USTED, anciennement AAMUSTED, j'ai supporte une infrastructure utilisee par plus de 500 membres du personnel et 40 000 etudiants, administre Windows Server et Active Directory, deploye plus de 30 points d'acces Ubiquiti et des liaisons point-a-point, et contribue au reseau d'un amphitheatre de 1 500 places.",
        "Depuis mon installation en France, je poursuis des missions terrain incluant rack-and-stack, remplacement de materiel serveur, installation d'equipements reseau et de points d'acces, cablage, etiquetage, assistance aux equipes distantes et support poste de travail. Je renforce ce parcours par une formation postgraduate en cybersecurity management a ECE Paris.",
      ],
    },
    stats: [
      { value: "5+", label: "Annees d'experience professionnelle" },
      { value: "10+", label: "Projets d'infrastructure livres" },
      { value: "40 000+", label: "Utilisateurs supportes" },
      { value: "64+", label: "Cameras CCTV deployees sur un projet scolaire majeur" },
      { value: "30+", label: "Points d'acces Ubiquiti deployes" },
      { value: "1 500", label: "Places couvertes par un reseau d'amphitheatre" },
    ],
    experience: [
      {
        id: "france-field-engineering",
        role: "Consultant IT freelance et ingenieur reseau terrain",
        company: "Independant",
        location: "France",
        period: "2026 - aujourd'hui",
        type: "Freelance",
        bullets: [
          "Realisation de missions de field engineering sur site et de remote hands en France.",
          "Travaux de rack-and-stack, remplacement de materiel serveur, cablage structure, brassage, etiquetage et installation d'equipements reseau.",
          "Installation et support de routeurs, commutateurs, points d'acces Wi-Fi et peripheriques associes sous supervision d'equipes distantes.",
          "Support poste de travail, diagnostic materiel, remplacement d'equipements, tests de connectivite et validation apres intervention.",
          "Documentation des interventions avec inventaires, etiquetage des ports et cables, photos avant/apres et informations de remise en service.",
        ],
      },
      {
        id: "freelance-it-ghana",
        role: "Consultant IT freelance et ingenieur reseau terrain",
        company: "Independant",
        location: "Ghana",
        period: "2019 - 2025",
        type: "Freelance",
        bullets: [
          "Livraison de projets reseau, cablage structure, Wi-Fi, CCTV et support technique pour des ecoles et clients commerciaux.",
          "Kwasi Oppong Schools : deploiement de 64+ cameras CCTV sur deux sites avec infrastructure Wi-Fi et LAN structure.",
          "Ghanaian German International School : installation de cameras Arlo integrees au reseau Wi-Fi et LAN.",
          "Lucienne Community School : mise en place d'une solution Wi-Fi et LAN complete.",
          "Realisation de plus de 10 projets d'infrastructure et de securite sur sites clients.",
        ],
      },
      {
        id: "usted",
        role: "Technicien IT senior - Infrastructure et systemes",
        company: "USTED (anciennement AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "aout 2022 - septembre 2025",
        type: "Temps plein",
        bullets: [
          "Gestion et support de l'infrastructure IT utilisee par plus de 500 membres du personnel et 40 000 etudiants sur plusieurs batiments.",
          "Administration de Windows Server 2012/2016/2019, Active Directory, comptes utilisateurs, Group Policy, sauvegardes et supervision systeme.",
          "Deploiement de plus de 30 points d'acces Ubiquiti et de 5 liaisons M5 point-a-point.",
          "Conception et mise en oeuvre du LAN et du Wi-Fi pour un amphitheatre de 1 500 places.",
          "Support LAN/WAN, commutation, Wi-Fi, postes utilisateurs et services de telecommunications.",
          "Supervision des serveurs avec SCOM et resolution proactive des incidents d'infrastructure.",
          "Support du logiciel financier Sisco Topaz et mise en place de solutions de visioconference Zoom/Teams.",
        ],
      },
      {
        id: "hospital",
        role: "Technicien IT et support reseau / agent NHIS",
        company: "Sunyani Road Church of Christ Mission Hospital",
        location: "Kumasi, Ghana",
        period: "octobre 2024 - septembre 2025",
        type: "Temps partiel",
        bullets: [
          "Conception et support du reseau LAN/Wi-Fi hospitalier, incluant cablage structure et connectivite des postes.",
          "Administration de l'environnement Windows Server et support technique des systemes de soins et des utilisateurs.",
          "Maintien des configurations de securite et protection des informations de sante sensibles dans les operations IT quotidiennes.",
          "Traitement des demandes NHIS avec l'application ClaimIt tout en preservant l'integrite des donnees.",
        ],
      },
      {
        id: "usted-ns",
        role: "Technicien IT (service national)",
        company: "USTED (anciennement AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "septembre 2021 - aout 2022",
        type: "Service national",
        bullets: [
          "Assistance sur les equipements reseau Cisco, le routage, la commutation et la connectivite du campus.",
          "Support de Windows Server et Active Directory, notamment la gestion des comptes utilisateurs.",
          "Support technique de niveau 1 et 2 dans plusieurs departements.",
          "Installation et exploitation de Zoom et du live streaming pour reunions, soutenances et evenements en ligne.",
          "Maintenance preventive et depannage des systemes et peripheriques IT.",
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
          "Diagnostic et reparation de problemes materiels et logiciels sur postes fixes, ordinateurs portables et peripheriques.",
          "Installation et configuration de reseaux LAN pour petites entreprises.",
          "Support utilisateurs, configuration systeme, maintenance preventive et depannage sur sites clients.",
        ],
      },
      {
        id: "graphic-design",
        role: "Graphiste freelance",
        company: "Independant",
        location: "Ghana / a distance",
        period: "mars 2017 - aujourd'hui",
        type: "Freelance",
        bullets: [
          "Creation de couvertures de livres, bannieres, visuels reseaux sociaux et supports marketing avec Adobe Photoshop et Canva.",
          "Realisation de plus de 500 projets pour Copy Doctor Publications et d'autres clients.",
        ],
      },
    ],
    skillGroups: [
      {
        category: "Reseaux et infrastructure",
        skills: [
          "TCP/IP, DNS, DHCP",
          "VLAN et subnetting",
          "Switching et routing",
          "Cisco Networking",
          "Ubiquiti UniFi / M5",
          "LAN/WAN",
          "VPN",
          "Deploiement Wi-Fi",
          "Cablage structure",
          "Rack & Stack",
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
          "Group Policy / gestion des OU",
          "Microsoft 365",
          "VMware",
          "Proxmox",
          "Sauvegardes et reprise apres sinistre",
          "Configuration firewall",
          "Durcissement d'infrastructure",
          "Cybersecurite et ethical hacking",
          "Systemes CCTV",
        ],
      },
      {
        category: "Support et field engineering",
        skills: [
          "Support IT et depannage L1/L2",
          "Remote Hands",
          "Remplacement de materiel serveur",
          "Support poste de travail",
          "Installation d'equipements reseau",
          "Installation de points d'acces",
          "Cablage et etiquetage",
          "Diagnostic et reparation materielle",
          "Coordination fournisseurs",
          "Documentation technique",
        ],
      },
      {
        category: "Outils et plateformes",
        skills: [
          "SCOM/SCCM",
          "PuTTY",
          "Cisco Packet Tracer",
          "GNS3",
          "TryHackMe",
          "Git / GitHub",
          "Windows 10/11",
          "Zoom / Teams",
          "NHIS ClaimIt",
        ],
      },
      {
        category: "Competences digitales complementaires",
        skills: [
          "Next.js / React",
          "HTML / CSS",
          "WordPress",
          "Adobe Photoshop",
          "Canva",
          "Workflows de developpement assistes par IA",
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
        name: "Cybersecurity & Ethical Hacking Training",
        issuer: "Network Walks Academy",
        year: "2022",
        image: "/images/certifications/cybersecurity-ethical-hacking.jpg",
      },
      {
        name: "CCNA Routing & Switching Training",
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
        degree: "MSc Cybersecurity Management - rentree prevue en octobre 2026",
        institution: "ECE Paris - Ecole d'Ingenieurs (Eiffel Campus)",
        country: "France",
        period: "Rentree prevue : octobre 2026",
      },
      {
        degree: "Etudes de francais - niveau A1 termine",
        institution: "Universite de Bourgogne - CIEF",
        country: "France",
        period: "Termine en 2026",
      },
      {
        degree: "Licence en enseignement des technologies de l'information",
        institution: "University of Education, Winneba",
        country: "Ghana",
        period: "2017 - 2021",
      },
    ],
    languages: [
      { language: "Anglais", level: "Courant" },
      { language: "Francais", level: "A1 termine ; A2 en cours de progression" },
      { language: "Twi", level: "Langue maternelle" },
    ],
    achievements: [
      {
        title: "40 000+ utilisateurs supportes",
        description:
          "Support d'une infrastructure utilisee par plus de 500 membres du personnel et 40 000 etudiants sur plusieurs batiments USTED.",
      },
      {
        title: "10+ projets d'infrastructure livres",
        description:
          "Livraison de projets reseau, Wi-Fi, cablage structure, CCTV et support technique pour des ecoles et clients commerciaux.",
      },
      {
        title: "64+ cameras sur un projet scolaire majeur",
        description:
          "Deploiement de 64+ cameras CCTV sur deux sites de Kwasi Oppong Schools avec l'infrastructure reseau associee.",
      },
      {
        title: "30+ points d'acces Ubiquiti deployes",
        description:
          "Deploiement et support de plus de 30 points d'acces Ubiquiti et de liaisons point-a-point sur campus.",
      },
      {
        title: "Reseau pour amphitheatre de 1 500 places",
        description:
          "Conception et mise en oeuvre de l'infrastructure LAN et Wi-Fi pour un grand amphitheatre universitaire.",
      },
      {
        title: "Field engineering en France",
        description:
          "Missions de rack-and-stack, remote hands, cablage, etiquetage, installation d'equipements reseau, points d'acces et support poste de travail en France.",
      },
    ],
    services: [
      {
        title: "Infrastructure reseau",
        description:
          "LAN/WAN, switching, routing, Wi-Fi, cablage structure, rack-and-stack et deploiement de points d'acces.",
        icon: "Network",
      },
      {
        title: "Administration systeme",
        description:
          "Windows Server, Active Directory, Group Policy, Microsoft 365, sauvegardes et support de virtualisation.",
        icon: "Server",
      },
      {
        title: "Field engineering et Remote Hands",
        description:
          "Interventions sur site, remplacement materiel, cablage, etiquetage, installation d'equipements et validation sous supervision distante.",
        icon: "Wrench",
      },
      {
        title: "Ingenierie Wi-Fi",
        description:
          "Deploiement et depannage Wi-Fi avec Ubiquiti et infrastructures de points d'acces d'entreprise.",
        icon: "Wifi",
      },
      {
        title: "Support technique",
        description:
          "Support L1/L2 postes et infrastructure, depannage, deploiement d'equipements, coordination fournisseurs et documentation.",
        icon: "Headphones",
      },
      {
        title: "CCTV et systemes de securite",
        description:
          "Installation CCTV et integration avec les infrastructures LAN/Wi-Fi pour ecoles et environnements commerciaux.",
        icon: "Camera",
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
    certificationsTitle: "Certifications & Training",
    academicLabel: "Academic",
    educationTitle: "Education",
    communicationLabel: "Communication",
    languagesTitle: "Languages",
    impactLabel: "Impact",
    achievementsTitle: "Key Achievements",
    achievementsSubtitle:
      "Selected infrastructure and support achievements from academic, healthcare, commercial and field-engineering environments.",
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
    certificationsTitle: "Certifications et formations",
    academicLabel: "Academique",
    educationTitle: "Formation",
    communicationLabel: "Communication",
    languagesTitle: "Langues",
    impactLabel: "Impact",
    achievementsTitle: "Realisations cles",
    achievementsSubtitle:
      "Principales realisations en infrastructure, support, sante, education et field engineering.",
  },
} as const;

export function getProfileData(language: Language) {
  return profileDataByLanguage[language];
}

export function getProfilePageCopy(language: Language) {
  return profilePageCopyByLanguage[language];
}
