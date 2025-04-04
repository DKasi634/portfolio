import { CiMail, CiInstagram, CiLinkedin } from "react-icons/ci";



import TSIcon from "../assets/stack/svgs/typescript-image.svg"
import JSIcon from "../assets/stack/svgs/javascript-image.svg"
import PythonIcon from "../assets/stack/svgs/python-original.svg"
import ReactIcon from "../assets/stack/svgs/react-original.svg"
import TailWindIcon from "../assets/stack/svgs/tailwindcss-original.svg"
import DjangoIcon from "../assets/stack/svgs/django-plain.svg"
import CSSIcon from "../assets/stack/svgs/css3-original.svg"
import GitIcon from "../assets/stack/svgs/git-original.svg"



import ChapsokoImage from "../assets/screenshots/chapsoko-screenshot.png"
import GreenGateImage from "../assets/screenshots/green-gate-screenshot.png"
import PlastyCorImage from "../assets/screenshots/plastycor-screenshot-1.png"
import VawulensImage from "../assets/screenshots/vawulens-screenshot.png"

import { ContactItem, Project, Service } from "../types";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaCode, FaDatabase, FaServer, FaChartLine } from "react-icons/fa";
// import { CiSettings } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";

type navMenuItem = {
    label:string,
    hash:string,
}

export const navLinks:navMenuItem[] = [
    { label:"Home", hash:'' },
    { label:"About", hash:'about' },
    { label:"Services", hash:'services' },
    { label:"Portfolio", hash:'portfolio' },
]

export const techStackElements: Array<{ name: string; icon: string; description: string }> = [
    {
      name: "TypeScript",
      icon: TSIcon,
      description:
        "I use TypeScript to add type safety and structure to my JavaScript projects, which helps me write cleaner and more maintainable code.",
    },
    {
      name: "JavaScript",
      icon: JSIcon,
      description:
        "JavaScript is my go-to language for building dynamic and interactive web applications. It's versatile and powerful, and I love how it brings ideas to life in the browser.",
    },
    {
      name: "Python",
      icon: PythonIcon,
      description:
        "Python is my favorite language for backend development. Its simplicity and readability make it perfect for a ton of usecases.",
    },
    {
      name: "Django",
      icon: DjangoIcon,
      description:
        "With Django, I can quickly build secure and scalable backend systems. Its batteries-included approach saves me time and effort when developing complex applications.",
    },
    {
      name: "React",
      icon: ReactIcon,
      description:
        "I use React to build efficient and modern frontends with reusable components. Its component-based architecture makes it easy to manage state and create responsive user interfaces.",
    },
    {
      name: "TailwindCSS",
      icon: TailWindIcon,
      description:
        "TailwindCSS has transformed the way I style my projects. With its utility-first approach, I can rapidly prototype designs and ensure consistency across my applications.",
    },
    {
      name: "CSS",
      icon: CSSIcon,
      description:
        "CSS is the foundation of all my designs. Whether I'm working on layouts, animations, or responsive design, CSS gives me the flexibility to bring my visions to life.",
    },
    {
      name: "Version control",
      icon: GitIcon,
      description:
        "CSS is the foundation of all my designs. Whether I'm working on layouts, animations, or responsive design, CSS gives me the flexibility to bring my visions to life.",
    },
  ];




export const projectData: Project[] = [
  {
    name: "Chapsoko web platform",
    image: ChapsokoImage, // Path to the project screenshot
    description:
      "A fully responsive e-commerce-like web application built with React and Redux. Users can browse products and contact their owners to complete the purchase",
    link: "https://chapsoko-dev.web.app/",
  },
  {
    name: "Plastycor ",
    image: PlastyCorImage,
    description: "An NGO website built for Plastycor to help them expand their online presence and expose their products. It allows users to learn about the different aspects of Plastcor while having the possibility to browse through their products and buy any of them by contacting them directly.",
    link: "https://plastycor.org",
  },
  {
    name: "Vawulens sports",
    image: VawulensImage,
    description:
      "A mock gym website for Vawulens where they can showcase their activities and promote them. Users can learn more about Vawulens and get information about their different pricing plans.",
    link: "https://vawulens-sports.web.app",
  },
  {
    name: "Green Gate Resto",
    image: GreenGateImage,
    description:
      "A mock resto frontend website offering the users the possibility to check the menus and make reservations. Users can also make online orders",
    link: "https://green-gate-resto.web.app",
  },
];



// Define the contacts array
export const contacts: ContactItem[] = [
  {
    name: "Gmail",
    contact: "mailto:dkasi634@gmail.com",
    icon: <CiMail  />,
  },
  {
    name: "WhatsApp",
    contact: "https://wa.me/243975623008",
    icon: <BiLogoWhatsapp  />,
  },
  {
    name: "LinkedIn",
    contact: "https://www.linkedin.com/in/daniel-kasi-32093b228",
    icon: <CiLinkedin />,
  },
  {
    name: "Instagram",
    contact: "https://www.instagram.com/dkasi634/",
    icon: <CiInstagram />,
  },
  {
    name: "GitHub",
    contact: "https://github.com/DKasi634",
    icon: <IoLogoGithub />,
  },
];




export const servicesData: Service[] = [
  {
    name: "Frontend Development",
    description:
      "I create visually appealing and responsive user interfaces using modern technologies like React JS, TypeScript, and TailwindCSS",
    icon: <FaCode className="text-4xl" />,
  },
  {
    name: "Backend Development",
    description:
      "I build robust server-side logic and APIs using frameworks like Django to ensure scalability and performance.",
    icon: <FaServer className="text-4xl" />,
  },
  {
    name: "Database Management",
    description:
      "I handle both SQL (PostgreSQL, MySQL) and NoSQL (Firebase) databases to design efficient data storage solutions.",
    icon: <FaDatabase className="text-4xl" />,
  },
  {
    name: "Web Application Optimization",
    description:
      "I optimize web applications for speed, security, and scalability, ensuring they perform well under load.",
    icon: <FaChartLine className="text-4xl" />,
  },
  // {
  //   name: "System Integration",
  //   description:
  //     "I integrate third-party services and APIs into your projects to enhance functionality and streamline processes.",
  //   icon: <CiSettings className="text-4xl" />,
  // },
];