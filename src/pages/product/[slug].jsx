import React from 'react';
import { useRouter } from 'next/router';
import TopHeader from '@/components/topHeader';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import ProductPage from '@/components/product/ProductPage';
import { useProductBySlug } from '@/utils/useProducts';

export default function ProductSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Fetch product data from API using slug
  const { product, loading, error } = useProductBySlug(slug);

  // Transform API product data to match ProductPage component format
  const transformedProduct = product ? {
    title: product.name || 'Product',
    bullets: product.subDescription 
      ? [product.subDescription] 
      : product.description 
        ? [product.description] 
        : ['Premium quality product'],
    images: product.images && product.images.length > 0 
      ? product.images 
      : product.image 
        ? [product.image] 
        : ['/images/banner/banner-img.webp'],
    description: product.description || '',
    subDescription: product.subDescription || '',
    category: product.category,
    slug: product.slug,
    _id: product._id
  } : null;

  // Loading state
  if (loading) {
    return (
      <>
        <TopHeader />
        <Header />
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-600">Loading product...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error || !transformedProduct) {
    return (
      <>
        <TopHeader />
        <Header />
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-red-600">{error || 'Product not found'}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopHeader />
      <Header />
      <ProductPage product={transformedProduct} />
      <Footer />
    </>
  );
}


