import "@/styles/globals.css";
import { Inter } from "next/font/google";
import nl from "date-fns/locale/nl";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { setDefaultOptions } from "date-fns";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

setDefaultOptions({ locale: nl });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <div className={inter.className}>
        <Head>
          <title>Afstudeerproject</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
