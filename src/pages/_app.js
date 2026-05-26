import "@/styles/globals.css";
import "@/styles/MarqueeText.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
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
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Edmonton, AB" },
          { "@type": "AdministrativeArea", "name": "Calgary, AB" },
          { "@type": "AdministrativeArea", "name": "Surrey, BC" },
          { "@type": "AdministrativeArea", "name": "Cloverdale, BC" },
          { "@type": "AdministrativeArea", "name": "Abbotsford, BC" }
        ],
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
      }
    ]
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
      {/* new branch */}
    </main>
  );
}
