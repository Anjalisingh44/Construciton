import React from "react";
import { useSelector } from "react-redux";
import { selectFeatures } from "../redux/features/featureSlice";


const OutsourceSection = () => {
  const features = useSelector(selectFeatures);

  return (
    <section id='Team' className="bg-white flex justify-center">
      <div className="w-[1232px] h-[600px] px-[72px] pt-[50px] pb-[40px] flex flex-col items-center gap-[30px]">
        
      <div className="w-[644px] flex flex-col items-center gap-4 whitespace-nowrap">
  <h2 className=" text-3xl text-sky-600 leading-[56px] text-center font-semibold">
    Our Team
  </h2>
  <p className="text-lime-600  text-center ">
  Our team brings experience, innovation, and integrity to every project.
  </p>
</div>


        {/* Feature Grid (3 columns on md and above) */}
       <div className="w-[1234px] h-[700px] gap-[30px]">
       <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" w-[395.33px] h-[314px] pt-[52px] pr-6 pb-[52px] pl-6 gap-[24px] flex flex-col items-center text-center font-['Roboto']"
            >
            <img
            src={feature.image}
             alt={feature.title}
             className="w-40 h-40 rounded-full object-cover mx-auto"


             />
              <h3 className="w-[347.33px] h-[32px] text-center font-['Roboto'] font-medium text-[24px] leading-[32px] tracking-[0%]">
                {feature.title}
              </h3>
              <p className="">
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
