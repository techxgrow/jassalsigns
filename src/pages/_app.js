import "@/styles/globals.css";
import "@/styles/MarqueeText.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
