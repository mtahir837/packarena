import React from 'react';

const Label = ({ children }) => (
  <label className="sr-only">{children}</label>
);

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8c8e59] ${props.className || ''}`}
  />
);

const Select = ({ children, ...props }) => (
  <select
    {...props}
    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8c8e59]"
  >
    {children}
  </select>
);

const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8c8e59] min-h-[120px]"
  />
);

const ContactContent = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left copy */}
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
            Request a Free Quote & Consultation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pack Arena stands for quality, transparency and excellence for every customer. Fill out our quote request form and we’ll reply to your message within 12 hours or less!
          </p>
        </div>

        {/* Right form card */}
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 md:p-8 border border-gray-100">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input placeholder="First Name" />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input placeholder="Last Name" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input placeholder="Phone" />
              </div>
              <div>
                <Label>Quantity Range</Label>
                <Select defaultValue="">
                  <option value="" disabled>Quantity Range</option>
                  <option>100 - 250</option>
                  <option>250 - 500</option>
                  <option>500 - 1000</option>
                  <option>1000+</option>
                </Select>
              </div>
              <div>
                <Label>Select Box Type</Label>
                <Select defaultValue="">
                  <option value="" disabled>Select Box Type</option>
                  <option>Mailer Boxes</option>
                  <option>Rigid Boxes</option>
                  <option>Display Boxes</option>
                  <option>Soap Boxes</option>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label>Project Details</Label>
                <Textarea placeholder="Tell us about your project! Box dimensions, industry, design, etc. – we can help." />
              </div>
            </div>

           

            <button type="submit" className="mt-5 w-full rounded-full bg-[#808654] text-white font-semibold py-3 hover:opacity-95">
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;


