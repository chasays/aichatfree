import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://aichatfree.info",
  author: "aichat",
  desc: "",
  title: "",
  ogImage: "/images/android-chrome-192x192.png",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/chasays",
    linkTitle: ` ${SITE.title} Github `,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/troubleisfffff",
    linkTitle: `${SITE.title} 's X page`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:xxd0225@gmail.com",
    linkTitle: `email to  ${SITE.title}`,
    active: true,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `${SITE.title} rss source`,
    active: true,
  },
];
