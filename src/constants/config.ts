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
    p: ["I'm a Full Stack Developer"],
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
      content: `I am a full stack developer with experience working on both solo and collaborative 
      projects focused on usability, performance, and clean architecture. Currently, I’m using Figma 
      to design and prototype UI/UX concepts for ULimo, a growing startup developing a feature called 
      “Dynamic Ride Share” set to launch this summer. The project has given me hands-on product design 
      experience while I continue growing as a developer and exploring new opportunities in 
      Software Development, IT, and Cybersecurity. I’m also working toward my CompTIA Security+ certification 
      by first completing the Google Cybersecurity Professional Certificate to build a strong foundation.`,
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
