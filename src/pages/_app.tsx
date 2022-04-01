import "../styles/globals.css";
import "nprogress/nprogress.css";

import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "@configs/theme";

import { AppPropsWithLayout } from "@types";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Build & Deploy Fast with Foxite</title>
      </Head>
      <StyledEngineProvider>
        <ThemeProvider theme={themeConfig}>
          <NextNProgress />

          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
