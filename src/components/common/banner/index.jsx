import React from 'react';


const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-[#8c8e59] to-[#3d4330] flex justify-center items-center'>
      <div className="w-full max-w-7xl mx-auto text-[#eadfc8] py-8 md:py-12 px-4 min-h-[520px] flex flex-col md:flex-row md:justify-between md:items-center gap-10">
        <div className='w-full md:w-[520px]'>
          <h1 className='text-xl sm:text-2xl lg:text-5xl font-semibold leading-tight mb-6'>
            Get Custom Retail <br /> Boxes
          </h1>
          <p className='text-base sm:text-lg leading-relaxed text-[#eadfc8]/85'>
            Enhance your retail brand with our wholesale custom retail packaging boxes featuring your logo. Crafted for excellence, these boxes not only protect your products but also showcase your brand identity flawlessly. Order now for a seamless shopping experience and elevate your brand presence on the shelves.
          </p>
          <button className='mt-8 inline-flex items-center gap-2 border border-[#eadfc8] text-[#eadfc8] px-5 py-2.5 rounded-md font-semibold hover:bg-white/10 transition-colors duration-200 text-sm uppercase tracking-wide'>
            Get Started
          </button>
        </div>
        <div className='w-full md:w-auto flex justify-center'>
          <img src="/images/banner/banner-img.webp" alt="Custom retail boxes" width={560} height={520} className='w-full max-w-[520px] object-cover h-[340px] sm:h-[380px] md:h-[500px] ' />
        </div>
      </div>
    </div>
  );
};

export default Banner;