import "@/styles/globals.css";

import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-[100%] min-h-screen h-full `}
      >
        <NavBar />
        <div className="pt-32 lg:pt-10 md:pt-0 w-full">
          <Component {...pageProps} />
        </div>

        <Footer />
      </main>
    </>
  );
}
