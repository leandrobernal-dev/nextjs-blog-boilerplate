export const SITE = {
  author: "Leandro Bernal",
  author_title: "Software Engineer",
  description: "Software Development and Tech Blogs",
  title: "Leandro Bernal",
  logo: (
    <div className="flex items-center gap-1">
      <img src="/logo.svg" alt="" className="w-16" draggable={false} />
      <div className="logo-text-container absolute left-8 w-80 overflow-hidden whitespace-nowrap">
        <span className="logo-text relative inline-block whitespace-nowrap">
          Leandro Bernal<span className="text-accent">.</span>
        </span>
      </div>
    </div>
  ),
  postPerPage: 5,
};
