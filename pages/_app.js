import Preloader from "@/src/components/Preloader";
import "../styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 100);
  }, []);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Head>
        <title>Manik | Portfolio</title>
        <meta name="description" content="Manik | Portfolio" />
        <meta name="keywords" content="Manik | Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
