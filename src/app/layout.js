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
        className={`${space_grotesk.className} flex justify-center overflow-y-scroll text-base dark:bg-black dark:text-white`}
      >
        <div className="mx-4 flex min-h-screen w-[95%] max-w-5xl flex-col">
          <ContextProvider>
            <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
              <Nav />
              {children}
            </section>
            <Footer />
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
