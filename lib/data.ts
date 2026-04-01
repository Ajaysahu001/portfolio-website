export const personalInfo = {
  name: "Ajay Sahu",
  title: "Front-end Developer",
  tagline: "Crafting exceptional digital experiences",
  summary:
    "Front-end Developer with 3+ years of experience in building dynamic and responsive web applications using React.js and Next.js. Expertise in performance optimization, state management, and API integration, delivering seamless user experiences.",
  email: "ajay.sahuchitrakoot@gmail.com",
  phone: "+91-8840418726",
  location: "Chitrakoot, M.P., India",
  linkedin: "https://linkedin.com/in/ajaysahu001",
  github: "https://github.com/Ajaysahu001",
  roles: [
    "Front-end Developer",
    "React.js Expert",
    "Next.js Developer",
    "UI/UX Enthusiast",
    "Performance Optimizer",
  ],
};

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    color: "from-violet-500 to-purple-600",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 / SCSS", level: 92 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "APIs & Tools",
    icon: "🔧",
    color: "from-emerald-500 to-teal-500",
    items: [
      { name: "RESTful APIs", level: 88 },
      { name: "Axios / Fetch", level: 90 },
      { name: "Git / GitHub", level: 85 },
      { name: "Webpack / Vite", level: 78 },
    ],
  },
  {
    category: "Optimization",
    icon: "⚡",
    color: "from-orange-500 to-amber-500",
    items: [
      { name: "Lazy Loading", level: 88 },
      { name: "Code Splitting", level: 85 },
      { name: "Performance Tuning", level: 82 },
      { name: "Minification", level: 80 },
    ],
  },
];

export const projects = [
  {
    title: "My Easy Monogram",
    slug: "my-easy-monogram",
    description:
      "A responsive e-commerce web application for custom monogram products. Built with React.js and SCSS, featuring Redux for state management and real-time API integration for dynamic product data.",
    longDescription:
      "My Easy Monogram is a full-featured, responsive e-commerce platform built for custom monogram products. The application leverages React.js for a dynamic, component-driven UI paired with SCSS for maintainable, scalable styling. Redux powers centralized state management across the cart, product catalog, and user session, while RESTful API integration delivers real-time product data and order status updates. Performance was a core priority: lazy loading and code splitting ensure fast initial load times, and careful optimization of re-renders keeps the UI smooth on all devices.",
    tech: ["React.js", "SCSS", "Redux", "REST APIs"],
    color: "from-violet-600 to-indigo-600",
    accentColor: "violet",
    icon: "✦",
    link: "https://www.myeasymonogram.com",
    github: "https://github.com/Ajaysahu001",
    highlights: [
      "Redux state management",
      "Real-time data APIs",
      "Responsive design",
      "Performance optimized",
    ],
    keywords: ["React.js", "SCSS", "Redux", "e-commerce", "REST API", "responsive"],
    datePublished: "2024-06-01",
  },
  {
    title: "Lucent Innovation",
    slug: "lucent-innovation-website",
    description:
      "Developed and optimized the official company website for Lucent Innovation using Next.js and Tailwind CSS. Enhanced performance, responsiveness, and overall user experience significantly.",
    longDescription:
      "The Lucent Innovation corporate website was built using Next.js with the App Router, enabling both server-side rendering and static generation for maximum performance. Tailwind CSS provides a utility-first styling approach that allows rapid UI iteration without sacrificing design quality. Key focus areas included achieving top Core Web Vitals scores, building fully responsive layouts for all device sizes, and implementing a clean, professional design system that reflects the company brand. The result is a fast, accessible, and visually compelling web presence.",
    tech: ["Next.js", "Tailwind CSS", "Performance Optimization"],
    color: "from-cyan-600 to-blue-600",
    accentColor: "cyan",
    icon: "◈",
    link: "https://lucentinnovation.com",
    github: "https://github.com/Ajaysahu001",
    highlights: [
      "Next.js App Router",
      "SSR & SSG",
      "Tailwind styling",
      "Core Web Vitals",
    ],
    keywords: ["Next.js", "Tailwind CSS", "SSR", "SSG", "Core Web Vitals", "corporate website"],
    datePublished: "2024-12-01",
  },
  {
    title: "Revidd Spaces",
    slug: "revidd-spaces",
    description:
      "A responsive web application for space management built with React.js and Context API. Features real-time data integration and performance optimization with lazy loading for smooth UX.",
    longDescription:
      "Revidd Spaces is a comprehensive space management platform built with React.js that enables users to discover, book, and manage workspaces. The application uses the React Context API for lightweight, efficient state management across the booking flow and user session. RESTful API integration keeps space availability and booking data fresh in real time. Lazy loading ensures heavy components and images are only fetched when needed, significantly improving perceived performance and reducing time-to-interactive.",
    tech: ["React.js", "Context API", "REST APIs", "Lazy Loading"],
    color: "from-emerald-600 to-teal-600",
    accentColor: "emerald",
    icon: "⬡",
    link: "https://revidd.com",
    github: "https://github.com/Ajaysahu001",
    highlights: [
      "Context API",
      "Lazy loading",
      "API integration",
      "Responsive UI",
    ],
    keywords: ["React.js", "Context API", "lazy loading", "space management", "REST API"],
    datePublished: "2024-03-01",
  },
];

export type Project = typeof projects[0];

export const experience = [
  {
    title: "Front-end Developer",
    company: "Lucent Innovation",
    location: "Ahmedabad",
    period: "Nov 2024 – Present",
    startDate: "2024-11-01",
    endDate: null, // current
    current: true,
    color: "from-violet-500 to-purple-600",
    description: [
      "Designed dynamic UIs using React.js, enhancing user engagement across multiple product lines.",
      "Utilized Redux and hooks for efficient state management and optimized component rendering.",
      "Optimized performance with lazy loading, code splitting, and reduced unnecessary re-renders.",
      "Collaborated with designers and back-end developers for seamless cross-functional integration.",
      "Integrated RESTful APIs to display real-time data with smooth user interactions.",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Kamadgiri Software Solution",
    location: "Chitrakoot",
    period: "Aug 2023 – Oct 2024",
    startDate: "2023-08-01",
    endDate: "2024-10-31",
    current: false,
    color: "from-blue-500 to-cyan-500",
    description: [
      "Built responsive web applications using React.js, improving accessibility and user interaction.",
      "Leveraged React hooks for efficient state and side effect management across components.",
      "Enhanced application performance by refactoring and optimizing rendering techniques.",
      "Worked closely with cross-functional teams to create visually appealing and functional apps.",
    ],
  },
];

export const education = [
  {
    degree: "Full-Stack Web Development (MERN Stack)",
    institution: "Ducat India",
    location: "Noida, Uttar Pradesh",
    period: "Apr 2023 – Nov 2023",
    startDate: "2023-04-01",
    endDate: "2023-11-30",
    icon: "🚀",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Makhanlal University",
    location: "Bhopal, M.P.",
    period: "Jul 2018 – Jun 2021",
    startDate: "2018-07-01",
    endDate: "2021-06-30",
    icon: "🎓",
  },
];

export const stats = [
  { label: "Years Experience", value: "3+", suffix: "" },
  { label: "Projects Completed", value: "15", suffix: "+" },
  { label: "Technologies", value: "12", suffix: "+" },
  { label: "Satisfied Clients", value: "10", suffix: "+" },
];
