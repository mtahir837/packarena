import React from 'react';
import Head from 'next/head';
import TopHeader from '@/components/topHeader';
import AboutBanner from '@/components/aboutus/aboutbanner';
import Footer from '@/components/common/footer';
import AboutContent from '@/components/aboutus/aboutcontent';
import Header from '@/components/common/header';

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About Us | PackArena</title>
        <meta name="description" content="Learn about PackArena and our commitment to dependable, efficient packaging solutions." />
      </Head>
      <TopHeader />
      <Header />
      <AboutBanner />
      <AboutContent />
      <Footer />
    </>
  );
};

export default AboutUsPage;


