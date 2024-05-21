"use client";

import { createContext, useState } from "react";

export const UserDataContext = createContext();

export default function ContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  return (
    <UserDataContext.Provider value={{ posts, setPosts }}>
      {children}
    </UserDataContext.Provider>
  );
}
