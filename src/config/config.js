import { Github } from "lucide-react";

export const SITE = {
  website: "https://bernalleandro.com/",
  author: "Leandro Bernal",
  description: "Software Development and Tech Blogs",
  title: "Leandro Bernal",
  logo: (
    <div className="flex items-center gap-1">
      <img
        src="/logo.png"
        alt=""
        draggable={false}
        className="w-14 shadow-md shadow-black"
      />
      Leandro Bernal
    </div>
  ),
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
