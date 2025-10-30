import React from 'react';
import Head from 'next/head';
import TopHeader from '@/components/topHeader';
import Header from '@/components/common/header';
import ContactBanner from '@/components/contactus/contactbanner';
import ContactContent from '@/components/contactus/contactcontent';
import Footer from '@/components/common/footer';
import ContactMap from '@/components/contactus/map';

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | PackArena</title>
        <meta name="description" content="Get in touch with PackArena for quotes and support." />
      </Head>
      <TopHeader />
      <Header />
      <ContactBanner />
      <ContactContent />
      <ContactMap />
      <Footer />
    </>
  );
};

export default ContactUsPage;


