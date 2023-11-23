import React from "react";
import dynamic from "next/dynamic";

const NoSSR = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
  loading: () => (
    <p className="my-10 flex h-36 w-full animate-pulse items-center justify-center rounded-lg bg-zinc-800">
      Loading...
    </p>
  ),
});
