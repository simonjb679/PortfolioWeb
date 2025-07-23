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
      content: 
      `I’m a Computer Science student at George Mason University with real-world experience in advanced hardware repairs, Linux systems, and building software with small, collaborative teams.
       Right now, I work as an Advanced Repair Technician at Geek Squad, where I handle the tough jobs — diagnosing and fixing complex hardware and software issues, recovering systems, and making sure every client feels confident using their device when they leave.
       On top of that, I’m part of a growing startup, ULimo, where I’ve worked on some exciting projects like an Instagram DM automation bot and the driver portal for their new rideshare platform. Being part of those teams has taught me a lot about backend systems, automation, and how to turn ideas into working products.
       I’ve also earned my Google Cybersecurity Professional Certificate, and I’m planning to keep building on that with the CompTIA Security+ next.
       I’m passionate about solving problems, learning new things, and building tools that make a difference. Right now, I’m looking for opportunities in:
       
       Data Center Technician,
       Cybersecurity Internships,
       and
       Software Development Internships.
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
