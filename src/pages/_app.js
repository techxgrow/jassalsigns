import "@/styles/globals.css";
import "@/styles/MarqueeText.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isCityPage = router.pathname === "/citypage/[slug]";

  const organizationSchema = {
    "@type": "Organization",
    "name": "Jassal Signs",
    "url": "https://www.jassalsignsedm.com",
    "logo": "https://www.jassalsignsedm.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-780-437-7790",
      "contactType": "customer service",
      "email": "jrbsigns@gmail.com",
      "areaServed": "CA",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/jassalsignsltd/",
      "https://www.instagram.com/jassal_signs/",
      "https://www.linkedin.com/company/jassalsigns/"
    ]
  };

  const mainLocalBusinessSchema = {
    "@type": "LocalBusiness",
    "name": "Jassal Signs",
    "image": "https://www.jassalsignsedm.com/logo.png",
    "url": "https://www.jassalsignsedm.com",
    "telephone": "+1-780-437-7790",
    "email": "jrbsigns@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3273 Parsons Rd NW",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "postalCode": "T6N 1B4",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.46549,
      "longitude": -113.488154
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  const graphItems = [organizationSchema];
  if (!isCityPage) {
    graphItems.push(mainLocalBusinessSchema);
  }

  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": graphItems
  };

  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
