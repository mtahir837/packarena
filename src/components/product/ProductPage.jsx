import React, { useState } from 'react';

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-t-lg font-semibold border-b-2 ${
      active ? 'text-white bg-[#808654] border-[#808654]' : 'text-[#3d4330] bg-[#e9ebdf] border-transparent hover:bg-[#dfe2d2]'
    }`}
  >
    {children}
  </button>
);

const QuoteForm = () => (
  <div className="bg-white rounded-xl border border-gray-200  p-5">
    <div className="bg-[#808654] text-white rounded-t-md -mx-5 -mt-5 px-5 py-3 rounded-b-none">Needs a Custom Quote?</div>
    <form className="mt-4">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Your Name" className="border border-gray-200 rounded px-3 py-2" />
        <input placeholder="Your Email" className="border border-gray-200 rounded px-3 py-2" />
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input placeholder="Phone Number" className="border border-gray-200 rounded px-3 py-2" />
        <input placeholder="Quantity" className="border border-gray-200 rounded px-3 py-2" />
      </div>
      {/* Row 3: L W D Unit */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        <input placeholder="Length" className="border border-gray-200 rounded px-3 py-2" />
        <input placeholder="Width" className="border border-gray-200 rounded px-3 py-2" />
        <input placeholder="Depth" className="border border-gray-200 rounded px-3 py-2" />
        <select className="border border-gray-200 rounded px-3 py-2">
          <option>Unit</option>
          <option>In</option>
          <option>CM</option>
          <option>MM</option>
        </select>
      </div>
      {/* Message */}
      <div className="mt-4">
        <textarea placeholder="Tell us about your project" className="w-full border border-gray-200 rounded px-3 py-2 min-h-[110px]" />
      </div>
      {/* Upload + Button */}
      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <label className="inline-flex items-center gap-3 cursor-pointer">
          <span className="border border-gray-200 rounded-md px-4 py-2 bg-white">Upload Artwork</span>
          <input type="file" className="hidden" />
          <span className="text-sm text-gray-600">No file chosen</span>
        </label>
        <button type="button" className="bg-[#808654] text-white px-6 py-2 rounded-full">Get a Quote</button>
      </div>
      
    </form>
  </div>
);

const ProductPage = ({ product }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedImg, setSelectedImg] = useState(product.images?.[0]);

  const tabs = [
    { title: 'Description', content: (
      <div className="prose max-w-none text-gray-700">
        <p>
          Experience premium packaging tailored for your brand. We specialize in custom printed boxes with precise sizing,
          eco-friendly materials, and luxurious finishes.
        </p>
      </div>
    ) },
    { title: 'Materials', content: (
      <ul className="list-disc pl-6 text-gray-700">
        <li>Kraft, SBS (C1S/C2S), Corrugated</li>
        <li>Recyclable and FSC options</li>
        <li>Food-grade and cosmetic-safe choices</li>
      </ul>
    ) },
    { title: 'Add Ons', content: (
      <ul className="list-disc pl-6 text-gray-700">
        <li>Foiling (Gold, Silver, Holographic)</li>
        <li>Embossing/Debossing</li>
        <li>Spot UV, Soft Touch, Matte/Gloss Lamination</li>
      </ul>
    ) },
    { title: 'Finishes', content: (
      <ul className="list-disc pl-6 text-gray-700">
        <li>Matte, Gloss, Soft-Touch</li>
        <li>Protective coatings for durability</li>
      </ul>
    ) },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title + Bullets */}
        <h1 className="text-3xl md:text-3xl font-bold text-[#1f2937] mb-4">{product.title}</h1>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
          {product.bullets?.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: gallery */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden    flex items-center justify-center h-[380px] md:h-[500px]">
              <img src={selectedImg} alt="product" className="max-h-full" />
            </div>
            <div className="flex gap-3 mt-4">
              {product.images?.map((img, idx) => (
                <button key={idx} onClick={() => setSelectedImg(img)} className={` rounded overflow-hidden w-40 h-20 flex items-center justify-center ${selectedImg===img? 'ring-2 ring-[#808654]' : ''}`}>
                  <img src={img} alt="thumb" className="max-h-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: quote form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex gap-4">
            {tabs.map((t, i) => (
              <TabButton key={t.title} active={activeIdx===i} onClick={() => setActiveIdx(i)}>
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="border-t border-gray-200 p-6 bg-white">
            {tabs[activeIdx].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;


