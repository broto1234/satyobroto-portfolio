// Navigation Items
export const navItems = [
  {id: 1, name: 'Home', href: '#hero'},
  {id: 2, name: 'About', href: '#about'},
  {id: 3, name: 'Skills', href: '#skills'},
  {id: 4, name: 'Projects', href: '#projects'},
  {id: 5, name: 'Contact', href: '#contact'},
];

// Skills Items
import { IoLogoHtml5 } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  {id: 1, name: 'HTML', category: 'frontend', logo: IoLogoHtml5},
  {id: 2, name: 'JavaScript', category: 'frontend', logo: BiLogoJavascript },
  {id: 3, name: 'React', category: 'frontend', logo: FaReact },
  {id: 5, name: 'CSS', category: 'frontend', logo: IoLogoCss3 },
  {id: 6, name: 'Tailwind CSS', category: 'frontend', logo: RiTailwindCssFill },
  {id: 7, name: 'Sass', category: 'frontend', logo: SiSass },

  {id: 4, name: 'Node.js', category: 'backend', logo: FaNodeJs },
  {id: 8, name: 'Express', category: 'backend', logo: SiExpress },
  {id: 9, name: 'Python', category: 'backend', logo: IoLogoPython },

  {id: 10, name: 'VS Code', category: 'tools', logo: VscVscode },
  {id: 11, name: 'Git/GitHub', category: 'tools', logo: FaGithub },
  {id: 12, name: 'Figma', category: 'tools', logo: IoLogoFigma },
];

// Education
export const educations = [
  {
    id: 1,
    course: "Web Development",
    time: "2024 - feb.2026",
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
    title: 'My Portfolio',
    description: 'Explore my web applications, projects, and skills in frontend development.',
    image: '/portfolio.jpg',
    tags: ['React', 'Tailwindcss', 'Vite'],
    demoUrl: 'https://satyobroto-portfolio.vercel.app/',
    githubUrl: 'https://github.com/broto1234/satyobroto-portfolio',
  },
  {
    id: 2,
    title: 'Real Estate Web App',
    description: 'A modern house selling website where users can browse properties and save their favorites after logging in.',
    image: '/realState.jpg',
    tags: ['React', 'Tailwindcss', 'Vite'],
    demoUrl: 'https://your-dream-home.netlify.app/',
    githubUrl: 'https://github.com/rts-cmk-wu13/dinmaegler-broto1234',
  },
  {
    id: 3,
    title: 'Pokédex',
    description: 'A responsive and dynamic website that fetchs data from the "PokéAPI"',
    image: '/pokedex.jpg',
    tags: ['JavaScript', 'CSS', 'Netlify'],
    demoUrl: 'https://my-project-pokedex.netlify.app/',
    githubUrl: 'https://github.com/rts-cmk-wu13/pokedex-broto1234',
  },  
  {
    id: 4,
    title: 'My movie App',
    description: 'A movie application that fetches data from "The Movie Database".',
    image: '/myMovie.jpg',
    tags: ['JavaScript', 'CSS', 'Netlify'],
    demoUrl: 'https://themovie-db-app.netlify.app/',
    githubUrl: 'https://github.com/rts-cmk-wu13/mymovie-broto1234',
  },
  {
    id: 5,
    title: "GitHub user's search app",
    description: "Users can search for GitHub profiles by username and view relevant public information pulled from GitHub’s API.",
    image: '/githubUser.jpg',
    tags: ['React', 'Tailwindcss', 'vite', 'Vercel'],
    demoUrl: 'https://react-github-user-search-mu.vercel.app/',
    githubUrl: 'https://github.com/broto1234/react-github-user-search',
  }
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


