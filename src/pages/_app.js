import "@/styles/globals.css";
import "@/styles/MarqueeText.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
