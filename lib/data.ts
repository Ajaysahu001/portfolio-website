export const personalInfo = {
  name: "Ajay Sahu",
  title: "Front-end Developer",
  tagline: "Crafting exceptional digital experiences",
  avatar: "",
  summary:
    "Front-end Developer with 3+ years of experience building responsive and high-performance web applications using React.js and Next.js. Expertise in Redux Toolkit, Context API, TypeScript, and RESTful API integration — with hands-on MERN Stack experience. Delivered production-grade UIs across multiple live client products, working in Agile teams with designers and back-end developers.",
  email: "ajay.sahuchitrakoot@gmail.com",
  phone: "+91-8840418726",
  location: "Chitrakoot, M.P., India",
  linkedin: "https://linkedin.com/in/ajaysahu001",
  github: "https://github.com/Ajaysahu001",
  roles: [
    "Front-end Developer",
    "React.js Expert",
    "Next.js Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
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
      { name: "Redux Toolkit", level: 85 },
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
      { name: "Context API", level: 85 },
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Webpack / Vite / Babel", level: 78 },
    ],
  },
  {
    category: "Optimization",
    icon: "⚡",
    color: "from-orange-500 to-amber-500",
    items: [
      { name: "Lazy Loading", level: 88 },
      { name: "Code Splitting", level: 85 },
      { name: "Memoization", level: 84 },
      { name: "SSR / SSG", level: 82 },
      { name: "Minification", level: 80 },
    ],
  },
  {
    category: "MERN Stack",
    icon: "🌿",
    color: "from-green-500 to-emerald-600",
    items: [
      { name: "MongoDB", level: 70 },
      { name: "Express.js", level: 68 },
      { name: "Node.js", level: 72 },
      { name: "REST API Design", level: 80 },
    ],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    color: "from-pink-500 to-purple-600",
    items: [
      { name: "Gemini AI API", level: 78 },
      { name: "Prompt Engineering", level: 80 },
      { name: "AI Integration", level: 75 },
      { name: "OpenAI API", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "My Easy Monogram",
    slug: "my-easy-monogram",
    description:
      "A responsive e-commerce web application for custom monogram products. Built with React.js and Redux Toolkit for state management, REST APIs for real-time data, and performance optimizations that reduced initial bundle size by ~30%.",
    longDescription:
      "My Easy Monogram is a full-featured, responsive e-commerce platform built for custom monogram products. The application leverages React.js for a dynamic, component-driven UI paired with SCSS for maintainable, scalable styling. Redux Toolkit powers centralized state management across the cart, product catalog, and user session, while RESTful API integration delivers real-time product data and order status updates. Performance was a core priority: lazy loading and code splitting reduced the initial bundle size by ~30%, and memoization of expensive renders keeps the UI smooth on all devices.",
    tech: ["React.js", "SCSS", "Redux Toolkit", "REST APIs"],
    color: "from-violet-600 to-indigo-600",
    accentColor: "violet",
    icon: "✦",
    link: "https://www.myeasymonogram.com",
    github: "https://github.com/Ajaysahu001",
    highlights: [
      "Redux Toolkit state",
      "~30% bundle reduction",
      "Real-time data APIs",
      "Responsive design",
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
  {
    title: "Luxora",
    slug: "luxora",
    description:
      "A full-stack e-commerce platform built on the MERN stack. Features JWT authentication, product management, cart & checkout flow, order tracking, and an admin dashboard for inventory control.",
    longDescription:
      "Luxora is a full-featured e-commerce platform built end-to-end with the MERN stack. The Node.js and Express.js backend powers a secure REST API with JWT authentication, protected admin routes, and Mongoose schemas for products, orders, and users in MongoDB. The React.js frontend uses Redux Toolkit to manage cart state, user sessions, and order history across the app. Key features include product listing with search and filter, add-to-cart with quantity management, a multi-step checkout flow with order summary, and a dedicated admin dashboard for managing inventory and order statuses. Tailwind CSS delivers a clean, fully responsive UI across all devices.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT"],
    color: "from-green-600 to-emerald-600",
    accentColor: "emerald",
    icon: "◉",
    link: "#",
    github: "https://github.com/Ajaysahu001",
    highlights: [
      "Full MERN stack",
      "JWT authentication",
      "Cart & checkout flow",
      "Admin dashboard",
    ],
    keywords: ["MERN Stack", "MongoDB", "Express.js", "Node.js", "React.js", "Redux Toolkit", "JWT", "e-commerce", "full-stack"],
    datePublished: "2025-10-01",
  },
  {
    title: "SmartChat AI",
    slug: "smartchat-ai",
    description:
      "A real-time AI chatbot interface built with Next.js and OpenAI API. Features streaming responses, conversation history, multi-session support, and a clean chat UI — delivering a ChatGPT-like experience in the browser.",
    longDescription:
      "SmartChat AI is a conversational AI assistant built with Next.js App Router and the OpenAI API. The app streams responses token-by-token using the Vercel AI SDK, giving users an instant, fluid chat experience without waiting for full responses. Redux Toolkit manages multiple conversation sessions, allowing users to switch between chats and preserve history across page refreshes via localStorage. The UI features a clean message thread layout with user/assistant bubbles, a sticky input bar with send-on-Enter support, typing indicators, and markdown rendering for code blocks. Tailwind CSS delivers a polished dark-mode interface across all screen sizes.",
    tech: ["Next.js", "OpenAI API", "Redux Toolkit", "Tailwind CSS", "Vercel AI SDK"],
    color: "from-sky-600 to-indigo-600",
    accentColor: "sky",
    icon: "◎",
    link: "#",
    github: "https://github.com/Ajaysahu001",
    highlights: [
      "Streaming AI responses",
      "Multi-session history",
      "Markdown code rendering",
      "ChatGPT-like UX",
    ],
    keywords: ["AI chatbot", "OpenAI API", "Next.js", "streaming", "Redux Toolkit", "conversational AI"],
    datePublished: "2026-05-01",
  },
  {
    title: "AI Content Studio",
    slug: "ai-content-studio",
    description:
      "An AI-powered content generation tool built with React.js and Next.js. Integrates Gemini AI API to automate blog writing, email drafting, and social media copy — reducing content creation time by 70%.",
    longDescription:
      "AI Content Studio is a productivity tool that brings AI-powered automation to content creation workflows. Built with Next.js App Router and React.js on the frontend, it integrates the Gemini AI API to generate high-quality blog posts, marketing emails, and social media captions from simple user prompts. Redux Toolkit manages the generation history and user preferences across sessions. The app features a clean prompt editor with real-time streaming responses, a content history sidebar, copy-to-clipboard functionality, and tone/length controls. Tailwind CSS delivers a polished, responsive interface that works seamlessly across devices. The result is a tool that cuts content creation time by up to 70%.",
    tech: ["Next.js", "React.js", "Gemini AI API", "Redux Toolkit", "Tailwind CSS"],
    color: "from-purple-600 to-pink-600",
    accentColor: "purple",
    icon: "✳",
    link: "#",
    github: "https://github.com/Ajaysahu001",
    highlights: [
      "Gemini AI integration",
      "70% faster content",
      "Real-time streaming",
      "Prompt-to-content",
    ],
    keywords: ["AI automation", "Gemini API", "Next.js", "React.js", "content generation", "Redux Toolkit", "AI tool"],
    datePublished: "2026-03-01",
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
      "Built production-grade UIs using React.js and Next.js for multiple live client products.",
      "Implemented Redux Toolkit and React hooks for scalable state management across 20+ components.",
      "Applied lazy loading, code splitting, and memoization — reducing initial bundle size by ~30%.",
      "Integrated 15+ RESTful APIs using Axios to render real-time data on interactive dashboards.",
      "Worked in Agile/Scrum team with designers and back-end developers to ship features on schedule.",
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
      "Developed 5+ fully responsive React.js apps with cross-browser compatibility across all devices.",
      "Used React hooks (useState, useEffect, useCallback, useMemo) for state and side effect management.",
      "Refactored legacy components, eliminating unnecessary re-renders and improving page load speed.",
      "Converted Figma mockups into pixel-perfect UI components using Tailwind CSS and SCSS.",
      "Integrated third-party APIs with async data fetching, error handling, and loading state management.",
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
  { label: "Technologies", value: "20", suffix: "+" },
  { label: "Satisfied Clients", value: "10", suffix: "+" },
];
