import React from 'react';
import Link from 'next/link';

const GetCustomBoxes = () => {
  const boxTypes = [
    { name: "Mailer Boxes", image: "/images/customProducts/mailer-Boxes.webp" },
    { name: "Candle Boxes", image: "/images/customProducts/Candle-Boxes.webp" },
    { name: "Display Boxes", image: "/images/customProducts/Display-Boxes.webp" },
    { name: "Pillow Boxes", image: "/images/customProducts/pillow-Boxes.webp" },
    { name: "Soap Boxes", image: "/images/customProducts/Soap-Boxes.webp" },
    { name: "Cardboard Boxes", image: "/images/customProducts/Cardboard-Boxes.webp" },
    { name: "Sleeve Boxes", image: "/images/customProducts/Sleeves-Boxes.webp" },
    { name: "Lipstick Boxes", image: "/images/customProducts/Lipstick-Boxes.webp" }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get Custom Boxes for your Products
          </h2>
        </div>

        {/* Box Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boxTypes.map((box, index) => (
            <div key={index} className="bg-[#fafafa] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Box Image */}
              <div className="mb-4">
                <img 
                  src={box.image} 
                  alt={box.name}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-48 bg-gray-200 rounded-lg items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-[#8B4513] rounded-sm mb-2 mx-auto"></div>
                    <span className="text-[#8B4513] text-sm font-bold">Packarena</span>
                  </div>
                </div>
              </div>

              {/* Box Name */}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {box.name}
              </h3>

              {/* Learn More Link */}
              <Link href={`/boxes/${box.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="text-[#6f744f] font-medium hover:underline cursor-pointer">
                  Learn more &gt;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetCustomBoxes;
