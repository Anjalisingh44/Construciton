import React from "react";
import { useSelector } from "react-redux";
import { selectFeatures } from "../redux/features/featureSlice";

const OutsourceSection = () => {
  const features = useSelector(selectFeatures);

  return (
    <section id="Team" className="bg-gray-50 px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-[1232px] w-full mx-auto flex flex-col items-center gap-8">
        {/* Title and subtitle */}
        <div className="max-w-xl flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-cyan-600">Our Team</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Our team brings experience, innovation, and integrity to every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-3 shadow-md"
              />
<h2 className="mt-4 text-xl font-bold text-gray-800">
  {feature.name}
</h2>
              <h2 className="text-cyan-600 font-medium">
                {feature.title}
              </h2>
              <p className="mt-1 text-green-600 italic">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutsourceSection;
