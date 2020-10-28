import "../../public/style.css";

import { merge } from "lodash";
import { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider, theme } from "@chakra-ui/core";

const customTheme = merge(theme, {
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
} as typeof theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aprendiendo Web Development INFO104</title>
      </Head>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
