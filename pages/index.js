import Head from "next/head";
import Main from "../components/Main";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: airlink"
        description="Welcome to airlink homepage."
        canonical="https://nine4-2.vercel.app/"
        openGraph={{
          url: "https://nine4-2.vercel.app/",
        }}
      />
      <Head>
        <title>Airlink</title>
        <link rel="icon" href="/favicon.ico" />
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
         {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"> */}
      </Head>
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
