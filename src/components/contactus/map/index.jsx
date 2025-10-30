import React from 'react';

const ContactMap = () => {
  return (
    <section className="bg-gray-100 pb-12 md:pb-16 pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100">
          <div className="relative w-full h-[380px] md:h-[520px]">
            <iframe
              title="PackArena Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.739876862092!2d-76.84890842359568!3d39.07493197168666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e7a9a0a1b9a7%3A0x0000000000000000!2s9404%20Laurel%20Bowie%20Rd%2C%20Laurel%2C%20MD%2020723!5e0!3m2!1sen!2sus!4v1730220000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;


