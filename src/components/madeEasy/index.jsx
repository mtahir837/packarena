import React from 'react';

const MadeEasy = () => {
  return (
    <div className=" py-6 ">
      <div className=" mx-auto">
        <div className="bg-gradient-to-r from-[#8c8e59] to-[#3d4330]  overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
            {/* Left content */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Custom Boxes Made Easy
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-white/90 mb-6">
                Thousands of companies trust Pack Arena as their go-to manufacturer for
                impressive, affordable, unforgettable custom printed boxes and packaging.
                No matter the sector or size of your organization, we’ll help you create
                the custom box of your dreams.
              </p>

              {/* Trusted logos strip */}
              <div className="mb-8">
                <img
                  src="/images/madeEasy/right-logos.svg"
                  alt="Trusted by brands"
                  className="w-full h-auto"
                />
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18448313287"
                  className="bg-white text-[#3d4330] px-6 py-3 rounded-md font-semibold text-center shadow-sm hover:bg-gray-100 transition-colors"
                >
                  Call Us +1 (844) 831 3287
                </a>
                <a
                  href="#quote"
                  className="bg-[#2b3023] text-white px-6 py-3 rounded-md font-semibold text-center shadow-sm hover:bg-[#24281d] transition-colors border border-white/10"
                >
                  Beat my Quote
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
              <img
                src="/images/madeEasy/left-img.webp"
                alt="Custom boxes preview"
                className="w-full max-w-[560px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeEasy;


