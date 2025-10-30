import React from 'react';

const faqs = [
  {
    question: "What's the minimum order quantity for packaging boxes?",
    answer:
      "We have a flexible policy with no minimum order quantity; you can order the quantity you need.",
  },
  {
    question: "What's the typical production time frame?",
    answer:
      "Production spans approximately 8–10 days for standard orders, while exceptions can be made incase of urgent orders.",
  },
  {
    question: "Can I send you my artwork and die–line template?",
    answer:
      "Certainly, you can share the dieline template or artwork with our design support team. They will provide further assistance regarding the format and resolution requirements to ensure your design meets the necessary specifications.",
  },
  {
    question: "Do I Have to pay die–plate charges?",
    answer:
      "No, you won't incur any fees for plates or die charges. Rest assured, there are no hidden costs associated with our services.",
  },
  {
    question: "Which box style carries the highest cost?",
    answer:
      "Ranked from economical to premium: partial/full cover lid boxes, shoulder setup rigid boxes, drawer boxes, and magnetic boxes stand as our offerings in ascending order of expense.",
  },
  {
    question: "Is it possible to lower the cost per unit for my boxes?",
    answer:
      "Certainly, you can reduce the cost per unit by taking these factors into account. Placing bulk orders allows you to benefit from wholesale rates. Additionally, the materials, sizes, choices of add-ons and finishes for your custom boxes also impact your pricing.",
  },
  {
    question: "Do you offer Graphic Support?",
    answer:
      "Certainly, we provide complimentary graphic design and layout support. Whether you need assistance with creating a new design or refining an existing one from another source, our team is here to help.",
  },
  {
    question: "What format should I provide my artwork to you in?",
    answer:
      "Please send us your artwork in a dieline file (PDF or AI format) that can be edited in Adobe Illustrator. Keep the dieline as a separate layer in your AI file, and be sure to follow all of these dieline design tips to ensure your artwork file is production-ready.",
  },
];

const Faq = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore and select the box type that suits your business and product needs the most
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          {faqs.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <img
                src="/images/faq/idea-img.webp"
                alt="faq icon"
                className="w-8 h-8 mt-1 shrink-0"
                onError={(e) => {
                  e.currentTarget.src = '/images/faq/idea-img.webp';
                }}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;


