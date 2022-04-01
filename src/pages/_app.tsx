import "../styles/globals.css";
import "nprogress/nprogress.css";

import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "@configs/theme";

import { AppPropsWithLayout } from "@types";
import { useEffect } from "react";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    console.log("loading page");

    setPageLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Build & Deploy Fast with Foxite</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themeConfig}>
          {pageLoaded && (
            <>
              <NextNProgress />

              {getLayout(<Component {...pageProps} />)}
            </>
          )}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
