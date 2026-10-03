import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Keval Trivedi",
    initials: "KT",
    role: "MERN Stack Developer & Software Engineer",
    secondaryRole: "Building Scalable Systems & High-Impact Web Applications",
    yearsOfExperience: "3+",
    location: "Ahmedabad, India",
    email: "kevaltrivedi1012@gmail.com", // [YOUR EMAIL] - Easy to update
    bio: "Software Engineer with 3+ years of professional experience specializing in the MERN stack, robust REST/GraphQL APIs, and high-performance web applications. Focused on engineering maintainable architectures, optimizing query performance, and turning complex product requirements into resilient, production-ready software.",
    shortIntro: "I'm a Software Engineer with 3+ years of experience building reliable, scalable, and user-focused applications. I enjoy solving complex engineering problems, designing clean architectures, and turning ideas into production-ready products.",
    philosophy: "I believe great software is defined by clarity, resilience, and user trust. Architecture should be as simple as possible, code should be clean and self-documenting, and performance should never be an afterthought.",
    passions: [
      "Distributed Backend Systems & Microservices",
      "High-Performance React & Next.js Web Architectures",
      "Database Schema Design & Query Optimization",
      "DevOps Automation & Developer Tooling",
    ],
    resumeUrl: "/resume.pdf", // [RESUME URL] - Point to your PDF or Google Drive
    avatarUrl: "/images/profile.jpg",
    availabilityStatus: "Open to new engineering opportunities & collaborations",
    stats: {
      yearsExperience: "3+",
      projectsBuilt: "15+", // 5, 3, 2, 4
      technologiesCount: "12+",
      productionApps: "10+",
      uptimeCommitment: "99.9%",
    },
    social: {
      github: "https://github.com/Keval1012", // [GITHUB URL]
      linkedin: "https://linkedin.com/in/keval-trivedi-2945111a9", // [LINKEDIN URL]
      email: "mailto:kevaltrivedi1012@gmail.com",
      twitter: "https://twitter.com/kevaltrivedi",
    },
  },

  skills: [
    {
      category: "Languages",
      description: "Core programming languages for system logic, algorithms, and scripting.",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "DOM", level: "Intermediate" },
      ],
    },
    {
      category: "Frontend",
      description: "Modern component-driven web frameworks, styling engines, and UI libraries.",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "jQuery", level: "Intermediate" },
        { name: "TanStack Query", level: "Advanced" },
      ],
    },
    {
      category: "Backend",
      description: "Robust server runtimes, RESTful architectures, and microservice APIs.",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "GraphQL", level: "Advanced" },
        { name: "Sequelize", level: "Advanced" },
      ],
    },
    {
      category: "Databases",
      description: "Relational, document, and in-memory databases with index optimization.",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
      ],
    },
    {
      category: "Cloud & DevOps",
      description: "Containerization, cloud infrastructure, and CI/CD automated deployment pipelines.",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" },
        { name: "Jenkins", level: "Intermediate" },
      ],
    },
    {
      category: "Tools",
      description: "Engineering developer tools, version control, profiling, and collaboration.",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
      ],
    },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      company: "WEDOWEBAPPS PVT LTD",
      location: "Ahmedabad, India",
      type: "Full-time",
      startDate: "May'25",
      endDate: "Present",
      summary:
        "Spearheaded full-stack development using React.js, Next.js, Node.js, and Magento to build responsive, high-performance applications for e-commerce and service-based websites. Focused on seamless UX, website optimization, and integrating modern frontends with scalable backend architectures.",
      keyResponsibilities: [
        "Architect and deliver responsive, high-performance applications for diverse e-commerce and service-based platforms using React.js, Next.js, and Node.js.",
        "Integrate modern frontend interfaces with scalable backend services and Magento APIs, ensuring smooth data flow and seamless UX.",
        "Implement comprehensive website optimization strategies across rendering, asset loading, and server-side responses to elevate performance scores.",
        "Engineer robust RESTful APIs and backend services in Node.js while maintaining modular frontend codebases.",
        "Collaborate cross-functionally with product managers, UX designers, and QA engineers to translate complex business requirements into intuitive UI/UX and resilient software systems.",
      ],
      measurableAchievements: [
        "Boosted Core Web Vitals and overall website optimization, achieving a 40% reduction in page load times across flagship e-commerce platforms.",
        "Successfully integrated scalable backend endpoints and Magento architecture, improving checkout throughput and user conversion rates by 25%.",
        "Engineered responsive and accessible UI components that delivered a seamless UX across mobile and desktop devices, increasing average session duration by 30%.",
      ],
      technologies: ["React.js", "Next.js", "Node.js", "Express", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "TanStack Query", "GraphQL", "MongoDB", "MySQL", "PostgreSQL", "Sequelize", "Prisma", "Redis", "Jenkins", "Postman"],
    },
    {
      id: "exp-2",
      role: "React Js Developer",
      company: "CodeFencers Private Limited",
      location: "Ahmedabad, India",
      type: "Full-time",
      startDate: "Jul'24",
      endDate: "May'25",
      summary:
        "Drove frontend architecture and engineering as Senior React Developer, building responsive, client-focused products and high-traffic restaurant websites for clients across the USA and India using React.js, Redux Toolkit, Axios, and React Router. Emphasized performance optimization, rigorous code quality, maintainability, and code reduction.",
      keyResponsibilities: [
        "Led frontend architecture and developed client-focused products alongside restaurant websites for USA and India markets using React.js, Redux Toolkit, Axios, and React Router.",
        "Executed Senior React Developer responsibilities by guiding engineering standards, conducting design/functionality testing, and enforcing high code quality.",
        "Built responsive design layouts and interactive components optimized for cross-device compatibility, speed, and reliability.",
        "Streamlined state management workflows and API integrations with Redux Toolkit and Axios, prioritizing code reduction and maintainability.",
        "Conducted thorough performance optimization and refactoring across client codebases to eliminate bottlenecks and technical debt.",
      ],
      measurableAchievements: [
        "Achieved 35% code reduction and significantly enhanced project maintainability through reusable component libraries and standardized state logic.",
        "Optimized frontend architecture and client-side rendering for restaurant websites, cutting initial load times by 45% across USA and India deployments.",
        "Introduced comprehensive design/functionality testing and code quality guidelines, decreasing post-release bug reports by 30%.",
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "Postman"],
    },
    {
      id: "exp-3",
      role: "Full Stack Developer",
      company: "Ncoresoft Technologies",
      location: "Ahmedabad, India",
      type: "Full-time",
      startDate: "Jan'23",
      endDate: "Jul'24",
      summary:
        "Applied extensive technology expertise across multiple client projects, beginning with a 4-month internship focused on .NET Core and AngularJS before transitioning to ReactJS. Built full-stack solutions using ReactJS and .NET Core while actively mentoring and training junior developers to enhance team skills and project efficiency.",
      keyResponsibilities: [
        "Applied cross-stack technology expertise to deliver robust, scalable features for enterprise web applications.",
        "Completed an intensive 4-month internship working with .NET Core and AngularJS, gaining deep foundational experience in backend services and MVC patterns.",
        "Successfully transitioned to ReactJS, architecting dynamic user interfaces and connecting them with .NET Core backend APIs.",
        "Engineered production projects combining ReactJS frontend architectures with .NET Core web services, ensuring secure and efficient data exchange.",
        "Mentored and trained junior developers, conducting code reviews and knowledge-sharing sessions to improve overall team skills and project efficiency.",
      ],
      measurableAchievements: [
        "Spearheaded the successful delivery of a major enterprise project combining ReactJS + .NET Core, delivering 25% faster API communication.",
        "Upskilled and mentored 2 junior developers through structured training, improving team velocity and project efficiency by 30%.",
        "Leveraged modern ReactJS patterns after transitioning from AngularJS, reducing frontend defect rates by 40%.",
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", ".NET Core", "JavaScript", "HTML5", "CSS3", "GraphQL", "Postman"],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Loan Management System — Lending, Borrowing & EMI Lifecycle Management Platform",
      tagline: "Full-cycle loan origination, borrowing tracking, and automated EMI collection platform.",
      description:
        "A full-stack financial management platform engineered for organizations to originate loans, track counterparty borrowings, manage EMI repayment schedules, and monitor cash flow.",
      problemSolved:
        "Eliminated manual ledger tracking errors and missed EMI deadlines across lending and borrowing portfolios through automated installment scheduling and status follow-ups.",
      keyFeatures: [
        "Role-based access control and JWT authentication for administrators and loan officers",
        "Automated EMI calculation, installment generation, and scheduled repayment tracking",
        "Complete lending and borrowing workflows with counterparty management and customer KYC records",
        "EMI collection logging, overdue follow-up management, and payment reconciliation",
        "Comprehensive financial dashboard with Ant Design visual analytics for cash flow and loan status",
      ],
      technologies: ["Next.js", "Ant Design", "Node.js", "Express", "MySQL", "TypeScript", "Tailwind CSS", "Sequelize"],
      githubUrl: "https://github.com/Keval1012/loan-management",
      liveUrl: "https://loan-management.hnhgroup.in/",
      featured: true,
      category: "Full Stack",
      architectureHighlights: [
        "Modular Express architecture separating lending, borrowing, and user service domains",
        "Automated background cron jobs for daily EMI scheduling and installment status transitions",
        "Relational MySQL schema managed with Sequelize ORM for transactional data integrity",
      ],
      metrics: "Production platform handling end-to-end loan lifecycles with automated daily EMI scheduling and collection tracking",
    },
    {
      id: "project-2",
      title: "Skill Space — On-Demand Services & Booking Management Platform",
      tagline: "Administrative dashboard for managing service providers, client bookings, and dispute resolutions.",
      description:
        "A centralized administration portal engineered for on-demand service platforms to manage service provider verifications, monitor customer bookings, resolve disputes, and configure promotional campaigns.",
      problemSolved:
        "Streamlined multi-sided marketplace operations by centralizing service provider onboarding, customer booking lifecycle management, and platform dispute arbitration into a unified interface.",
      keyFeatures: [
        "Service provider verification and management with comprehensive profile details and document reviews",
        "End-to-end booking tracking with real-time status updates and appointment management",
        "Client account administration with engagement history and premium user tier monitoring",
        "Integrated dispute management and customer support ticketing system with detailed case logs",
        "Marketing tools for configuring influencer promotional codes and broadcasting custom system notifications",
      ],
      technologies: ["Next.js", "React Native", "Node.js", "Express", "MySQL", "TypeScript", "Tailwind CSS", "Sequelize", "Redis", "Docker", "Jenkins"],
      githubUrl: "",
      liveUrl: "https://skill-space-admin.wedowebapps.in/",
      featured: true,
      category: "Full Stack",
      architectureHighlights: [
        "Modular Next.js App Router architecture with route-based code splitting and breadcrumb navigation",
        "Role-based administrative control with secure session authentication and centralized toast notifications",
      ],
      metrics: "Centralized multi-sided marketplace administration covering bookings, provider verifications, and disputes in production",
    },
    {
      id: "project-3",
      title: "Kolleris — Industrial Tools & Machinery E-Commerce Platform",
      tagline: "Headless e-commerce storefront for industrial machinery, woodworking, and metalworking tools.",
      description:
        "A high-performance headless e-commerce platform engineered for an industrial tools supplier, providing seamless catalog navigation, technical machinery specifications, and streamlined online ordering.",
      problemSolved:
        "Transformed a complex industrial machinery catalog into a modern, fast-loading headless shopping experience with real-time order tracking and localized customer support.",
      keyFeatures: [
        "Comprehensive product catalog categorized for woodworking, metalworking, and construction equipment",
        "Rich product detail pages featuring technical specifications, gallery views, and availability status",
        "Headless cart and secure checkout flow integrated with flexible payment and shipment methods",
        "Self-service customer account portal with order tracking and order history lookups",
        "Full Greek localization with integrated customer support channels and store location details",
      ],
      technologies: ["Next.js", "Magento 2", "TypeScript", "Tailwind CSS", "GraphQL", "MySQL", "Redis", "Elasticsearch", "Docker"],
      githubUrl: "",
      liveUrl: "https://magento.kolleris.com/",
      featured: true,
      category: "Full Stack",
      architectureHighlights: [
        "Headless Next.js App Router frontend seamlessly decoupled from Magento 2 via GraphQL APIs",
        "Server-side rendering and optimized asset delivery for fast initial page loads and responsive PWA performance",
      ],
      metrics: "Live production e-commerce platform serving professional tradesmen and industrial enterprises across Greece",
    },
    {
      id: "project-4",
      title: "Foodasso — Desktop Point-of-Sale (POS) & Restaurant Operations Platform",
      tagline: "Comprehensive desktop POS and restaurant operations platform with KOT routing and inventory tracking.",
      description:
        "An Electron-based desktop Point-of-Sale application designed for restaurants to manage visual table layouts, process kitchen order tickets (KOT), control inventory stock, and handle multi-tender settlements.",
      problemSolved:
        "Eliminated dining room order delays and inventory discrepancies by synchronizing table orders, kitchen ticket printing, and cash register reconciliation in real time.",
      keyFeatures: [
        "Interactive table management with visual floor layouts, split billing, part payments, and checkout settlement",
        "Automated Kitchen Order Ticket (KOT) workflow with item routing and multi-printer thermal printing support",
        "Complete order lifecycle handling supporting dine-in, takeaway, advance booking, and delivery staff dispatch",
        "Inventory and purchase management with raw material conversion, wastage tracking, and stock audits",
        "Comprehensive restaurant reporting covering daily sales, cashier cash flows, category trends, and expense logs",
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Python", "Postman API Integration"],
      githubUrl: "https://github.com/Keval1012/foodasso",
      liveUrl: "",
      featured: true,
      category: "Frontend",
      architectureHighlights: [
        "Cross-platform desktop architecture built with Electron, React, and local hardware printer integration",
        "State management powered by Redux Toolkit with persistent local caching and background data synchronization",
      ],
      metrics: "End-to-end POS system managing dine-in billing, kitchen ticket routing, and inventory reconciliation in real time",
    },
  ],

  engineeringHighlights: [
    {
      title: "Scalable Architecture",
      description: "Designing modular, decoupled systems using microservices and layered patterns that gracefully handle growing load.",
      icon: "Boxes",
    },
    {
      title: "API Development",
      description: "Architecting clean, predictable REST & GraphQL APIs with strict typing, rate limiting, and comprehensive error handling.",
      icon: "Network",
    },
    {
      title: "Performance Optimization",
      description: "Reducing latency through Redis caching, database indexing, query profiling, and frontend bundle splitting.",
      icon: "Zap",
    },
    {
      title: "Database Design",
      description: "Crafting normalized relational schemas (PostgreSQL, MySQL) and flexible document models (MongoDB) with atomic safety.",
      icon: "Database",
    },
    {
      title: "Cloud & DevOps",
      description: "Automating zero-downtime deployments with Docker containers, AWS services, and GitHub Actions CI/CD pipelines.",
      icon: "Cloud",
    },
    {
      title: "Testing & Quality",
      description: "Enforcing stability with automated unit and integration tests, code reviews, and defensive TypeScript types.",
      icon: "ShieldCheck",
    },
    {
      title: "System Integration",
      description: "Connecting payment gateways, authentication providers, messaging queues, and third-party SaaS ecosystems.",
      icon: "Cpu",
    },
    {
      title: "Maintainability & Clean Code",
      description: "Writing self-documenting code following SOLID principles, separation of concerns, and consistent team conventions.",
      icon: "Code2",
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Ahmedabad Institute of Technology",
      year: "2019 — 2023",
      location: "Ahmedabad, Gujarat",
      score: "CGPA: 8.37",
    },
  ],

  certifications: [
    {
      title: "Introduction to HTML5",
      issuer: "Coursera / University of Michigan",
      year: "2023",
      credentialUrl: "https://www.coursera.org/learn/html",
    },
    {
      title: "Algorithms on Graphs",
      issuer: "Coursera / UC San Diego",
      year: "2023",
      credentialUrl: "https://www.coursera.org/learn/algorithms-on-graphs",
    },
    {
      title: "SQL for Data Science",
      issuer: "Coursera / UC, Davis",
      year: "2023",
      credentialUrl: "https://www.coursera.org/learn/sql-for-data-science",
    },
    {
      title: "Cloud Computing Service Models",
      issuer: "Great Learning",
      year: "2023",
      credentialUrl: "https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-computing-service-models",
    },
  ],

  githubStats: {
    username: "Keval1012",
    profileUrl: "https://github.com/Keval1012",
    repositoriesCount: 10,
    yearsActive: "3+ Years",
    selectedRepos: [
      {
        name: "MERN_TYPESCRIPT_CRUD",
        description: "Full-stack MERN application demonstrating end-to-end type-safe CRUD operations with React, Express, and MongoDB.",
        language: "TypeScript",
        stars: 34,
        forks: 11,
        url: "https://github.com/Keval1012/MERN_TYPESCRIPT_CRUD",
      },
      {
        name: "Trip-Jack",
        description: "Travel and trip booking web application built with React, Ant Design, and REST API integration.",
        language: "JavaScript",
        stars: 52,
        forks: 19,
        url: "https://github.com/Keval1012/Trip-Jack",
      },
      {
        name: "Construction-Management",
        description: "Construction workflow management application with Express, MongoDB, file uploads, and automated PDF report generation.",
        language: "JavaScript",
        stars: 28,
        forks: 7,
        url: "https://github.com/Keval1012/Construction-Management",
      },
      {
        name: "Document-Management-System",
        description: "Centralized document management platform featuring an ASP.NET Web API backend and React frontend.",
        language: "JavaScript",
        stars: 41,
        forks: 9,
        url: "https://github.com/Keval1012/Document-Management-System",
      },
    ],
  },
};
