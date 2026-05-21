export const projectsData = [
  {
    id: 1,
    name: "ZAMO Chat App (Team Project)",
    description: "Real-time communication platform with messaging, video calls, channels, reactions, and friend management",
    highlights: [
      "Implemented WebRTC video calls with Firebase signaling and TURN server support",
      "Built real-time messaging, channels, reactions, and friend management features",
      "Developed authentication and profile management flows using React Context API",
      "Resolved production deployment and React Router routing issues on Vercel",
      "Tested cross-browser and multi-device WebRTC compatibility",
      "Collaborated in a 3-person team using GitHub workflows"
    ],
    image: '/images/zamo-chat.png',
    techStack: ["React", "TailwindCSS", "Firebase", "WebRTC"],
    type: "Front-end",
    demoLink: "https://zamo-chat-app.vercel.app",
    githubLink: "https://github.com/Alpha-55-JS-Web-Programming/Final-Project-Team5",
    // videoLink: "",
  },
  {
    id: 2,
    name: "Socket.io Chat App",
    description: "Real-time chat application with authentication and chat rooms.",
    highlights: [
      `Used Socket.io for real-time, bidirectional communication between clients and the server`,
      "Build user authentication with jsonwebtoken for secure token-based sessions",
      "Build Room Management flow",
      "Build Feedback System",
      "Used Suspense and Lazy",
      "Implemented DeepL API translation"
    ],
    image: '/images/socket-chat.png',
    techStack: ["Express", "Socket.io", "MySQL", "JWT"],
    type: "Full-stack",
    demoLink: "",
    githubLink: "https://github.com/DreamersJS/express-project1",
  },
  {
    id: 3,
    name: "Whiteboard App",
    description: "Collaborative online whiteboard for drawing and chatting in real time.",
    highlights: [
      "Developed collaborative real-time drawing synchronization using Socket.IO",
      "Implemented persistent authentication with cookies and Recoil state management",
      "Built interactive drawing features using HTML Canvas",
      "Containerized backend services with Docker and managed versions through GHCR",
      "Built room-based socket communication for shared whiteboard sessions"
    ],
    image: '/images/whiteboard.png',
    techStack: ["Next.js", "Socket.io", "TailwindCSS", "Firebase", "Docker", "Jest"],
    type: "Full-stack",
    demoLink: "https://whiteboard-app-green-psi.vercel.app",
    githubLink: "https://github.com/DreamersJS/next.js-project1",
  },
  {
    id: 4,
    name: "Text-Adventure App",
    description: "Interactive highlights game where players make choices that shape the narrative.",
    highlights: [
      `Implemented responsive navigation with React Router for multi-path gameplay`,
      "Implemented Inventory & Trade system"
    ],
    image: '/images/talasam.png',
    techStack: ["React", "React Router", "CSS", "Git"],
    type: "Front-end",
    demoLink: "https://talasam-deploy.vercel.app",
    githubLink: "https://github.com/DreamersJS/talasymite-se-zavryshtat",
  },
  {
    id: 5,
    name: "Wellness Website",
    description: "Full-stack wellness platform with products, cart, authentication, and admin features.",
    highlights: [
      "Implemented JWT authentication with refresh-token rotation and silent login",
      "Built email verification flow using Redis, Nodemailer, and Ethereal",
      "Developed REST APIs with PostgreSQL and Prisma ORM",
      "Structured product controllers using CQRS-inspired architecture",
      "Added integration and unit testing with Jest, Vitest, and SuperTest",
      "Configured isolated Docker-based testing database environments"
    ],
    image: '/images/wellness.png',
    techStack: [
      "Recoil", "Express", "PostgreSQL",
      "Prisma ORM", "Nodemailer", "Redis", "JWT", "Vitest", "Jest", "SuperTest"
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