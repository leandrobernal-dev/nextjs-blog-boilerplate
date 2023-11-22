"use client";

import { createContext, useState } from "react";

export const UserDataContext = createContext();

export default function ContextProvider({ children }) {
  const [blogs, setBlogs] = useState([
    {
      title: "Astro 1.0",
      createdAt: "Novermber 22, 2023 | 01:26 PM",
      slug: "astro-v-1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere consequatur, quod impedit ullam quisquam!",
      tags: "astro",
    },
  ]);

  return (
    <UserDataContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </UserDataContext.Provider>
  );
}
