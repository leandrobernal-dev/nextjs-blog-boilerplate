import { Github } from "lucide-react";

export const SITE = {
  website: "https://blog.leiisme.com/",
  author: "Leandro Bernal",
  description: "Software Development and Tech Blogs",
  title: "Leandro Bernal",
  logo: `Leandro Bernal`,
  postPerPage: 5,
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/leandrobernal-dev",
    linkTitle: `${SITE.title} on Github`,
    icon: <Github />,
  },
];
