"use client";
import Script from "next/script";
import { useEffect } from "react";

const GoogleAdsense = () => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  return (
    <Script
      async
      rel="preload"
      strategy="lazyOnload"
      onError={(e) => {
        console.error("Script failed to load", e);
      }}
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1347372836296078"
      crossOrigin="anonymous"
    />
  );
};

export default GoogleAdsense;
