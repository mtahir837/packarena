import React from 'react';

const testimonials = [
  {
    quote:
      "Working with this company has been an absolute pleasure! They've produced all the custom boxes for my chocolate business, and the quality and turnaround time have been consistently impressive. From the very beginning, they've gone above and beyond, helping me with designs, offering fast quotes, and being available literally 24/7 whenever I needed support.",
    author: 'Belen Jerico',
  },
  {
    quote:
      "We were so thrilled with Pack Arena. Printing a brand new box as a new brand is a situation where we needed hands-on helpful customer service to help us navigate, and these folks really delivered. Extremely reasonable pricing, super helpful mock ups from the design team, and quick turnaround time.",
    author: 'Phoebe Lyman',
  },
  {
    quote:
      "Pack Arena has been very helpful for our packaging needs. They recently produced countertop displays for our retail partners and they turned out great. Would definitely recommend!",
    author: 'Meagan Doyle',
  },
];

const StarRow = () => (
  <div className="text-[#f9ca24] text-lg tracking-tight">
    <span>★ ★ ★ ★ ★</span>
  </div>
);

const CustomersSay = () => {
  return (
    <section className="relative py-20 px-4 bg-[#3d4330]">
      {/* subtle overlay pattern using gradient to mimic screenshot mood */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_40%),radial-gradient(circle_at_80%_30%,#ffffff_0,transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-center text-white text-4xl lg:text-4xl font-bold mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-8 relative">
              <StarRow />
              <p className="text-gray-700 leading-relaxed mt-4">
                {t.quote}
              </p>
              <div className="mt-6 font-semibold text-gray-900">{t.author}</div>
              {/* quote marks at bottom-right */}
              <div className="absolute right-6 bottom-6 text-[#7a8b63] select-none" aria-hidden>
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 16c-5 0-9 4-9 9 0 4 3 7 7 7-1 3-3 5-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M38 16c-5 0-9 4-9 9 0 4 3 7 7 7-1 3-3 5-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;


