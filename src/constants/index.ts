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
    title: "IT Consultant | Support Agent",
    companyName: "Geeksquad - Part-time",
    icon: geeksquad,
    iconBg: "#383E56",
    date: "Apr 2025 - Present",
    points: [
      "Deliver Tier 1–2 technical support across Windows, macOS, and iOS devices, managing 30–40 service tickets daily via Workbench, NOVA, and Apple GSX.",
      "Perform diagnostics, OS reinstallation, device imaging, data migration, and hardware repairs (batteries, drives, displays).",
      "Utilize terminal-based tools and recovery environments to troubleshoot bootloader issues, corrupted OS files, and storage failures.",
      "Provide post-repair walkthroughs, configuration support, and tailored guidance to ensure client confidence and satisfaction.",
      "Communicate with clients via Outlook and the Geek Squad phone line to manage follow-ups, escalations, and service updates.",
      "Collaborate with team members through Microsoft Teams to triage issues and maintain smooth service workflows.",
      "Assist in onboarding new team members by training them on diagnostics tools, service intake procedures, and customer service best practices.",
    ],
  },
  {
    title: "Software Developer",
    companyName: "ULimo",
    icon: ulimo,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [
      "Collaborating with a startup building a dynamic ride-sharing platform for luxury group transportation, including limousines and party buses.",
      "Contributing to backend development using Supabase, PostgreSQL (PLpgSQL), and TypeScript, implementing ride-matching logic, authentication flows, and structured data workflows.",
      "Strengthening backend stability and supporting integration with frontend systems to accelerate progress toward a functional MVP.",
      "Participating in Agile sprints, standups, and retrospectives, working cross-functionally with product and design to align development with business goals.",
      "Using Git and GitHub to manage version control and collaborate effectively within a remote development team.",
    ],
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
