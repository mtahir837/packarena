
import Banner from "@/components/common/banner";
import Header from "@/components/common/header";
import CustomBoxes from "@/components/customBoxes";
import CustomersSay from "@/components/customersay";
import DiscoverMorw from "@/components/discovermorw";
import Faq from "@/components/faq";
import Footer from "@/components/common/footer";
import GetCustomBoxes from "@/components/getCustomBoxes";
import MadeEasy from "@/components/madeEasy";
import TopHeader from "@/components/topHeader";
import Works from "@/components/works";
import { useCategories } from "@/utils/useCategories";

import Head from "next/head";

export default function Home() {
  // Fetch categories and log to console

  return (
    <>
      <Head>
        <title>TechTrek | Explore the Future of Technology</title>
        <meta name="description" content="TechTrek brings you the latest in tech trends, gadgets, AI, and innovations shaping tomorrow's world." />
        <meta name="keywords" content="TechTrek, Technology, Gadgets, AI, Innovations, Future Tech, Tech News" />
        <meta name="author" content="TechTrek Team" />
      </Head>
      <main>
      <TopHeader />
      <Header />
      <Banner />
      <CustomBoxes />
      <Works />
      <GetCustomBoxes />
      <MadeEasy />
      <Faq />
      <CustomersSay />
      <DiscoverMorw />
      <Footer />
        
        
      </main>
    </>
  );
}
