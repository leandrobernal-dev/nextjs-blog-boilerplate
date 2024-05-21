"use client";

import { useRouter } from "next/navigation";

export default function Search({ children, searchQuery }) {
  const router = useRouter();
  return (
    <>
      <div className="">
        <input
          type="text"
          name=""
          id=""
          autoFocus
          onInput={(e) =>
            router.replace(
              e.target.value ? `/search?q=${e.target.value}` : "/search/",
            )
          }
          defaultValue={searchQuery}
          placeholder="Search..."
          className="w-full rounded-sm border border-b border-none border-b-primary-500 bg-gray-900 p-4 shadow-lg shadow-black outline-none "
        />
      </div>
      {children}
    </>
  );
}
