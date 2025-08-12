import React from 'react'
import home from '../assets/home.jpeg'
import About from '../component/About';
import Ourservices from '../component/Ourservices';
import Projects from '../component/Projects';
import Contactus from '../component/Contactus';
import OutsourceSection from '../component/OutsourceSection';
import QA from '../component/QA';
import Workingmethod from '../component/Workingmethod';

const Home = () => {
  return (
   < div className='overflow-x-hidden'>
    <section id="home" className="pt-[96px]"
    style={{backgroundImage:`url(${home})`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[109px] h-auto lg:h-[521px]">
        
        {/* Left side: Text */}
        <div className="w-full max-w-[599px] px-4 sm:px-6 md:px-8 flex flex-col gap-6">
          <div>
            <h1 className="text-white text-[26px] sm:text-[30px] font-bold leading-tight">
              Building Structures That Last.
 <br />
            
            </h1>
            <p className="text-white text-[24px] mt-4 font-semibold">
              From residential to commercial, we deliver safe, on-time, and cost-effective construction  
            without cutting corners.
            </p>
          </div>

          <div className="">
            <button className="bg-white text-[#0284C7] px-6 py-2 rounded-full font-medium text-[16px]">
              Get started
            </button>

            <div className="">
              <span className="w-3 h-3 rounded-full bg-[#0284C7]"></span>
              <span className="w-3 h-3 rounded-full bg-[#4ab0c2]"></span>
              <span className="w-3 h-3 rounded-full bg-[#4e7c85] "></span>
            </div>
          </div>
        </div>

        {/* Right side: Image (optional) */}
      

      </div>
    </section>
    <About/>
    <Ourservices/>
    <Workingmethod/>
    <Projects/>
    <OutsourceSection/>
    <Contactus/>
    <QA/>
   </div>
  );
};

export default Home;
