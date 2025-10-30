import React from 'react';

const CustomQuote = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Custom Quotation for your Packaging Now!!
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Let's create a fully personalized price quote for your custom boxes and talk to one of our packaging specialists while making the packaging an effective face of the brand.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <form>
            {/* Row 1: Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#808654]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#808654]"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#808654]"
              />
            </div>

            {/* Row 2: Length, Width, Depth, Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <input
                type="text"
                placeholder="Length"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#808654]"
              />
              <input
                type="text"
                placeholder="Width"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#808654]"
              />
              <input
                type="text"
                placeholder="Depth"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#808654]"
              />
              <input
                type="text"
                placeholder="Quantity"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#808654]"
              />
            </div>

            {/* Text Area */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm">
                Let us know what you need! Box dimensions, number of boxes you need, design - we can help.
              </label>
              <textarea
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 min-h-[120px] focus:outline-none focus:border-[#808654]"
              />
            </div>

            {/* CAPTCHA and Submit */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4">
            
              <button
                type="submit"
                className="bg-[#808654] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomQuote;

