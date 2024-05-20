import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
        className={`${ibmMono.className} flex justify-center overflow-y-scroll text-base dark:bg-black dark:text-white`}
      >
        <div className="mx-4 flex min-h-screen w-[95%] max-w-5xl flex-col">
          <ContextProvider>
            <Nav />
            <main className="flex-grow pb-8">{children}</main>
            <Footer />
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
