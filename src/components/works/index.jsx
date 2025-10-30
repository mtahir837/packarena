import React from 'react';

const Works = () => {
  const steps = [
    {
      number: "1",
      image: "/images/works/Explore.svg",
      title: "Explore",
      description:
        "Explore the options we have for you and select a box style that suits your needs.",
    },
    {
      number: "2",
      image: "/images/works/Artwork.svg",
      title: "Artwork",
      description:
        "Send us the artwork file you want to be imprinted on your custom printed boxes.",
    },
    {
      number: "3",
      image: "/images/works/Request-a-Quote.svg",
      title: "Request a Quote",
      description:
        "We will review the file and requirements, and provide you with a quote.",
    },
    {
      number: "4",
      image: "/images/works/Place-Your-Order.svg",
      title: "Place Your Order",
      description:
        "After receiving a custom quote, place your order to start the manufacturing.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide mb-3">
            HOW IT WORKS?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            Our professional design support is available to help you design your custom boxes and create them within the desired time.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Icon with overlapping number badge */}
              <div className="relative inline-block mb-4">
                <img src={step.image} alt={step.title} className="w-16 h-16 md:w-20 md:h-20" />
                <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-[#8c8e59] rounded-full flex items-center justify-center">
                  <span className="text-white text-base md:text-xl font-bold">{step.number}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
