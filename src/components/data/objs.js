// Navigation Items
export const navItems = [
  {id: 1, name: 'Home', href: '#hero'},
  {id: 2, name: 'About', href: '#about'},
  {id: 3, name: 'Skills', href: '#skills'},
  {id: 4, name: 'Projects', href: '#projects'},
  {id: 5, name: 'Contact', href: '#contact'},
];

// Skills Items
import { RiNextjsLine } from 'react-icons/ri';
import { FaReact, FaNodeJs, FaGithub, FaCode, FaKey } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoJavascript } from 'react-icons/bi';
import { IoLogoCss3, IoLogoHtml5, IoLogoFigma } from 'react-icons/io5';
import { SiSass, SiExpress, SiTypescript, SiZod, SiPrisma, SiPostgresql, SiSqlite, SiRedis, SiDocker, SiSwagger } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const skills = [
  // Frontend
  { id: 1, name: 'Next.js', category: 'frontend', logo: RiNextjsLine },
  { id: 2, name: 'React.js', category: 'frontend', logo: FaReact },
  { id: 3, name: 'TypeScript', category: 'frontend', logo: SiTypescript },
  { id: 4, name: 'JavaScript', category: 'frontend', logo: BiLogoJavascript },
  { id: 5, name: 'Tailwind CSS', category: 'frontend', logo: RiTailwindCssFill },
  { id: 6, name: 'CSS', category: 'frontend', logo: IoLogoCss3 },
  { id: 7, name: 'Sass', category: 'frontend', logo: SiSass },
  { id: 8, name: 'HTML', category: 'frontend', logo: IoLogoHtml5 },
  { id: 9, name: 'Zod', category: 'frontend', logo: SiZod },

  // Backend
  { id: 10, name: 'Node.js', category: 'backend', logo: FaNodeJs },
  { id: 11, name: 'Express.js', category: 'backend', logo: SiExpress },
  { id: 12, name: 'REST API', category: 'backend', logo: FaCode },
  { id: 13, name: 'JWT', category: 'backend', logo: FaKey },
  { id: 14, name: 'Prisma ORM', category: 'backend', logo: SiPrisma },

  // Database
  { id: 15, name: 'PostgreSQL', category: 'backend', logo: SiPostgresql },
  { id: 16, name: 'SQLite', category: 'backend', logo: SiSqlite },
  { id: 17, name: 'Redis', category: 'backend', logo: SiRedis },

  // Tools & Infrastructure
  { id: 18, name: 'Git/GitHub', category: 'tools', logo: FaGithub },
  { id: 19, name: 'VS Code', category: 'tools', logo: VscVscode },
  { id: 20, name: 'Docker', category: 'tools', logo: SiDocker },
  { id: 21, name: 'Swagger', category: 'tools', logo: SiSwagger },
  { id: 22, name: 'Figma', category: 'tools', logo: IoLogoFigma },
];

// Education
export const educations = [
  {
    id: 1,
    course: "Web Development",
    time: "Aug 2024 - Mar 2026",
    inst: "Roskilde Tekniske Skole, Denmark"
  },
  {
    id: 2,
    course: "Web Development Bootcamp",
    time: "10 weeks - 2023",
    inst: "bootcamp.dev"
  },
  {
    id: 3,
    course: "AWS re/Start program",
    time: "3 months intensive course - 2022",
    inst: "Convision, Denmark"
  },
  {
    id: 4,
    course: "App development with ASP.NET MVC",
    time: "6 weeks - 2022",
    inst: "nyledige.dk"
  },
  {
    id: 5,
    course: "Web development for beginners",
    time: "6 weeks - 2020",
    inst: "nyledige.dk"
  },
  {
    id: 6,
    course: "Master of Science in Mathematical Modelling and Simulation",
    time: "2009 - 2011",
    inst: "BTH, Sweden"
  },
  {
    id: 7,
    course: "Bachelor of Science in Mathematics",
    time: "1999 - 2003",
    inst: "University of Dhaka, Bangladesh"
  }
]

// Certifications
export const Certifications = [
  {
    id: 1,
    course: "AWS Certified Cloud Practitioner (CLF-C01)",
    time: "December 2022",
    inst: " | AWS"
  },
  {
    id: 2,
    course: "Introduction to Programming Using HTML and CSS",
    time: "April 2021",
    inst: " | Microsoft"
  },
  {
    id: 3,
    course: "Software Development Fundamentals",
    time: "March 2021",
    inst: " | Microsoft"
  }
]

