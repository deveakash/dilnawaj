// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Dilnawaj Alam",
  firstName: "Dilnawaj Alam",
  brandName: "Dilnawaj Alam",
  title: "Full Stack & Java Developer",
  location: "Bhopal, India",
  phone: "+91 99396-08743",
  emails: {
    primary: "mddilnawazsheikh0786@gmail.com",
    secondary: "mddilnawazsheikh0786@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Computer Science student with solid skills in Java, Spring Boot, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Md_Yusuf_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/Dilnawaj0786",
  linkedin: "https://www.linkedin.com/in/dilnawaj-alam-211453323/",
};

export const heroContent = {
  greeting: "Hi, I'm Dilnawaj",
  titleHighlight: "Data Science and ML Student",
  subtitle:
    "I build fast, scalable applications using Python, C++ and MERN Stack.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mdyusufcse096@iesuniversity.ac.in?subject=Hiring Inquiry – Portfolio&body=Hello Md Yusuf,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Dilnawaj_resune.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Dilnawaj Alam</span>, an aspiring Data Science  Student based in Bettiah , Bihar, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Python", "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        // { name: "Java", level: 90 },
        { name: "C++", level: 90 },
        { name: "Python", level: 85 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "n8n", level: 82 },
        { name: "MongoDB Compass", level: 85 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Education",
  heading: "Creative Direction & Scalable Knowledge",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Class 12th (BSEB)",
      description: "MKM Inter College",
      stats: "82.5%",
      icon: ""
    },
    {
      title: "Class 10th (CBSE)",
      description: "Awasiya Delhi Public School",
      stats: "64%",
      icon: ""
    },
    {
      title: "Computer Science & Engg.",
      description: "Integral University",
      stats: "CGPA 9.5",
      icon: ""
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Heart Disease Prediction",
    description: "Analyzed 9,000 patient records to identify cardiovascular risk indicators, implemented and benchmarked five ML classification models Logistic Regression, KNN, Decision Tree, Random Forest, and SVM using Python and Scikit-learn, achieving 88.59% accuracy",
    role: "Developer",
    badge: "Developer"
  },
  {
    title: "Bank Management System",
    description: "Developed a Bank Management System using Python, OOP, file handling, and exception handling, implementing CRUD operations for customer account details.",
    role: "Developer",
    badge: "Developer"
  },
  {
    title: "Student Exam Score Prediction",
    description: "Developed a Student Score Prediction project using Python and machine learning libraries to build an ML model that predicts students’ scores based on relevant input factors.",
    role: "Developer",
    badge: "Developer"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Lucknow UP",
    role: "AI Intern | Sipher Web Pvt. Ltd.",
    duration: "June 2025 - August 2025",
    skills: ["Data Science", "Python"],
    tech: ["Python", "MySQL", "Spring boot", "Data Science Tools"]
  },
  
  {
    organization: "CollegeTips.in",
    role: "Web Development Intern",
    duration: "1 Month (Offline)",
    skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "dilnawaj",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Heart Disease Prediction",
    description:
      "Analyzed 9,000 patient records to identify cardiovascular risk indicators, implemented and benchmarked five ML classification models Logistic Regression, KNN, Decision Tree, Random Forest, and SVM using Python and Scikit-learn, achieving 88.59% accuracy.",
    techTags: [
      "React",
      "Next.js",
    ],
    links: {
      github: "https://github.com/Dilnawaj0786",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "Bnank",
    number: "02",
    badge: null,
    title: "Bank Management System",
    description:
      "Developed a Bank Management System using Python, OOP, file handling, and exception handling, implementing CRUD operations for customer account details.",
    techTags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    links: {
      github: "https://github.com/Dilnawaj0786"
    },
    isFlagship: false,
  },
  {
    id: "Student-Exam",
    number: "03",
    badge: null,
    title: "Student Exam Score Prediction",
    description:
      "A full-stack web application that analyzes citizen feedback using Artificial Intelligence to classify sentiments as positive, negative, or neutral. Features a responsive React frontend, a Node.js backend, MongoDB for data storage, and n8n automation for workflow orchestration — enabling real-time insights and efficient feedback management.",
    techTags: ["React", "Node.js", "MongoDB", "n8n", "AI/ML", "REST API"],
    links: {
      github: "https://github.com/Dilnawaj0786", // Update when available
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Secured 1st Place in the DebugMania",
      issuer: "Inetgral University",
      icon: "",
    },
    {
      name: "Secured 3rd Rank in the APTiWAR Aptitude Contest at Fiesta",
      issuer: "Inetgral University",
      icon: "",
    },
    {
      name: "Secured 2nd Rank in Code Catalyst 2.0",
      issuer: "Integral University",
      icon: "",
    },
    
  ],
  viewAllUrl:
    "",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Integral University",
  cgpa: "9.5",
  graduation: "2027",
  twelfth: "12th  – 82.5%",
  tenth: "10th CBSE – 64%",
};

export const footerContent = {
  taglines: [
    "Data Science & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 9.5",
  copyright: `© ${new Date().getFullYear()} Md Dilnawaj | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
