import React from 'react';

const AboutBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#8c8e59] to-[#3d4330] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">About Us</h1>
          <p className="text-base md:text-lg leading-relaxed text-white mb-6">
            Welcome to PackArena, where dependability meets efficiency and parcels make their way home. PackArena was founded with the goal of reinventing the packaging experience, and it has since become a trusted name in the industry.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white mb-8">
            We understand that every item you send has sentimental or commercial worth, and we handle each delivery with the utmost care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center border border-[#eadfc8] text-[#8c8e59] bg-white px-5 py-2.5 rounded-md font-semibold hover:bg-white/10 transition-colors text-sm">
              Get Free Quote
            </a>
            <a href="tel:+18448313287" className="inline-flex items-center justify-center text-white px-5 py-2.5 rounded-md font-semibold  transition-colors text-sm">
              Call Us: 1-(844) 831 3287
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="/images/banner/banner-img.webp"
            alt="PackArena products"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;


