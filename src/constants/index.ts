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
    title: "IT Support & Systems Technician",
    icon: web,
  },
  {
    title: "Aspiring Developer",
    icon: mobile,
  },
  {
    title: "Cybersecurity & Ethical Hacking Enthusiast",
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
    points: 
      "Collaborated with a fast-moving startup on multiple full-stack projects. Contributed to backend development using Supabase and PostgreSQL, integrated automation tools like an Instagram DM bot, and helped design UI/UX solutions for the company’s ride-share driver portal using Figma. Actively participated in Agile sprints, technical standups, and GitHub workflows to deliver scalable, production-ready features.",
    
  },
  {
    title: "Advanced Repair Technician",
    companyName: "GeekSquad",
    icon: geeksquad,
    iconBg: "#e98c13ff",
    date: "April 2025 - Present",
    points: 
      "Diagnosed and resolved a wide range of hardware and software issues in consumer and company devices. Assembled custom PC builds, replaced components in laptops, AIO desktops, and Apple products. Extracted and transfered data from damaged or inaccessible systems, and reimaged machines using advanced tools like command prompt bypasses. Maintained thorough repair documentation to ensure seamless technician handoffs and team efficiency.",
    
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
