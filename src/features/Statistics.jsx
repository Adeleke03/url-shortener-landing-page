import React from 'react';
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailRecognition from "../assets/icon-detailed-records.svg";
import fullyCustomised from "../assets/icon-fully-customizable.svg";

const Statistics = () => {
  const features = [
    {
      icon: brandRecognition,
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.",
    },
    {
      icon: detailRecognition,
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: fullyCustomised,
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  
  return (
    <>
      <section className=" py-20 px-4 md:px-20 lg:px-[130px]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#36343F] mb-4">
          Advanced Statistics
        </h2>
        <p className="text-[#9C9BA2] text-[16px] md:text-[18px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      {/* Features Section */}
      <div className="relative flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-[#2BD1D0] transform -translate-y-1/2 z-0"></div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative bg-white my-10 p-6 rounded-lg shadow-md text-center py-12 md:py-4 md:text-left mb-8 md:mb-0 flex-1 z-10 ${
              index === 1 ? "md:mt-20" : index === 2 ? "md:mt-32" : ""
            }`}
          >
            {/* Icon Positioned Above the Card */}
            <div
              className={`absolute -top-8 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0 bg-[#3A3053] p-4 rounded-full`}
            >
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>

            {/* Feature Title and Description */}
            <h3 className="text-[20px] font-bold text-[#36343F] mt-8 mb-4">
              {feature.title}
            </h3>
            <p className="text-[#9C9BA2] text-[16px] leading-relaxed">
              {feature.description}
            </p>

            {/* Blue Line Logic for Mobile */}
            {index < features.length - 1 && (
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-2 h-[40px] bg-[#2BD1D0] md:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </section>
      
    </>
  )
}

export default Statistics
