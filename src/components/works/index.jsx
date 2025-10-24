import React from 'react';

const Works = () => {
  const steps = [
    {
      number: "1",
      icon: "📦",
      title: "Explore",
      description: "Explore the options we have for you and select a box style that suits your needs."
    },
    {
      number: "2", 
      icon: "🎨",
      title: "Artwork",
      description: "Send us the artwork file you want to be imprinted on your custom printed boxes."
    },
    {
      number: "3",
      icon: "💻", 
      title: "Request a Quote",
      description: "We will review the file and requirements, and provide you with a quote."
    },
    {
      number: "4",
      icon: "📋",
      title: "Place Your Order", 
      description: "After receiving a custom quote, place your order to start the manufacturing."
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            HOW IT WORKS?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our professional design support is available to help you design your custom boxes and create them within the desired time.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number Circle */}
              <div className="w-16 h-16 bg-[#8c8e59] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
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
