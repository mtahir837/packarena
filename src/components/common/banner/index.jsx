import React from 'react';


const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-[#8c8e59] to-[#3d4330] flex justify-center items-center'>
    <div className="  text-white py-2 px-4 min-h-[600px] flex justify-between items-center  w-[1200px]">
      <div className='max-w-7xl mx-auto w-[500px]'>
        <h1 className='text-5xl font-medium mb-6'>Get Custom Retail <br /> Boxes
        </h1>
        <p className='text-lg font-light '>Enhance your retail brand with our wholesale custom retail packaging boxes featuring your logo. Crafted for excellence, these boxes not only protect your products but also showcase your brand identity flawlessly. Order now for a seamless shopping experience and elevate your brand presence on the shelves. 


</p>
<button className='mt-10 bg-white text-[#8B4513] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm'>get started</button>
      </div>
      <div>
        <img src="/images/banner/banner-img.webp" alt="banner" width={500} height={500} className='w-[500px]  object-cover h-[500px] rounded-lg' />
      </div>
    </div>
    </div>
  );
};

export default Banner;