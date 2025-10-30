import React from 'react';
import Head from 'next/head';
import TopHeader from '@/components/topHeader';
import Header from '@/components/common/header';
import CustomQuote from '@/components/customQuote';
import Footer from '@/components/common/footer';

const CustomQuotePage = () => {
  return (
    <>
      <Head>
        <title>Get Custom Quote | PackArena</title>
        <meta name="description" content="Request a custom quotation for your packaging needs." />
      </Head>
      <TopHeader />
      <Header />
      <CustomQuote />
      <Footer />
    </>
  );
};

export default CustomQuotePage;

