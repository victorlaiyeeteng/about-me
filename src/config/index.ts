import type {
  NavBarLink,
  Identity,
  HomePageContent,
  NowPageContent,
} from "../types/config";

import { homeSocialLinks } from "./social";
import { sourceLinks } from "./source";

export const identity: Identity = {
  name: "Victor Lai",
  logo: "/img/avatar.png",
  email: "vlai69863@gmail.com",
  headerLogo: "/img/avatar-laptop.png",
};


export const navBarLinks: NavBarLink[] = [
  {
    title: "more",
    url: "/now",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Victor Lai",
    description:
      "This is Victor Lai, a passionate Computer Science student interested in all things data.",
    domain: "none.com",
    url: "https://none.com",
  },
  role: "yee teng",
  description:
    "Aspiring Software Engineer specializing in building scalable and optimized data solutions.",
  homeSocialLinks: homeSocialLinks,
  sourceLinks,
};


// Now (/now)
export const nowPageContent: NowPageContent = {
  seo: {
    title: "What I'm doing now | Victor Lai",
    description:
      "A updated log of what I'm building, learning or exploring at different points of time.",
    domain: "none.com",
    url: "https://none.com",
  },
  title: "Now",
  subtitle: "What I'm working on.",
  sourceLinks,
};

export * from "./social";
export * from "./source";
export * from "./analytics";
export * from "./github";
