// ============================================================
// Portfolio Data - Centralized data store
// Update this file to change portfolio content
// ============================================================

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  responsibilities: string[];
  type: "teaching" | "mentoring";
}

export interface OrganizationExperience {
  id: string;
  organization: string;
  position: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string[];
  icon: string;
  url?: string;
  image?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  url: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

// ---- Personal Info ----
export const personalInfo = {
  name: "Gabriel Christopel Manariangkuba",
  title: "Informatics Student | Aspiring Data Engineer | Teaching Assistant | Data Enthusiast",
  shortIntro:
    "Building data-driven solutions, teaching future developers, and transforming information into meaningful insights.",
  aboutMe:
    "I am Gabriel Christopel Manariangkuba, an Informatics student at Universitas Atma Jaya Yogyakarta who focuses on Data Engineering, Data Analytics, and Software Development. I enjoy building end-to-end data solutions, developing analytical systems, and helping students understand programming concepts through mentoring and teaching activities.",
  aboutMeExtra:
    "I am passionate about transforming raw data into valuable insights and creating scalable systems that can support decision making.",
  university: "Universitas Atma Jaya Yogyakarta",
  interests: [
    "Data Engineering",
    "Data Analytics",
    "Machine Learning",
    "Software Development",
    "ETL Pipelines",
  ],
  stats: [
    { label: "Teaching Experiences", value: "4+", icon: "GraduationCap" },
    { label: "Major Projects", value: "3", icon: "FolderKanban" },
    { label: "Years Mentoring", value: "2+", icon: "Users" },
    { label: "Data Enthusiast", value: "∞", icon: "TrendingUp" },
  ],
  cvPath: "/cv.pdf",
  profilePath: "/pasfoto.jpg",
};

// ---- Navigation ----
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
];

// ---- Experiences ----
export const experiences: Experience[] = [
  {
    id: "exp-1",
    organization: "Universitas Atma Jaya Yogyakarta",
    role: "Head Teaching Assistant for Object-Oriented Programming",
    period: "February 2026 - Present",
    responsibilities: [
      "Developed structured learning modules and practical implementations using Java and Python.",
      "Managing and handling second year students through mentoring and guidance.",
      "Evaluate all student performance based on real cased projects.",
    ],
    type: "teaching",
  },
  {
    id: "exp-2",
    organization: "Universitas Atma Jaya Yogyakarta",
    role: "Head Teaching Assistant for Data Structures and Algorithms",
    period: "August 2025 - December 2025",
    responsibilities: [
      "Managed all lab sessions for second-year IT students.",
      "Developed learning modules and hands-on exercises to strengthen data structures and algorithms concepts.",
      "Facilitated an open discussion forum to support students in understanding course materials and improving their academic performance.",
    ],
    type: "teaching",
  },
  {
    id: "exp-3",
    organization: "Universitas Atma Jaya Yogyakarta",
    role: "Assistant Lecturer for Basic Programming",
    period: "February 2025 - July 2025",
    responsibilities: [
      "Teaching, assessing, and supporting first year IT students with programming concepts.",
      "Designed and developed learning modules.",
      "Led hands-on coding sessions.",
    ],
    type: "teaching",
  },
  {
    id: "exp-4",
    organization: "Kelompok Studi Pemrograman UAJY",
    role: "Mentor",
    period: "September 2024 - July 2025",
    responsibilities: [
      "Teaching Intro to Basic Programming Course for two full semesters.",
      "Evaluating all members with result almost 80% student passed the course.",
    ],
    type: "mentoring",
  },
];

// ---- Organizational Experience ----
export const organizationExperiences: OrganizationExperience[] = [
  {
    id: "org-1",
    organization: "Informatics Festival",
    position: "Secretary",
    responsibilities: [
      "Managing administrative tasks.",
      "Coordinating communication.",
      "Organizing event documentation.",
      "Supporting planning and execution.",
      "Creating reports for every activity.",
    ],
  },
  {
    id: "org-2",
    organization: "HIMAFORKA",
    position: "Midterm & Final Exam Tutor",
    responsibilities: [
      "Helped improve student preparedness for two consecutive years.",
      "Assisted students in understanding key concepts.",
      "Helped solve exam related problems.",
    ],
  },
];

// ---- Projects ----
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Students' Final Grade Predictor",
    technologies: ["Python", "Machine Learning"],
    description: [
      "Selected as one of the Top 10 Best Paper Ideas.",
      "Developed an AI model to predict students' final grades based on log activities.",
      "Managed end-to-end pipeline.",
      "Helped lecturers and students evaluate performance.",
    ],
    icon: "BrainCircuit",
    image: "/ml-project.png",
  },
  {
    id: "proj-2",
    title: "POS & Dashboard System for Coffee Shop",
    technologies: ["PHP", "JavaScript", "React.js", "MySQL"],
    description: [
      "Developed POS system for SMK BOPKRI 2 Coffee Shop.",
      "Implemented inventory monitoring.",
      "Built sales analytics dashboards.",
    ],
    icon: "ShoppingCart",
    url: "https://bodavhs.uajy.web.id/",
    image: "/pos-system.png",
  },
  {
    id: "proj-3",
    title: "Population Analytics Data Warehouse",
    technologies: ["SQL Server", "SSMS", "Power BI"],
    description: [
      "Designed dimensional data warehouse.",
      "Built ETL pipelines.",
      "Created analytical dashboards.",
    ],
    icon: "Database",
  },
];

// ---- Skills ----
export const skillCategories: SkillCategory[] = [
  {
    id: "skill-1",
    title: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "Java", "C", "PHP", "JavaScript"],
  },
  {
    id: "skill-2",
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "PL/SQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "skill-3",
    title: "Frameworks & Libraries",
    icon: "Layers",
    skills: ["Pandas", "NumPy", "Spark", "React"],
  },
  {
    id: "skill-4",
    title: "Core Competencies",
    icon: "Brain",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "ETL Pipelines",
      "Machine Learning",
    ],
  },
  {
    id: "skill-5",
    title: "Tools",
    icon: "Wrench",
    skills: ["Excel", "Power BI", "Git", "VS Code", "SSMS"],
  },
];

// ---- Certifications ----
export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Data Engineering Certificate",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-9a58f706-4131-4bf2-bc90-eb7784fc53d8/",
  },
  {
    id: "cert-2",
    title: "SQL Certificate",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/b326afb9726d",
  },
];

// ---- Social Links ----
export const socialLinks: SocialLink[] = [
  {
    id: "social-1",
    platform: "Email",
    url: "mailto:gabriel@example.com",
    icon: "Mail",
  },
  {
    id: "social-2",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/gabriel-christopel",
    icon: "Linkedin",
  },
  {
    id: "social-3",
    platform: "GitHub",
    url: "https://github.com/gabriel-christopel",
    icon: "Github",
  },
  {
    id: "social-4",
    platform: "Instagram",
    url: "https://instagram.com/gabriel.christopel",
    icon: "Instagram",
  },
];
