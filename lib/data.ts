export const personalInfo = {
  name: "Dheeraj Kaushik",
  role: "Full Stack Engineer",
  bio: "Engineering scalable systems with Java Spring Boot & React. Focused on secure, high-performance architecture.",
  email: "dkher4@gmail.com",
  linkedin: "https://www.linkedin.com/in/dheeraj-kaushik-a320a5226/",
  github: "https://github.com/dheerajkaushik",
  location: "Jind, Haryana / Chandigarh",
};

export const skills = [
  "Java", "Spring Boot", "Spring MVC", "Hibernate (JPA)",
  "React.js", "Tailwind CSS", "Docker", "AWS S3",
  "PostgreSQL", "Microservices", "Git", "Postman"
];

export const projects = [
  {
    title: "SkillForge LMS",
    description: "Production-ready Learning Management System with hierarchical course content and role-based access.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker", "AWS S3"],
    github: "https://github.com/dheerajkaushik/Skillforge",
    live: "https://skillforge-1-nws0.onrender.com",
    features: [
      "Interactive Code Runner (Docker sandboxed)",
      "JWT-based Authentication",
      "Video streaming with HLS protocols"
    ]
  },
  {
    title: "Society Parking System",
    description: "Multi-role full-stack application for slot booking, guest reservations, and wing-wise parking management.",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security"],
    github: "https://github.com/dheerajkaushik/SocietyParking", // Adjusted spacing from resume for URL
    live: "https://societyparking-1.onrender.com",
    features: [
      "Slot allocation algorithms",
      "Database indexing for performance",
      "RESTful service design"
    ]
  },
  {
    title: "Real-Time Chat Platform",
    description: "Low-latency messaging platform supporting multiple rooms and live bi-directional communication.",
    tech: ["HTML/CSS", "JavaScript", "WebSocket API"],
    github: "https://github.com/dheerajkaushik/chat",
    live: "#",
    features: [
      "Bi-directional WebSocket communication",
      "Dynamic UI rendering",
      "Event-driven logic"
    ]
  }
];

export const experience = [
  {
    role: "Student Trainee",
    company: "Metacrafter",
    period: "Remote",
    description: "Developed and deployed Ethereum smart contracts using Solidity. Integrated Web3.js with frontend."
  },
  {
    role: "B.E. Computer Science",
    company: "Chandigarh University",
    period: "2021 - 2025",
    description: "CGPA: 8.18/10. Focused on DSA, OOP, and System Design."
  }
];