// Project
export const projects = [
  {
    id: 1,
    title: 'TaskFlow – Full-Stack Task Management Platform',
    description: 'A productivity platform designed to simplify task organization, track progress, and help users stay focused on their daily goals.',
    image: '/taskflow.png',
    tags: ['Next', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
    demoUrl: 'https://taskflow-satyobroto.vercel.app',
    githubUrl: 'https://github.com/broto1234/taskflow-frontend',
    demoUrlBackend: 'https://taskflow-api-c3hg.onrender.com/',
    githubUrlBackend: 'https://github.com/broto1234/taskflow-api',
  },
  {
    id: 2,
    title: 'Landrup Dans – Dance Activity Management Platform',
    description: 'A full-stack application demonstrating JWT authentication, role-based access, CRUD operations, and integration with an external REST API.',
    image: '/landrupDans.jpg',
    tags: ['Next.js', 'Tailwindcss', 'Zod', 'JWT', 'REST API'],
    demoUrl: 'https://landrup-dans-omega.vercel.app',
    githubUrl: 'https://github.com/broto1234/landrup-dans',
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with React and TailwindCSS to showcase projects, technical skills, and frontend development experience.',
    image: '/portfolio.jpg',
    tags: ['React', 'Tailwindcss', 'Responsive Design'],
    demoUrl: 'https://satyobroto-portfolio.vercel.app/',
    githubUrl: 'https://github.com/broto1234/satyobroto-portfolio',
  },
  {
    id: 4,
    title: 'Real Estate Web App',
    description: 'A modern house selling website where users can browse properties and save their favorites after logging in.',
    image: '/realState.jpg',
    tags: ['React', 'Tailwindcss', 'Fetch API'],
    demoUrl: 'https://your-dream-home.netlify.app/',
    githubUrl: 'https://github.com/rts-cmk-wu13/dinmaegler-broto1234',
  },
  {
    id: 5,
    title: "GitHub user's search app",
    description: "Users can search for GitHub profiles by username and view relevant public information pulled from GitHub’s API.",
    image: '/githubUser.jpg',
    tags: ['React', 'Tailwindcss', 'Fetch API'],
    demoUrl: 'https://react-github-user-search-mu.vercel.app/',
    githubUrl: 'https://github.com/broto1234/react-github-user-search',
  },
  {
    id: 6,
    title: 'Pokédex',
    description: 'A responsive and dynamic website that fetchs data from the "PokéAPI"',
    image: '/pokedex.jpg',
    tags: ['JavaScript', 'CSS', 'Fetch API'],
    demoUrl: 'https://my-project-pokedex.netlify.app/',
    githubUrl: 'https://github.com/rts-cmk-wu13/pokedex-broto1234',
  },  
  {
    id: 7,
    title: 'My movie App',
    description: 'A movie application that fetches data from "The Movie Database".',
    image: '/myMovie.jpg',
    tags: ['JavaScript', 'CSS', 'Fetch API'],
    demoUrl: 'https://themovie-db-app.netlify.app/',
    githubUrl: 'https://github.com/rts-cmk-wu13/mymovie-broto1234',
  }  
  // ,
  // {
  //   id: 6,
  //   title: "HiFi Horizon — Full-Stack React & Express API Project",
  //   description: "A full-stack React application that consumes a custom RESTful API built with Express and deployed on Render. Includes product, user, and newsletter endpoints with real-time data fetching via React Router loaders.",
  //   image: '',
  //   tags: ['React', 'Tailwindcss', 'vite', 'Express', 'Render'],
  //   demoUrl: '',
  //   githubUrl: '',
  // }
 ]
  // Contact
  import { MdEmail } from "react-icons/md";
  import { FaPhoneAlt } from "react-icons/fa";
  import { FaMapMarkerAlt } from "react-icons/fa";
  // import { FaGithub } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa";

  export const contactSocials = [
    {
      id: 1,
      link: "https://github.com/broto1234",
      logo: FaGithub
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/satyobroto",
      logo: FaLinkedin
    }
  ]

  export const contactInfo = [
    {
      id: 1, 
      title: "satyo97du@gmail.com",
      logo: MdEmail
    },
    {
      id: 2, 
      title: "+4571659540",
      logo: FaPhoneAlt
    },
    {
      id: 3, 
      title: "Copenhagen, Denmark",
      logo: FaMapMarkerAlt
    }
]


