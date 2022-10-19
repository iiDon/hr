import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Layout from "../components/Layouts/Layout";
import { ReactElement, useEffect } from "react";
import { hasCookie, getCookie, deleteCookie } from "cookies-next";
import { isAuthenticated } from "../helpers/auth";
import { useRouter } from "next/router";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
