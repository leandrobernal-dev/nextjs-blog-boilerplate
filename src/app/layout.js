import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

import { SITE } from "@/config/config";
import Nav from "@/layout/Nav";
import Footer from "@/layout/Footer";
import ContextProvider from "@/context/UserDataContext";

export const metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning={true}
        className={`${space_grotesk.className} flex justify-center overflow-y-scroll bg-white pl-[calc(100vw-100%)] text-base text-black antialiased dark:bg-gray-950 dark:text-white`}
      >
        <div className="mx-4 flex min-h-screen w-[85%] max-w-5xl flex-col">
          <ContextProvider>
            <Nav />
            {children}
            <Footer />
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
