import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  FeaturedPageContent,
  HomePageContent,
  NowPageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";
import { sourceLinks } from "./source";

export const identity: Identity = {
  name: "Victor Lai",
  logo: "/img/avatar.png",
  email: "vlai69863@gmail.com",
  headerLogo: "/img/avatar-laptop.png",
};

export const openGraphImage: string = "/img/vinitshahdeo-og.jpg";

export const navBarLinks: NavBarLink[] = [
  // {
  //   title: "home",
  //   url: "/",
  // },
  {
    title: "now",
    url: "/now",
  },
  // {
  //   title: "travel",
  //   url: "/featured",
  // },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Victor Lai",
    description:
      "Explore the portfolio of Victor Lai, a Computer Science student specializing in building database systems and parallel computing.",
    image: openGraphImage,
    domain: "none.com",
    url: "https://none.com",
  },
  role: "yee teng",
  description:
    "Aspiring Software Engineer specializing in building scalable and performant data services.",
  socialLinks: socialLinks,
  homeSocialLinks: homeSocialLinks,
  links: [
    {
      title: "Email", 
      url: "mailto:vlai69863@gmail.com",
      icon: "mdi:email",
      external:true, 
    },
    {
      title: "Source Credits",
      url: "https://github.com/vinitshahdeo/portfolio",
      icon: "mdi:github",
      external: true,
    },
  ],
  sourceLinks,
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About",
    description:
      "Discover Victor Lai, a Senior Software Engineer at Novo, formerly Software Engineer II at Postman. GitHub Star from India, specializing in Node.js, Go, Microservices, Kafka, GraphQL, REST, and AWS.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/about",
  },
  subtitle: "Thanks for stopping by! Here's a bit about me.",
  about: {
    description: `
      Senior Software Engineer at Novo | Previously at Postman | GitHub Star from India | Node.js, Go, Microservices, Kafka, GraphQL, REST, AWS | Based in Bengaluru, India
    `,
    image_l: {
      url: "/img/vinit_shahdeo.jpg",
      alt: "Victor Lai",
    },
    image_r: {
      url: "/img/vinit-shahdeo-square-1.jpg",
      alt: "Victor Lai",
    },
  },
  work: {
    description: `I'm a Senior Software Engineer at Novo, formerly Software Engineer II at Postman. I'm a GitHub Star from India, specializing in Node.js, Go, Microservices, Kafka, GraphQL, REST, and AWS.`,
    items: [
      {
        title: "Senior Software Engineer",
        company: {
          name: "Novo",
          image: "/logo/novo.jpg",
          url: "https://novo.co/",
        },
        date: "Aug 2023 - Present",
      },
      {
        title: "Software Engineer II",
        company: {
          name: "Postman",
          image: "/logo/postman.webp",
          url: "https://www.postman.com/",
        },
        date: "Jun 2021 - Sept 2023",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Postman",
          image: "/logo/postman.webp",
          url: "https://postman.com/",
        },
        date: "Jun 2019 - May 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

// Featured (/featured)
export const featuredPageContent: FeaturedPageContent = {
  seo: {
    title: "Featured Articles, Stories & Interviews | Victor Lai",
    description:
      "Explore a curated collection of articles, insightful stories, and exclusive interviews with Victor Lai, a Software Engineer and a GitHub Star from Bengaluru, India.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/featured",
  },
  subtitle: "Thoughts, stories, and interviews.",
};

// Now (/now)
export const nowPageContent: NowPageContent = {
  seo: {
    title: "What I'm doing now | Victor Lai",
    description:
      "A updated log of what I'm building, learning, reading or exploring at different points of time.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/now",
  },
  title: "Now",
  subtitle: "What I'm working on.",
  sourceLinks,
};

export * from "./music";
export * from "./social";
export * from "./featured";
export * from "./source";
export * from "./analytics";
export * from "./github";
