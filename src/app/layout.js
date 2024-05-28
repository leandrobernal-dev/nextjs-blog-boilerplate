import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

import { SITE } from "@/config/config";
import Nav from "@/layout/Nav";
import Footer from "@/layout/Footer";
import ContextProvider from "@/context/UserDataContext";
import GoogleAdsense from "@/components/GoogleAdsense";

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
        <div className="mx-2 flex min-h-screen w-[95%] max-w-5xl flex-col md:w-[85%]">
          <ContextProvider>
            <Nav />
            {children}
            <Footer />
          </ContextProvider>
        </div>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_GTAG} />
        <GoogleAdsense />
      </body>
    </html>
  );
}
