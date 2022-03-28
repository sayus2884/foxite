import "../styles/globals.css";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "@configs/theme";

import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@sections/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Build & Deploy Fast with Foxite</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themeConfig}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
