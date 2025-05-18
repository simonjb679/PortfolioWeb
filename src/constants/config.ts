type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Simon Benitez | My Portfolio",
    fullName: "Simon Benitez",
    email: "johndoe@mail.com",
  },
  hero: {
    name: "Simon",
    p: ["CS Student @ GMU | IT / Dev"],
  },
  contact: {
    p: "Intrested in hiring me?",
    h2: "Contact Me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "If I may...",
      content: `I’m a Computer Science student at George Mason University with hands-on experience in IT support, Linux systems, and collaborative development.

Currently, I work as a Geek Squad IT Consultant, where I troubleshoot hardware/software issues, perform OS-level repairs, and assist clients across Windows, macOS, and Linux environments. I’m also interning as a software developer, gaining experience with GitLab, QA testing, and terminal-based workflows (Bash & zsh).

I’m actively pursuing certifications like CompTIA Security+ and the Google Cybersecurity Certificate to strengthen my foundation in cybersecurity.

Whether it’s resolving system issues, contributing to dev projects, or learning how to secure digital infrastructure, I’m passionate about solving problems and growing as a tech professional.

I’m currently open to part-time or full-time opportunities in:
- IT Support / Help Desk
- Linux System Administration (Entry-Level)
- Cybersecurity Internships / Entry-Level Analyst Roles
- QA Testing
`,
    },
    experience: {
      p: "I am actively looking for work! :)",
      h2: "Relevant Work Experience.",
    },
    feedbacks: {
      p: "Word on the street",
      h2: "Testimonials.",
    },
    works: {
      p: "What have I been up to?",
      h2: "Projects.",
      content: `This section showcases my hands on work across full stack development, real time data systems, and system level recovery. 
      These projects demonstrate my ability to work across diverse tech stacks, interface with APIs, and engineer solutions to real world 
      problems. I am currently cooking up... check back soon!`,
    },
  },
};
