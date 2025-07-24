import React from "react";
import { useSelector } from "react-redux";
import { selectFeatures } from "../redux/features/featureSlice";


const OutsourceSection = () => {
  const features = useSelector(selectFeatures);

  return (
    <section id='Team' className="bg-white flex justify-center">
      <div className="w-[1232px] h-[842px] px-[72px] pt-[120px] pb-[60px] flex flex-col items-center gap-[30px]">
        
      <div className="w-[644px] flex flex-col items-center gap-4 whitespace-nowrap">
  <h2 className="text-[#121D2D] text-[48px] leading-[56px] font-semibold text-center font-['Roboto']">
    Outsource payment collection
  </h2>
  <p className="text-[#616161] text-[16px] leading-[24px] font-normal text-center font-['Roboto']">
    Faster and flexible access to cash flow from one or all your invoices.
  </p>
</div>


        {/* Feature Grid (3 columns on md and above) */}
       <div className="w-[1234px] h-[700px] gap-[30px]">
       <div className="grid grid-cols-1 md:grid-cols-3 mt-[40px] w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" w-[395.33px] h-[314px] pt-[52px] pr-6 pb-[52px] pl-6 gap-[24px] flex flex-col items-center text-center font-['Roboto']"
            >
            <img
            src={feature.image}
             alt={feature.title}
             className="w-[54px] h-[54px] object-contain"
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
