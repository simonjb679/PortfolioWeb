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
    name: "Benitez",
    p: ["CS Student @ GMU | Full Stack Developer"],
  },
  contact: {
    p: "Intrested in hiring me or just catching my attention?",
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
      h2: "</>",
      content: 
      `I’m a Computer Science student at George Mason University with a passion for technology and a drive to learn. My journey in tech began with a fascination for computers, leading me to explore various fields including IT, software development, and cybersecurity. I thrive on challenges and am always eager to expand my skill set, whether it’s through hands-on projects or academic pursuits. My goal is to leverage my diverse experiences to make a meaningful impact in the tech industry.`,
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
      p: "Coming soon",
      h2: "Projects.",
      content: `This section will showcase my hands on work across full stack development. I am currently working on a couple of projects that will be added soon.`,
    },
  },
};
