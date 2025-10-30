import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Footer from '@/components/common/footer';

function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Techtrek</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to Techtrek's homepage to explore our services."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="bg-[#030305] text-white relative overflow-hidden flex flex-col">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2]"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#667eea] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#764ba2] rounded-full blur-3xl"></div>
        </div>

        {/* Intentionally not rendering the site header/footer to avoid stacking homepage content above the 404 screen */}

        {/* Center Content */}
        <div className="h-[100vh] flex-grow flex items-center justify-center relative z-10 px-6 text-center">
          <div className="w-full">
            {/* 404 Number with Enhanced Design */}
            <div className="relative mb-6">
              <h1 className="text-[60px] md:text-[100px] lg:text-[140px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#667eea] leading-none animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-[#667eea]/30 to-[#764ba2]/30 blur-3xl animate-pulse"></div>
            </div>

            {/* Enhanced Error Message */}
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 inter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Oops! Page Not Found
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 inter leading-relaxed max-w-2xl mx-auto">
                The page you're looking for seems to have wandered off into the digital void.
                Don't worry, we'll help you find your way back to amazing experiences.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/">
                <button className="group relative flex justify-center w-[100%] sm:w-[200px] px-[4px] py-[12px] bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold inter text-lg overflow-hidden transition-all duration-500 transform border border-transparent">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Go Home
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#764ba2] to-[#667eea] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </Link>

              <Link href="/contact-us">
                <button className="group flex justify-center w-[100%] sm:w-[200px] px-[4px] py-[12px] border-2 border-[#667eea] text-[#667eea] font-bold inter text-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2] hover:text-white hover:border-transparent transform relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Contact Us
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </main>
    </>
  );
}

export default Custom404;
