import React from 'react';
import { useRouter } from 'next/router';
import TopHeader from '@/components/topHeader';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import ProductPage from '@/components/product/ProductPage';

const mockProducts = {
  'cbd-dropper-boxes': {
    title: 'CBD Dropper Boxes',
    bullets: [
      'Unmatched CBD dropper boxes with superior quality.',
      'Wholesale options combine cost-effectiveness & elegance.',
      'Custom designs elevate and impress customers.',
      'Start the packaging journey with tailored solutions.'
    ],
    images: [
      '/images/banner/banner-img.webp',
      '/images/customBoxes/mailer-Boxes.webp',
      '/images/customBoxes/Candle-Boxes.webp',
      '/images/customBoxes/Soap-Boxes.webp'
    ],
  },
};

export default function ProductSlugPage() {
  const { query } = useRouter();
  const slug = String(query.slug || 'cbd-dropper-boxes');
  const product = mockProducts[slug] || mockProducts['cbd-dropper-boxes'];

  return (
    <>
      <TopHeader />
      <Header />
      <ProductPage product={product} />
      <Footer />
    </>
  );
}


