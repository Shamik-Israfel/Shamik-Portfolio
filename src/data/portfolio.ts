export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "iot" | "ai" | "web";
  categoryLabel: string;
  description: string;
  extendedDetails: string;
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: "emerald" | "cyan" | "violet" | "amber";
}

export interface Publication {
  id: string;
  title: string;
  year: string;
  conference: string;
  role: string;
  type: "Conference" | "Journal";
  summary: string;
  topics: string[];
  bibtex?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string }[];
}

export interface AchievementItem {
  organization: string;
  role: string;
  description: string;
  badge?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  status: string;
  badge: string;
}

export const portfolioData = {
  personal: {
    name: "Shamik Mondal",
    badge: "Available for Engineering & Research Roles",
    headline: "IoT Engineer · Web Developer · AI & Image Processing",
    tagline: "Building intelligent systems at the intersection of software, AI, IoT and robotics.",
    location: "Dhaka, Bangladesh",
    email: "shamik8880@gmail.com",
    phone: "+880 1947884609",
    github: "https://github.com/Shamik-Israfel",
    githubUsername: "Shamik-Israfel",
    linkedin: "https://linkedin.com/in/shamik-mondal",
    linkedinUsername: "Shamik Mondal",
    resumePdfUrl: "/resume.pdf",
    avatarUrl: "/shamik-mondal.jpg",
    summary:
      "Interdisciplinary Computer Science & Engineering graduate with strong expertise in software development, IoT, robotics, and AI-driven automation. Published conference and journal researcher in autonomous rescue systems, cyber-physical architectures, and computer vision. Experienced in IEEE leadership, technical logistics, and community impact. Driven by technology for social good, climate action, and real-world intelligent systems.",
    education: {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Independent University Bangladesh",
      period: "2022 – 2026",
      cgpa: "3.4",
      pastEducation: [
        { exam: "Higher Secondary Certificate (HSC)", board: "Chittagong Board", period: "2018 - 2020" },
        { exam: "Secondary School Certificate (SSC)", board: "Chittagong Board", period: "2017 - 2018" },
      ]
    },
    stats: [
      { label: "Research Publications", value: "7+" },
      { label: "Engineered Projects", value: "12+" },
      { label: "CSE Degree CGPA", value: "3.4" },
      { label: "IEEE Leadership Roles", value: "2" },
    ]
  },

  experiences: [
    {
      id: "top-pay",
      role: "Data Analyst",
      company: "Top Pay Service Ltd.",
      period: "May 2026 – Present",
      type: "Full-time",
      isCurrent: true,
      description: [
        "Engineering enterprise business intelligence dashboards and operational performance indicators using Power BI.",
        "Synthesizing transaction flow and user behavior metrics across relational tables and Microsoft Excel workbooks.",
        "Optimizing cross-department customer escalation pipelines and resolution tracking via Zendesk."
      ],
      skills: ["Power BI", "Microsoft Office", "Microsoft Excel", "Zendesk", "Data Visualization"]
    },
    {
      id: "ibizn",
      role: "Web Developer",
      company: "IBIZN",
      period: "Jan 2026 – Apr 2026",
      type: "Contractual",
      isCurrent: false,
      description: [
        "Engineered scalable web applications and modular UI components utilizing Next.js and Tailwind CSS.",
        "Developed resilient server-side REST APIs and database integrations using PHP and Laravel.",
        "Collaborated with product teams to streamline client delivery schedules and improve site load benchmarks."
      ],
      skills: ["PHP", "Laravel", "Next.js", "JavaScript", "Tailwind CSS", "REST APIs"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "rescue-bot",
      title: "Low-Cost AI-Driven Autonomous Rescue Bot",
      subtitle: "Water-based life-saving missions & emergency response",
      category: "iot",
      categoryLabel: "IoT & Robotics",
      description: "Autonomous robotics system engineered for water-based rescue missions, deploying computer vision for victim detection and automated GPS navigation.",
      extendedDetails: "Designed to eliminate expensive hardware barriers in flood and aquatic rescue operations. Employs lightweight computer vision algorithms on an embedded edge compute board paired with waterproof propulsion motors, acoustic transceivers, and telemetry backhaul. Capable of autonomous victim tracking, buoyancy payload release, and emergency beacon broadcasting.",
      tags: ["Embedded C++", "Python", "OpenCV", "YOLO", "GPS", "Autonomous Systems", "Sensors"],
      metrics: "Published in CCE 2025",
      githubUrl: "https://github.com/Shamik-Israfel/autonomous-rescue-bot",
      featured: true,
      accentColor: "cyan"
    },
    {
      id: "gomonika",
      title: "Gomonika",
      subtitle: "Privacy-preserving cultural-linguistic authentication",
      category: "ai",
      categoryLabel: "AI & Autonomous Systems",
      description: "Privacy-preserving cultural-linguistic authentication framework engineered for autonomous delivery fleets in low-resource environments.",
      extendedDetails: "Solves the critical last-mile recipient verification challenge in remote areas without relying on invasive biometric scanning or central identity registries. Uses decentralized cryptographic verification coupled with localized dialectal and cultural interaction protocols, protecting user privacy while guaranteeing tamper-resistant consignment handoff.",
      tags: ["Python", "Privacy AI", "Cryptography", "Edge Computing", "Speech NLP", "Autonomous Fleet"],
      metrics: "IEEE IE2C 2026",
      githubUrl: "https://github.com/Shamik-Israfel/gomonika-auth",
      featured: true,
      accentColor: "violet"
    },
    {
      id: "ethno-swarm",
      title: "Ethno-Swarm",
      subtitle: "Culturally adaptive waste management cyber-physical system",
      category: "iot",
      categoryLabel: "Cyber-Physical Systems",
      description: "Cognitive cyber-physical system utilizing swarm robotics for culturally adaptive waste classification and dynamic routing in high-density urban enclaves.",
      extendedDetails: "Integrates ultrasonic fill sensors, weight sensors, and edge vision nodes to monitor micro-dumping spots in dense residential zones. Coordinated swarm agents dynamically reroute municipal disposal units based on localized social rituals, festival timelines, and real-time accumulation forecasts.",
      tags: ["Swarm Intelligence", "ROS", "Microcontroller Network", "IoT Telemetry", "Machine Learning"],
      metrics: "Presented at CCE 2026",
      githubUrl: "https://github.com/Shamik-Israfel/ethno-swarm",
      featured: true,
      accentColor: "emerald"
    },
    {
      id: "braille-for-all",
      title: "Braille for All",
      subtitle: "$70 AI-powered tactile & vocal Braille tutoring robot",
      category: "iot",
      categoryLabel: "Robotics & Assistive Tech",
      description: "Ultra-affordable AI-powered Braille tutoring robot that bridges the visual literacy gap through tactile electro-mechanical pins and bilingual voice feedback.",
      extendedDetails: "Designed to make Braille literacy accessible to low-income communities. Uses custom solenoid-driven dynamic Braille cell arrays, capacitive touch recognition, and speech synthesis. The adaptive learning module tracks student mastery, provides vocal reinforcement, and gamifies letter formation exercises.",
      tags: ["Arduino", "ESP32", "Speech Recognition", "Tactile Haptics", "Assistive AI", "3D Modeling"],
      metrics: "Cost < $70 · CCE 2026",
      githubUrl: "https://github.com/Shamik-Israfel/braille-for-all-robot",
      featured: true,
      accentColor: "amber"
    },
    {
      id: "krishighor",
      title: "KrishiGhor",
      subtitle: "AI direct-trade agriculture & blockchain supply chain",
      category: "web",
      categoryLabel: "Web & AI Platform",
      description: "AI-driven agricultural commerce platform enabling transparent crop valuation, direct producer-to-buyer trade, and blockchain provenance tracking.",
      extendedDetails: "Smallholder farmers upload photos of harvested produce for instantaneous computer-vision quality grading and market price forecasting. Smart contract escrows ensure immediate payout upon buyer delivery inspection, bypassing predatory middlemen and guaranteeing fair agricultural margins.",
      tags: ["Next.js", "Python", "Computer Vision", "Blockchain", "Smart Contracts", "PostgreSQL", "Tailwind CSS"],
      metrics: "Presented at CCE 2026",
      githubUrl: "https://github.com/Shamik-Israfel/krishighor-platform",
      featured: true,
      accentColor: "emerald"
    },
    {
      id: "bengali-handwriting",
      title: "Bengali Handwriting Quality Assessment",
      subtitle: "Hybrid CNN-LSTM & multi-resolution computer vision",
      category: "ai",
      categoryLabel: "Computer Vision & AI",
      description: "Novel deep learning architectures combining multi-resolution CNN filters and recurrent LSTM networks for automated Bengali handwriting legibility scoring.",
      extendedDetails: "Pioneered a robust evaluation benchmark tested across heavily augmented indigenous datasets. The system extracts multi-scale spatial strokes and recurrent directional sequences to evaluate stroke continuity, character baseline uniformity, and glyph correctness for digital education platforms.",
      tags: ["PyTorch", "CNN-LSTM", "OpenCV", "Feature Integration", "Data Augmentation", "Image Processing"],
      metrics: "ICACT 2026 & OMLET 2026",
      githubUrl: "https://github.com/Shamik-Israfel/bengali-handwriting-assessment",
      featured: true,
      accentColor: "violet"
    },
    {
      id: "mobile-garage",
      title: "Mobile Garage",
      subtitle: "Full-stack MERN electronics resale marketplace",
      category: "web",
      categoryLabel: "Web Development",
      description: "MERN-stack circular commerce platform with multi-tier role authorization, Firebase authentication, and Stripe escrow payments.",
      extendedDetails: "Includes customized interfaces for buyers, verified refurbished hardware merchants, and platform administrators. Built with secure JWT sessions, automated transaction receipts, live inventory queries, and dispute arbitration tools.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "Stripe", "JWT"],
      metrics: "Full-Stack Production Ready",
      githubUrl: "https://github.com/Shamik-Israfel/mobile-garage",
      featured: false,
      accentColor: "cyan"
    }
  ] as Project[],

  publications: [
    {
      id: "pub-cce-2025",
      title: "Low-Cost AI-Driven Autonomous Rescue Bot for Water-Based Life-Saving Missions",
      year: "2025",
      conference: "22nd Int'l Conf. on Electrical Engineering, Computing Science and Automatic Control (CCE)",
      role: "Lead Researcher",
      type: "Conference",
      summary: "Introduces an autonomous low-cost robotic watercraft system utilizing embedded computer vision and automated waypoint navigation to rescue drowning victims in flood emergencies.",
      topics: ["Autonomous Robotics", "Water Rescue", "Embedded Computer Vision", "Emergency Response"],
      bibtex: `@inproceedings{mondal2025rescuebot,
  author = {Mondal, Shamik and collaborators},
  title = {Low-Cost AI-Driven Autonomous Rescue Bot for Water-Based Life-Saving Missions},
  booktitle = {Proceedings of the 22nd International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE)},
  year = {2025}
}`
    },
    {
      id: "pub-ie2c-2026",
      title: "Gomonika: A Privacy-Preserving Cultural-Linguistic Authentication Framework for Autonomous Delivery in Low-Resource Environments",
      year: "2026",
      conference: "2026 IEEE Int'l Conf. on Innovation, Ethics & Emerging Tech in Engineering and Computing Education (IE2C)",
      role: "Lead Researcher",
      type: "Conference",
      summary: "Proposes an identity-verification framework combining localized cultural-linguistic speech tokens with privacy-preserving cryptography for autonomous delivery drones and vehicles.",
      topics: ["Privacy-Preserving AI", "Autonomous Delivery", "Cultural Computing", "Edge Verification"],
      bibtex: `@inproceedings{mondal2026gomonika,
  author = {Mondal, Shamik and collaborators},
  title = {Gomonika: A Privacy-Preserving Cultural-Linguistic Authentication Framework for Autonomous Delivery in Low-Resource Environments},
  booktitle = {2026 IEEE International Conference on Innovation, Ethics & Emerging Technologies (IE2C)},
  year = {2026}
}`
    },
    {
      id: "pub-cce-2026-swarm",
      title: "Ethno-Swarm: A Cognitive-Cyber-Physical System for Culturally Adaptive Waste Management in High-Density Urban Enclaves",
      year: "2026",
      conference: "23rd Int'l Conf. on Electrical Engineering, Computing Science and Automatic Control (CCE)",
      role: "Lead Researcher",
      type: "Conference",
      summary: "Formulates a distributed cyber-physical swarm architecture that dynamically adapts municipal sanitation routing based on real-time sensor streams and localized socio-cultural waste generation patterns.",
      topics: ["Cyber-Physical Systems", "Swarm Robotics", "Urban Waste Management", "IoT Optimization"],
      bibtex: `@inproceedings{mondal2026ethnoswarm,
  author = {Mondal, Shamik and collaborators},
  title = {Ethno-Swarm: A Cognitive-Cyber-Physical System for Culturally Adaptive Waste Management in High-Density Urban Enclaves},
  booktitle = {Proceedings of the 23rd International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE)},
  year = {2026}
}`
    },
    {
      id: "pub-cce-2026-braille",
      title: "Braille for All: A $70 AI-Powered Braille Tutoring Robot That Erases the Literacy Gap with a Touch and a Voice",
      year: "2026",
      conference: "23rd Int'l Conf. on Electrical Engineering, Computing Science and Automatic Control (CCE)",
      role: "Lead Researcher",
      type: "Conference",
      summary: "Details the mechanical and embedded software architecture of an ultra-low-cost assistive tutor that teaches Braille literacy through synchronized tactile actuation and voice feedback.",
      topics: ["Assistive Robotics", "Human-Robot Interaction", "Embedded AI", "Inclusive Education"],
      bibtex: `@inproceedings{mondal2026braille,
  author = {Mondal, Shamik and collaborators},
  title = {Braille for All: A $70 AI-Powered Braille Tutoring Robot That Erases the Literacy Gap with a Touch and a Voice},
  booktitle = {Proceedings of the 23rd International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE)},
  year = {2026}
}`
    },
    {
      id: "pub-cce-2026-krishi",
      title: "KrishiGhor: An AI-Powered Direct Trade Platform with Transparent Crop Pricing and Blockchain-Integrated Supply Chain for Smallholder Farmers",
      year: "2026",
      conference: "23rd Int'l Conf. on Electrical Engineering, Computing Science and Automatic Control (CCE)",
      role: "Lead Researcher",
      type: "Conference",
      summary: "Presents an end-to-end decentralized agricultural trade system integrating computer-vision crop grading, algorithmic price discovery, and immutable ledger settlement.",
      topics: ["AgriTech", "Blockchain", "Crop Quality Vision", "Decentralized Supply Chain"],
      bibtex: `@inproceedings{mondal2026krishighor,
  author = {Mondal, Shamik and collaborators},
  title = {KrishiGhor: An AI-Powered Direct Trade Platform with Transparent Crop Pricing and Blockchain-Integrated Supply Chain for Smallholder Farmers},
  booktitle = {Proceedings of the 23rd International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE)},
  year = {2026}
}`
    },
    {
      id: "pub-icact-2026",
      title: "A Hybrid CNN-LSTM Framework for Bengali Handwriting Quality Assessment with Augmented Dataset",
      year: "2026",
      conference: "3rd International Conference on Advanced Computing Technologies (ICACT)",
      role: "Lead Researcher",
      type: "Conference",
      summary: "Explores sequential temporal strokes and convolutional spatial features to automate objective quality assessment of written Bengali characters.",
      topics: ["CNN-LSTM", "Document Analysis", "Bengali OCR", "Deep Learning"],
      bibtex: `@inproceedings{mondal2026cnnlstm,
  author = {Mondal, Shamik and collaborators},
  title = {A Hybrid CNN-LSTM Framework for Bengali Handwriting Quality Assessment with Augmented Dataset},
  booktitle = {3rd International Conference on Advanced Computing Technologies (ICACT)},
  year = {2026}
}`
    },
    {
      id: "pub-omlet-2026",
      title: "Multi-Resolution Feature Integration Framework with CNN for Bengali Handwriting Quality Assessment",
      year: "2026",
      conference: "2026 IEEE International Conference on Optics, Machine Learning and Emerging Technology (OMLET)",
      role: "Lead Researcher",
      type: "Conference",
      summary: "Proposes a multi-resolution receptive field CNN architecture that captures both fine pen stroke dynamics and global glyph geometries for accurate handwriting grading.",
      topics: ["Multi-Resolution CNN", "Machine Learning", "Image Quality Assessment", "Pattern Recognition"],
      bibtex: `@inproceedings{mondal2026multires,
  author = {Mondal, Shamik and collaborators},
  title = {Multi-Resolution Feature Integration Framework with CNN for Bengali Handwriting Quality Assessment},
  booktitle = {2026 IEEE International Conference on Optics, Machine Learning and Emerging Technology (OMLET)},
  year = {2026}
}`
    }
  ] as Publication[],

  skillsData: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Java" },
        { name: "JavaScript (ES6+)" },
        { name: "PHP" },
        { name: "Python" },
        { name: "C / C++ (Embedded)" },
        { name: "SQL" }
      ]
    },
    {
      title: "Frameworks & Full-Stack",
      icon: "Layers",
      skills: [
        { name: "Next.js" },
        { name: "React.js" },
        { name: "Tailwind CSS" },
        { name: "Django" },
        { name: "Laravel" },
        { name: "Node.js" },
        { name: "Express.js" }
      ]
    },
    {
      title: "Databases, Cloud & Dev Tools",
      icon: "Database",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Git & GitHub" },
        { name: "Vercel & Netlify" },
        { name: "Power BI" },
        { name: "Figma & Canva" },
        { name: "VS Code" },
        { name: "Firebase" },
        { name: "Stripe API" }
      ]
    },
    {
      title: "AI & Image Processing",
      icon: "Cpu",
      skills: [
        { name: "Computer Vision" },
        { name: "Image Processing" },
        { name: "YOLO Object & Human Detection" },
        { name: "CNN & LSTM Frameworks" },
        { name: "PyTorch & OpenCV" },
        { name: "Data Augmentation" }
      ]
    },
    {
      title: "Hardware, IoT & Robotics",
      icon: "Radio",
      skills: [
        { name: "IoT Device Integration" },
        { name: "Robotics & Mechatronics" },
        { name: "Embedded Systems (Sensor Integration)" },
        { name: "Autonomous Systems Design" },
        { name: "Arduino / ESP32" },
        { name: "Microcontroller Telemetry" }
      ]
    }
  ] as SkillCategory[],

  achievements: [
    {
      organization: "IEEE Computer Society – IUB Student Branch Chapter",
      role: "Former Joint Secretary, Head of Logistics",
      description: "Directed technical logistics, coordinated inter-university hackathons, and facilitated computing workshops across the university community.",
      badge: "Leadership"
    },
    {
      organization: "Bengal Legions",
      role: "Former Crew Member",
      description: "Collaborated in competitive robotics development, field testing, and multidisciplinary engineering challenges.",
      badge: "Robotics Crew"
    },
    {
      organization: "Kashful Foundation",
      role: "Associate",
      description: "Supported community outreach, educational access initiatives, and social welfare field operations.",
      badge: "Community & Social Good"
    }
  ] as AchievementItem[],

  certifications: [
    {
      title: "Google Project Management Professional Certificate",
      issuer: "Google / Coursera",
      status: "In Progress",
      badge: "Professional Certification"
    },
    {
      title: "CCNA: Introduction to Networks Certificate",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      badge: "Networking Fundamentals"
    },
    {
      title: "The Complete Web Development Course",
      issuer: "Programming Hero",
      status: "Certified Black Belt",
      badge: "Full-Stack Development"
    }
  ] as CertificateItem[],

  languages: [
    { name: "Bangla", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working" },
    { name: "Hindi", proficiency: "Conversational" }
  ],

  academicReferences: [
    {
      name: "Md. Rashedur Rahman, D. Eng.",
      title: "Assistant Professor",
      institution: "Independent University Bangladesh",
      emails: ["rashed@iub.edu.bd", "rashed.riyadh14@gmail.com"]
    },
    {
      name: "Rizwan Chowdhury",
      title: "Assistant Manager, Brand",
      institution: "Meghna Group of Industries, Dhaka",
      emails: ["rizwan.siam@mgi.org"]
    }
  ]
};
