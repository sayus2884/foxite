import "../styles/globals.css";
import { Normalize } from "styled-normalize";
import type { AppProps } from "next/app";
import Layout from "../sections/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Normalize />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
