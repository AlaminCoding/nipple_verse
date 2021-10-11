import Head from "next/head";
import Banner from "../components/banner";
import Feature from "../components/feature";
import Navbar from "../components/navbar";
import Roadmap from "../components/roadmap";
export default function Home() {
  return (
    <div className="body-wrapper">
      <Head>
        <title>Nipple Verse</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Banner />
      <Feature />
      <Roadmap />
    </div>
  );
}
