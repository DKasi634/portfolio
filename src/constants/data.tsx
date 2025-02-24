
import TSIcon from "../assets/stack/svgs/typescript-image.svg"
import JSIcon from "../assets/stack/svgs/javascript-image.svg"
import PythonIcon from "../assets/stack/svgs/python-original.svg"
import ReactIcon from "../assets/stack/svgs/react-original.svg"
import TailWindIcon from "../assets/stack/svgs/tailwindcss-original.svg"
import DjangoIcon from "../assets/stack/svgs/django-plain-wordmark.svg"
import CSSIcon from "../assets/stack/svgs/css3-original.svg"



import ChapsokoImage from "../assets/screenshots/chapsoko-screenshot.png"
import GreenGateImage from "../assets/screenshots/green-gate-screenshot.png"
import PlastyCorImage from "../assets/screenshots/plastycor-screenshot-1.png"
import VawulensImage from "../assets/screenshots/vawulens-screenshot.png"

import { Project } from "../types";

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
        "Python is my favorite language for backend development and scripting. Its simplicity and readability make it perfect for a ton of usecases.",
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
  ];




export const projectData: Project[] = [
  {
    name: "E-commerce Website",
    image: ChapsokoImage, // Path to the project screenshot
    description:
      "A fully responsive e-commerce website built with React, Redux, and Stripe for payment processing. Users can browse products, add items to their cart, and complete purchases securely.",
    link: "https://example.com/ecommerce",
  },
  {
    name: "Personal Blog",
    image: PlastyCorImage,
    description: "A personal blogging platform developed with Django and React. It allows users to create, edit, and publish blog posts with rich text formatting and media embedding.",
    link: "https://example.com/blog",
  },
  {
    name: "Task Manager App",
    image: VawulensImage,
    description:
      "A task management application built with React and Firebase. Users can organize tasks, set deadlines, and track progress. The app supports authentication and real-time updates.",
    link: "https://example.com/task-manager",
  },
  {
    name: "Task Manager App",
    image: GreenGateImage,
    description:
      "A task management application built with React and Firebase. Users can organize tasks, set deadlines, and track progress. The app supports authentication and real-time updates.",
    link: "https://example.com/task-manager",
  },
];