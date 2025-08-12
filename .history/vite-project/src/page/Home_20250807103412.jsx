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
     <section
        id="home"
        className="relative pt-[96px] w-full mx-auto flex items-center justify-center"
        style={{
          backgroundImage: `url(${home})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          height: '56.25vw',  // adjust this to your image ratio if needed
          maxHeight: '100vh',
        }}
      >
        {/* Overlay for 50% opacity black */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content - needs relative z-index so it's above overlay */}
        <div className="relative max-w-[1440px] w-full px-4 sm:px-6 md:px-12 lg:px-[109px] text-white">
          <div className="max-w-[599px] flex flex-col gap-6">
            <h1 className="text-[26px] sm:text-[30px] font-bold leading-tight">
              Building Structures That Last.
            </h1>
            <p className="text-[24px] font-semibold mt-4">
              From residential to commercial, we deliver safe, on-time, and cost-effective construction
              without cutting corners.
            </p>
            <button className="bg-white text-[#0284C7] px-8 py-3 sm:px-6 sm:py-2 rounded-full font-medium text-[16px] max-w-max">
              Get started
            </button>
            <div className="hidden sm:flex gap-2 mt-4">
              <span className="w-3 h-3 rounded-full bg-[#0284C7]"></span>
              <span className="w-3 h-3 rounded-full bg-[#4ab0c2]"></span>
              <span className="w-3 h-3 rounded-full bg-[#4e7c85]"></span>
            </div>
          </div>
        </div>
      </section>
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
