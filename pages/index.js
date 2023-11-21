import Head from "next/head";
import { Inter } from "@next/font/google";
import HeroSection from "./HeroSection";

const inter = Inter({ subsets: ["latin"] });

const ContactForm = () => {
  console.log("Change the contact form");
  return (
    <div className="relative cursor-pointer m-auto w-fit text-center font-akatab text-3xl p-4 text-slate-400 hover:scale-110 hover:text-slate-200 transition-transform">
      Contact me
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Barun Das | Homepage</title>
        <meta name="description" content="Barun Das' personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="max-h-full mt-28 px-20">
        <main>
          <HeroSection />
        </main>
      </div>
    </>
  );
}
