import "@/styles/globals.css";
import "@/styles/MarqueeText.css";

import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { Raleway } from "next/font/google";
import { Satisfy } from "next/font/google";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-manrope' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-dmsans' });
const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-grotesk' });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'], variable: '--font-satisfy' });



export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${manrope.variable} ${dmSans.variable} ${grotesk.variable} ${satisfy.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
