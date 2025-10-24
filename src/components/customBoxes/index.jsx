import React from 'react';

const CustomBoxes = () => {
  const boxTypes = [
    { name: "Mailer Boxes", image: "/images/customBoxes/mailer-Boxes.webp" },
    { name: "Rigid Boxes", image: "/images/customBoxes/rigid-Boxes.webp" },
    { name: "Candle Boxes", image: "/images/customBoxes/candle-Boxes.webp" },
    { name: "Soap Boxes", image: "/images/customBoxes/soap-Boxes.webp" }
  ];

  return (
    <div className="bg-[#fbf9f6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Custom Box Style
          </h2>
          <p className="text-lg text-gray-700">
            Explore and select the box type that suits your business and product needs the most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boxTypes.map((box, index) => (
            <div key={index} className=" rounded-lg  overflow-hidden">
              <img src={box.image} alt={box.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{box.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomBoxes;
