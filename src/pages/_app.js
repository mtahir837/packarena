import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { AuthProvider } from "@/utils/useAuth";

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#667eea]"></div>
  </div>
);

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleEnd = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleEnd);
    Router.events.on("routeChangeError", handleEnd);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleEnd);
      Router.events.off("routeChangeError", handleEnd);
    };
  }, []);

  return (
    <AuthProvider>
      <Head>
        <link rel="icon" href="/images/head-logo.PNG" />
      </Head>
      <div>
        {loading && <Loader />}
        <Component {...pageProps} />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </AuthProvider>
  );
}

