import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  Java,
  tailwind,
  Python,
  git,
  figma,
  stocksim,
  devportfolio,
  linux,
  threejs,
  geeksquad,
  ulimo,
  brianjanoscrat,
  alexkotmel,
  PostgreSQL,
  clickup
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Computer Technician",
    icon: web,
  },
  {
    title: "Aspiring Developer",
    icon: mobile,
  },
  {
    title: "Ethical Hacking Enthusiast",
    icon: backend,
  },
  {
    title: "Driven Technologist",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: Python
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL, 
  },
  {
    name: "ClickUp",
    icon: clickup,
  },

];

const experiences: TExperience[] = [
  {
    title: "Software Developer Intern",
    companyName: "ULimo",
    icon: ulimo,
    iconBg: "#130e00ff",
    date: "May 2025 - Present",
    points: [
      "Architected a scalable backend using Supabase and PostgreSQL to optimize ride data queries, reducing API response times by 35% and improving user experience.",
      "Designed interactive UI/UX mockups in Figma for the new driver portal, accelerating stakeholder approvals by 40% and ensuring dev-ready assets.",
      "Collaborated with the product team to scope and prototype an AI-powered ride-booking assistant, projected to double booking speed and reduce user drop-off rates by 30%.",
      "Participated in daily standups and Agile Scrum workflows, managing tasks through ClickUp to increase sprint delivery speed by 25% and improve cross-team communication.",
    ]
    
  },
  {
    title: "Advanced Repair Technician",
    companyName: "GeekSquad",
    icon: geeksquad,
    iconBg: "#e98c13ff",
    date: "April 2025 - Present",
    points: [
      "Diagnosed & resolved hardware/software failures across Windows, macOS, and iPhone devices, restoring 95% of client devices to full functionality within service-level targets.",
      "Assembled custom PC builds and performed component-level repairs on laptops, AIO desktops, and Apple products, reducing turnaround time on complex builds by 30%.",
      "Recovered & transferred customer data from damaged or inaccessible systems using advanced tools, saving an average of 500GB of critical data per week.",
      "Reimaged systems and bypassed Windows setup restrictions via Command Prompt scripting, enabling 20% faster deployment for refurbished units.",
      "Documented all repairs and diagnostics in the internal system, increasing handoff efficiency between technicians by 40% and reducing repeat visits.",  
    ]
    
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Pending... But it's something good:)))", // This is a placeholder for a testimonial. Add a real testimonial here.
    name: "Brian Janoscrat",
    designation: "Technical Support Engineer",
    company: "CARFAX",
    image: brianjanoscrat,
  },
  {
    testimonial:
      "Pending, He will also tell you that I am amazing", // This is a placeholder for a testimonial. Add a real testimonial here.
    name: "Alex Kotmel",
    designation: "Accountant",
    company: "Vault Consulting",
    image: alexkotmel,
  },
  {
    testimonial:
      "Pending, for someone special", // This is a placeholder for a testimonial. Add a real testimonial here.
    name: "Anonymous",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Quick Markets",
    description:
      "Contributing to a real-time stock market simulator with a Django REST API backend and React/Chart.js frontend. Building interactive components and integrating live chart updates based on a Geometric Brownian Motion simulation. Currently onboarding to the codebase and preparing to write test cases for pricing logic.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: stocksim,
    sourceCodeLink: "https://github.com/MichaelAho1/QuickMarkets.git",
  },
  {
    name: "Dev Portfolio",
    description:
      "Customized an open source 3D portfolio website using React Three Fiber, showcasing my skills, experience, and projects in a visually engaging manner, with integrated API functionality for real-time communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: devportfolio,
    sourceCodeLink: "https://github.com/simonjb679/PortfolioWeb.git",
  },
  {
    name: "Ubuntu Dual Boot",
    description:
      "Resurrected a broken Ubuntu | Windows dual-boot system using terminal level recovery: GRUB repair, EFI reconfiguration, and chroot access via Live USB. No reinstall was needed.",
    tags: [
      {
        name: "linux",
        color: "blue-text-gradient",
      },
      {
        name: "bash",
        color: "green-text-gradient",
      },
      {
        name: "efi",
        color: "pink-text-gradient",
      },
    ],
    image: linux,
    sourceCodeLink: "https://github.com/simonjb679/ubuntu-dual-boot-recovery.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
