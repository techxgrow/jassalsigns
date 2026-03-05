import Link from "next/link";

const LocationLinks = () => (
  <div className="flex flex-col gap-6 items-center justify-center h-screen w-screen text-lg font-semibold text-white ">
    <Link href="/citypage/Calgary">Calgary</Link>
    <Link href="/citypage/CLOVERDALE">CLOVERDALE</Link>
    <Link href="/citypage/ABBOTSFORD">ABBOTSFORD</Link>
    <Link href="/citypage/Calgary">Calgary</Link>
    <Link href="/citypage/CALGARY">CALGARY</Link>
  </div>
);

export default LocationLinks;
