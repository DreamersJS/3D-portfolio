export const projectsData = [
  {
    id: 1,
    name: "ZAMO Chat App (Team Project)",
    description: "Discord-like chat app with real-time messaging, media sharing, and video calls.",
    story: `
    Problem: Needed real-time video calls across devices; deployment on Vercel caused React Router issues.
    Solution: Implemented WebRTC video calls with Firebase signaling, tested with Cloudflare tunnels; fixed routing by adding custom vercel.json rewrites.
    Lesson Learned: Learned multi-device testing, production debugging, and identified UX gaps like missing unread message notifications for future iterations.
    `,
    image: '/images/zamo-chat.png',
    techStack: ["React", "React Router", "TailwindCSS", "Firebase", "WebRTC", "Git"],
    type: "Front-end",
    demoLink: "https://zamo-chat-app.vercel.app",
    githubLink: "https://github.com/Alpha-55-JS-Web-Programming/Final-Project-Team5",
    // videoLink: "",
  },
  {
    id: 2,
    name: "Socket.io Chat App",
    description: "Real-time chat application with authentication and chat rooms.",
    story: `
    Problem: First-time backend experience; socket connections were unstable; CORS issues and route conflicts occurred.
    Solution: Built backend with Express.js, Socket.io, MySQL, JWT, and bcrypt; refactored socket logic into custom hooks and Context API; added error boundaries and user feedback components.
    Lesson Learned: Gained practical full-stack experience, learned best practices for socket handling, API design, and code organization for maintainable apps.
    `,
    image: '/images/socket-chat.png',
    techStack: ["Express", "Socket.io", "MySQL", "JWT", "bcrypt", "Git", "DeepL API"],
    type: "Full-stack",
    demoLink: "",
    githubLink: "https://github.com/DreamersJS/express-project1",
  },
  {
    id: 3,
    name: "Whiteboard App",
    description: "Collaborative online whiteboard for drawing and chatting in real time.",
    story: `
    Problem: Collaborative drawing appeared in all rooms; chat UI consumed too much canvas space; Lighthouse performance score was low (50).
    Solution: Fixed socket join/leave events per room; moved chat to a modal with unread message badges; optimized code to increase Lighthouse performance to 65.
    Lesson Learned: Learned room-based socket management, UI/UX optimization for real-time apps, and performance tuning techniques.
    `,
    image: '/images/whiteboard.png',
    techStack: ["Next.js", "Socket.io", "TailwindCSS", "Firebase", "React Testing Library", "Jest", "Git"],
    type: "Full-stack",
    demoLink: "",
    githubLink: "https://github.com/DreamersJS/next.js-project1",
  },
  {
    id: 4,
    name: "Text-Adventure App",
    description: "Interactive story game where players make choices that shape the narrative.",
    story: `
    Problem: Inventory items multiplied incorrectly due to improper state management in useEffect.
    Solution: Refactored state logic to fix duplication; implemented responsive navigation with React Router for multi-path gameplay.
    Lesson Learned: Learned careful state management in React.
    `,
    image: '/images/talasam.png',
    techStack: ["React", "React Router", "CSS", "Git"],
    type: "Front-end",
    demoLink: "https://talasam-deploy.vercel.app",
    githubLink: "https://github.com/DreamersJS/talasymite-se-zavryshtat",
  },
  {
    id: 5,
    name: "Wellness Website",
    description: "Full-stack wellness platform with personalized plans, authentication, and admin features.",
    story: `
    Problem: Needed full-stack wellness platform with auth, user roles, and personalized plans.
    Solution: Built frontend in React + Recoil, backend with Express & Prisma, email confirmation with Nodemailer + Redis, admin dashboard, and responsive UI with Tailwind/MUI.
    Lesson Learned: Learned full-stack orchestration, database modeling with Prisma, email verification flow.
    `,    
    image: '/images/wellness.png',
    techStack: [
      "React", "Recoil", "Express", "TailwindCSS", "MUI", "PostgreSQL",
      "Prisma ORM", "Nodemailer", "Redis", "JWT", "bcrypt", "React Testing Library", "Vitest", "Git"
    ],
    type: "Full-stack",
    demoLink: "",
    githubLink: "https://github.com/DreamersJS/website17",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/DreamersJS",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/zvezda-neycheva-08a25b27b/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume",
    icon: "resume",
    newTab: false,
  },
];