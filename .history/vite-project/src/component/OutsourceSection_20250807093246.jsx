import React from "react";
import { useSelector } from "react-redux";
import { selectFeatures } from "../redux/features/featureSlice";

const OutsourceSection = () => {
  const features = useSelector(selectFeatures);

  return (
    <section
      id="Team"
      className="bg-white flex justify-center px-4 sm:px-6 lg:px-12 py-12"
    >
      <div className="max-w-[1232px] w-full flex flex-col items-center gap-8">
        {/* Title and subtitle */}
        <div className="max-w-xl flex flex-col items-center gap-4 whitespace-nowrap">
          <h2 className="text-2xl sm:text-2xl text-sky-600 font-semibold leading-tight text-center">
            Our Team
          </h2>
          <p className="text-lime-600 text-center text-base sm:text-lg">
            Our team brings experience, innovation, and integrity to every project.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-6 py-8"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto"
                />
                <h3 className="mt-4 text-lg sm:text-xl font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourceSection;
