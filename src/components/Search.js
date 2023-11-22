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
          className="w-full rounded-md border-none bg-transparent p-4 outline-none outline-orange-500 focus:outline-orange-500 active:outline-orange-500"
        />
      </div>
      {children}
    </>
  );
}
