import React from "react";
import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";
import "../styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
