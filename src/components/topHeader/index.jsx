import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#8c8e59] to-[#3d4330] text-white pt-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between md:justify-end items-center gap-3 md:gap-6 text-xs sm:text-sm">
        {/* Phone Number */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.3 2.33.48 3.57.48.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.18 2.45.48 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="font-medium">+1 (844) 831 3287</span>
        </div>

        {/* Email Address - hidden on very small screens */}
        <div className="hidden sm:flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span className="font-medium">inquiry@packarena.com</span>
        </div>

        {/* Get Quote Button */}
        <Link href="/custom-quote" className="ml-auto md:ml-0">
          <button className="bg-white text-[#8B4513] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm">
            Get Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
