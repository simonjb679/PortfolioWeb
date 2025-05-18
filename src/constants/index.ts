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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  stocksim,
  devportfolio,
  linux,
  threejs,
  geeksquad,
  ulimo,
  brianjanoscrat,
  alexkotmel,
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
    title: "Full-Stack Web App Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "IT Consultant Support Agent",
    icon: backend,
  },
  {
    title: "Ethical Hacker Enthusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
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
      "Performed diagnostics on consumer hardware & software, identifying technical failures.",
      "Provided tier-1 and tier-2 technical support, including OS re-installation, Device Setup & Customization, data backup and transfer, and peripheral integration.",
      "Assessed system performance and recommended hardware upgrades, software optimizations, or configuration changes tailored to client needs.",
      "Delivered post-repair/service client consultations: explaining resolutions, demonstrating proper usage, and ensuring confidence with newly serviced devices.",
    ],
  },
  {
    title: "Software Developer",
    companyName: "ULimo - (Startup Project Team) so far I've..",
    icon: ulimo,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [
      "Designed high-fidelity UI mockups in Figma for both desktop and mobile platforms, contributing to interface planning and layout decisions.",
      "Collaborated directly with the company founder during product discussions to shape the upcoming “Dynamic Ride Share” feature.",
      "Proposed and implemented new “Contact Us” and “Careers” sections to improve outreach and attract future collaborators and interns.",
      "Participated in a remote team using Figma, Google Docs, and Discord to iterate on design & function ideas and share feedback.",
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
