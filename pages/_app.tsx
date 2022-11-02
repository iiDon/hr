import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Layout from "../components/Layouts/Layout";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import useAuth from "../sotre/useAuth";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const { isLoggedIn, checkAuth } = useAuth((state) => state);

  useEffect(() => {
    checkAuth();

    if (!isLoggedIn && router.pathname === "/dashboard/*") {
      router.push("/auth/login");
    }
  }, [isLoggedIn]);

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
