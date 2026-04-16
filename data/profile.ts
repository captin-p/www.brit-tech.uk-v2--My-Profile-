import type { Language } from "@/lib/i18n";

const profileDataByLanguage = {
  en: {
    profile: {
      name: "Bright Konadu",
      title: "Network Infrastructure Specialist",
      roles: [
        "Network Infrastructure Specialist",
        "Systems Support Lead",
        "IT Technician",
        "Graphic Designer",
      ],
      location: "Dijon, France",
      email: "konadubright024@gmail.com",
      phone: "+33 7 59 50 78 77",
      linkedin: "https://www.linkedin.com/in/bright-konadu",
      github: "https://github.com/captin-p",
      image: "/images/profile/bright-konadu.jpg",
      summary:
        "With over 6 years of experience in enterprise IT, demonstrates a strong record of delivering infrastructure solutions across education, healthcare, and commercial environments. Proven ability to support large-scale projects serving over 1,000 users, with hands-on expertise in Cisco and Ubiquiti deployments, CCTV security systems, Windows Server administration, and Active Directory. Maintains a professional approach, with openness to further study, research, and the adoption of emerging technologies and industry best practices.",
      about: [
        "I design, deploy, and maintain network infrastructure that organisations rely on every day. From campus-wide Wi-Fi rollouts and hospital LAN builds to enterprise Windows Server environments, I bring structured thinking and hands-on delivery to every project.",
        "Across universities, hospitals, and commercial clients in Ghana, I have led infrastructure work from scoping through live deployment and ongoing support. I founded Bright Ko Technology to deliver end-to-end IT and security solutions for schools and businesses.",
        "Alongside infrastructure, I have built a parallel freelance graphic design practice spanning book covers, event banners, social media campaigns, and marketing materials. That mix of technical depth and creative execution helps me support clients across both operations and brand presence.",
      ],
    },
    stats: [
      { value: "6+", label: "Years of experience" },
      { value: "10+", label: "Major projects delivered" },
      { value: "1,000+", label: "Users supported" },
      { value: "50+", label: "Security cameras installed" },
      { value: "99.5%", label: "Network uptime achieved" },
      { value: "100%", label: "Client satisfaction" },
    ],
    experience: [
      {
        id: "hospital",
        role: "IT Technician & NHIS Claims Officer",
        company: "Sunyani Road Church of Christ Mission Hospital",
        location: "Kumasi, Ghana",
        period: "Oct 2024 - Sept 2025",
        type: "Part-time",
        bullets: [
          "Designed and implemented the hospital LAN from the ground up to support reliable connectivity for critical healthcare operations.",
          "Deployed network equipment, structured cabling, and Wi-Fi systems across the full facility.",
          "Managed NHIS claims processing with the ClaimIt application, including data entry and healthcare documentation.",
          "Provided day-to-day technical support while maintaining zero downtime for patient care systems.",
        ],
      },
      {
        id: "aamusted",
        role: "IT Technician - Infrastructure & Finance",
        company: "Akenten Appiah Menka University (AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "Aug 2022 - Sept 2025",
        type: "Full-time",
        bullets: [
          "Managed IT infrastructure supporting 500+ users across multiple campus buildings, including servers, networks, and telecommunications.",
          "Deployed 30+ Ubiquiti access points and 5 M5 point-to-point links, improving wireless coverage by 85% and reliability by 60%.",
          "Designed and implemented the LAN and Wi-Fi network for a 1,500-seat lecture block, delivering 99.5% uptime.",
          "Administered Windows Server environments with Active Directory for 300+ users, including group policies and security configuration.",
          "Resolved Sisco Topaz financial software issues with a 95% first-call resolution rate.",
          "Handled system patching, backups, and disaster recovery with zero data loss.",
        ],
      },
      {
        id: "brightko",
        role: "Founder & Lead Technician",
        company: "Bright Ko Technology",
        location: "Kumasi, Ghana",
        period: "2019 - Present",
        type: "Self-employed",
        bullets: [
          "Built and operated an IT solutions company delivering network infrastructure and security systems for educational and commercial clients.",
          "Kwasi Oppong Schools: deployed a 32-camera CCTV system, complete Wi-Fi infrastructure, and a structured LAN network.",
          "Ghanaian German International School: installed Arlo security cameras with integrated Wi-Fi and LAN connectivity.",
          "Lucienne Community School: implemented a full Wi-Fi and LAN solution.",
          "Delivered 10+ infrastructure projects on time and within budget with 100% client satisfaction.",
        ],
      },
      {
        id: "aamusted-ns",
        role: "IT Technician (National Service)",
        company: "Akenten Appiah Menka University (AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "Sept 2021 - Aug 2022",
        type: "National Service",
        bullets: [
          "Configured Cisco network equipment across 15+ campus locations, reducing downtime by 35%.",
          "Administered Windows Server and Active Directory for 300+ user accounts.",
          "Provided tier 1 and tier 2 technical support, resolving an average of 25+ tickets each week.",
          "Installed VoIP equipment for conference rooms and performed network troubleshooting.",
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
          "Designed and implemented LAN infrastructure for SME clients, improving system performance by 40%.",
          "Diagnosed hardware and software issues while managing network configuration with minimal downtime.",
          "Managed firewall settings and IT security protocols for financial and business applications.",
          "Explained technical issues in client-friendly language and built strong long-term relationships.",
        ],
      },
    ],
    skillGroups: [
      {
        category: "Networks & Infrastructure",
        skills: [
          "Cisco Routing & Switching",
          "Ubiquiti UniFi / M5",
          "LAN/WAN Design",
          "TCP/IP, VPN, VLAN",
          "Wi-Fi Deployment",
          "Structured Cabling",
          "Fibre & Copper Testing",
          "Network Monitoring",
        ],
      },
      {
        category: "Systems & Security",
        skills: [
          "Windows Server 2012/2016/2019",
          "Active Directory",
          "Group Policy",
          "CCTV Installation (Hikvision, Dahua, Arlo, Sannce)",
          "IT Security Policies",
          "Cybersecurity & Ethical Hacking",
          "Firewall Configuration",
          "System Backups & Disaster Recovery",
        ],
      },
      {
        category: "Tools & Platforms",
        skills: [
          "SCOM/SCCM",
          "PuTTY",
          "IP Subnet Calculator",
          "Git / GitHub",
          "Wireshark",
          "Nmap",
          "ping",
          "traceroute (tracert)",
          "nslookup/dig",
          "Microsoft 365",
          "NHIS ClaimIt (Healthcare)",
          "Zoom / Teams",
          "Windows 10/11",
        ],
      },
      {
        category: "Design & Creative",
        skills: [
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
        degree: "BSc. Information Technology Education",
        institution: "University of Education, Winneba",
        country: "Ghana",
        period: "2017 - 2021",
      },
    ],
    languages: [
      { language: "English", level: "Official language" },
      { language: "French", level: "A1 (currently improving toward A2)" },
      { language: "Twi", level: "Native" },
    ],
    achievements: [
      {
        title: "Founded IT Business",
        description:
          "Built and operated Bright Ko Technology for 5+ years with 100% client retention across educational and commercial sectors.",
      },
      {
        title: "1,000+ Users Served",
        description:
          "Deployed infrastructure supporting over 1,000 users across educational and healthcare facilities.",
      },
      {
        title: "50+ Cameras Installed",
        description:
          "Installed and configured 50+ security cameras with integrated network systems across multiple facilities.",
      },
      {
        title: "99.5% Network Uptime",
        description:
          "Achieved 99.5% network uptime in enterprise environments through proactive monitoring and maintenance.",
      },
      {
        title: "10+ Major Projects",
        description:
          "Delivered 10+ major infrastructure projects, including campus-wide networks and hospital builds, on time and within budget.",
      },
      {
        title: "60% Fewer Network Issues",
        description:
          "Reduced network-related issues by 60% through systematic troubleshooting and preventive maintenance.",
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
          "Full CCTV installation and configuration integrated with network infrastructure using Hikvision, Dahua, Arlo, and Sannce.",
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
        "Responsable support systemes",
        "Technicien IT",
        "Graphiste",
      ],
      location: "Dijon, France",
      email: "konadubright024@gmail.com",
      phone: "+33 7 59 50 78 77",
      linkedin: "https://www.linkedin.com/in/bright-konadu",
      github: "https://github.com/captin-p",
      image: "/images/profile/bright-konadu.jpg",
      summary:
        "Specialiste en infrastructure reseau avec plus de 6 ans d'experience dans la mise en oeuvre de solutions IT pour les secteurs de l'education, de la sante et des entreprises. Fondateur d'une societe IT ayant pilote des projets d'infrastructure de bout en bout pour plus de 1 000 utilisateurs. Solide experience pratique en deploiement CCNA, Cisco et Ubiquiti, systemes CCTV, administration Windows Server et Active Directory.",
      about: [
        "Je conçois, deploie et maintiens des infrastructures reseau dont les organisations dependent chaque jour. Des deploiements Wi-Fi sur campus aux reseaux LAN hospitaliers, jusqu'aux environnements Windows Server d'entreprise, j'apporte une approche structuree et une execution terrain a chaque projet.",
        "Au sein d'universites, d'hopitaux et de clients commerciaux au Ghana, j'ai mene des projets d'infrastructure depuis le cadrage jusqu'au deploiement en production et au support continu. J'ai fonde Bright Ko Technology pour fournir des solutions IT et de securite de bout en bout aux ecoles et aux entreprises.",
        "En parallele de l'infrastructure, j'ai developpe une activite freelance en design graphique couvrant les couvertures de livres, les bannieres d'evenement, les campagnes reseaux sociaux et les supports marketing. Ce melange de profondeur technique et d'execution creative me permet d'accompagner les clients aussi bien sur l'operationnel que sur l'image de marque.",
      ],
    },
    stats: [
      { value: "6+", label: "Annees d'experience" },
      { value: "10+", label: "Projets majeurs livres" },
      { value: "1,000+", label: "Utilisateurs accompagnes" },
      { value: "50+", label: "Cameras installees" },
      { value: "99.5%", label: "Disponibilite reseau" },
      { value: "100%", label: "Satisfaction client" },
    ],
    experience: [
      {
        id: "hospital",
        role: "Technicien IT et agent des demandes NHIS",
        company: "Sunyani Road Church of Christ Mission Hospital",
        location: "Kumasi, Ghana",
        period: "oct. 2024 - sept. 2025",
        type: "Temps partiel",
        bullets: [
          "Conception et mise en place du reseau LAN de l'hopital depuis zero afin d'assurer une connectivite fiable pour les operations de soins critiques.",
          "Deploiement des equipements reseau, du cablage structure et des systemes Wi-Fi dans l'ensemble du site.",
          "Gestion du traitement des demandes NHIS avec l'application ClaimIt, y compris la saisie de donnees et la documentation medicale.",
          "Support technique quotidien avec maintien d'un zero interruption pour les systemes de prise en charge des patients.",
        ],
      },
      {
        id: "aamusted",
        role: "Technicien IT - Infrastructure et finance",
        company: "Akenten Appiah Menka University (AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "aout 2022 - sept. 2025",
        type: "Temps plein",
        bullets: [
          "Gestion de l'infrastructure IT pour plus de 500 utilisateurs sur plusieurs batiments du campus, y compris serveurs, reseaux et telecommunications.",
          "Deploiement de plus de 30 points d'acces Ubiquiti et de 5 liaisons point a point M5, avec une amelioration de 85 % de la couverture et de 60 % de la fiabilite.",
          "Conception et mise en oeuvre du reseau LAN et Wi-Fi d'un amphitheatre de 1 500 places avec 99,5 % de disponibilite.",
          "Administration d'environnements Windows Server avec Active Directory pour plus de 300 utilisateurs, y compris les strategies de groupe et la configuration de securite.",
          "Resolution des incidents sur le logiciel financier Sisco Topaz avec un taux de resolution au premier contact de 95 %.",
          "Gestion des correctifs, des sauvegardes et de la reprise apres sinistre avec zero perte de donnees.",
        ],
      },
      {
        id: "brightko",
        role: "Fondateur et technicien principal",
        company: "Bright Ko Technology",
        location: "Kumasi, Ghana",
        period: "2019 - aujourd'hui",
        type: "Independant",
        bullets: [
          "Creation et gestion d'une entreprise de solutions IT livrant des infrastructures reseau et des systemes de securite pour des clients educatifs et commerciaux.",
          "Kwasi Oppong Schools : deploiement d'un systeme CCTV de 32 cameras, d'une infrastructure Wi-Fi complete et d'un reseau LAN structure.",
          "Ghanaian German International School : installation de cameras Arlo avec connectivite Wi-Fi et LAN integree.",
          "Lucienne Community School : mise en place d'une solution Wi-Fi et LAN complete.",
          "Realisation de plus de 10 projets d'infrastructure dans les delais et le budget, avec 100 % de satisfaction client.",
        ],
      },
      {
        id: "aamusted-ns",
        role: "Technicien IT (service national)",
        company: "Akenten Appiah Menka University (AAMUSTED)",
        location: "Kumasi, Ghana",
        period: "sept. 2021 - aout 2022",
        type: "Service national",
        bullets: [
          "Configuration d'equipements reseau Cisco sur plus de 15 sites du campus, reduisant les interruptions de 35 %.",
          "Administration de Windows Server et d'Active Directory pour plus de 300 comptes utilisateurs.",
          "Support technique de niveau 1 et 2 avec resolution de plus de 25 tickets par semaine.",
          "Installation d'equipements VoIP pour les salles de conference et depannage reseau.",
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
          "Conception et mise en place d'infrastructures LAN pour des PME, avec une amelioration de 40 % des performances systeme.",
          "Diagnostic des incidents materiels et logiciels et gestion de la configuration reseau avec un minimum d'interruptions.",
          "Gestion des regles firewall et des protocoles de securite IT pour des applications financieres et metier.",
          "Explication des sujets techniques dans un langage accessible et construction de relations clients durables.",
        ],
      },
    ],
    skillGroups: [
      {
        category: "Reseaux et infrastructure",
        skills: [
          "Cisco Routing & Switching",
          "Ubiquiti UniFi / M5",
          "Conception LAN/WAN",
          "TCP/IP, VPN, VLAN",
          "Deploiement Wi-Fi",
          "Cablage structure",
          "Tests fibre et cuivre",
          "Supervision reseau",
        ],
      },
      {
        category: "Systemes et securite",
        skills: [
          "Windows Server 2012/2016/2019",
          "Active Directory",
          "Group Policy",
          "Installation CCTV (Hikvision, Dahua, Arlo, Sannce)",
          "Politiques de securite IT",
          "Cybersécurité et ethical hacking",
          "Configuration firewall",
          "Sauvegardes systeme et reprise apres sinistre",
        ],
      },
      {
        category: "Outils et plateformes",
        skills: [
          "SCOM/SCCM",
          "PuTTY",
          "IP Subnet Calculator",
          "Git / GitHub",
          "Wireshark",
          "Nmap",
          "ping",
          "traceroute (tracert)",
          "nslookup/dig",
          "Microsoft 365",
          "NHIS ClaimIt (sante)",
          "Zoom / Teams",
          "Windows 10/11",
        ],
      },
      {
        category: "Design et creation",
        skills: [
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
        degree: "Licence en enseignement des technologies de l'information",
        institution: "University of Education, Winneba",
        country: "Ghana",
        period: "2017 - 2021",
      },
    ],
    languages: [
      { language: "Anglais", level: "Langue officielle" },
      { language: "Francais", level: "A1 (en progression vers A2)" },
      { language: "Twi", level: "Langue maternelle" },
    ],
    achievements: [
      {
        title: "Creation d'une entreprise IT",
        description:
          "Creation et gestion de Bright Ko Technology pendant plus de 5 ans, avec 100 % de retention client dans les secteurs educatifs et commerciaux.",
      },
      {
        title: "1 000+ utilisateurs accompagnes",
        description:
          "Deploiement d'infrastructures au service de plus de 1 000 utilisateurs dans des etablissements educatifs et de sante.",
      },
      {
        title: "50+ cameras installees",
        description:
          "Installation et configuration de plus de 50 cameras de securite avec integration reseau sur plusieurs sites.",
      },
      {
        title: "99,5 % de disponibilite reseau",
        description:
          "Obtention de 99,5 % de disponibilite reseau en environnement entreprise grace a une supervision proactive et une maintenance reguliere.",
      },
      {
        title: "10+ projets majeurs",
        description:
          "Livraison de plus de 10 projets d'infrastructure, y compris des reseaux de campus et des reseaux hospitaliers, dans les delais et le budget.",
      },
      {
        title: "60 % de problemes reseau en moins",
        description:
          "Reduction de 60 % des incidents reseau grace a un depannage methodique et a une maintenance preventive.",
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
          "Installation et configuration completes de systemes CCTV integres a l'infrastructure reseau avec Hikvision, Dahua, Arlo et Sannce.",
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
