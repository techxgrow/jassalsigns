import "@/styles/globals.css";
import "@/styles/MarqueeText.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
