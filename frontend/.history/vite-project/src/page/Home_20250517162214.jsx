import React from 'react'
import home from '../assets/home.jpg'
import About from '../component/About';
import Ourservices from '../component/Ourservices';
import Projects from '../component/Projects';
import Contactus from '../component/Contactus';
import OutsourceSection from '../component/OutsourceSection';

const Home = () => {
  return (
   <>
    <section id="home" className="pt-[96px]"
    style={{backgroundImage:`url(${home})`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[109px] h-[521px]">
        
        {/* Left side: Text */}
        <div className="w-[599px] flex flex-col gap-6">
          <div>
            <h1 className="text-sky-600 text-[48px] font-extrabold leading-tight">
              Get instant cash <br />
              flow with invoice <br />
              factoring
            </h1>
            <p className="text-lime-600 text-base mt-4">
              Why wait? Get same day funding and a faster way to access cash flow.
            </p>
          </div>

          <div className="">
            <button className="bg-white text-[#0284C7] px-6 py-2 rounded-full font-medium text-[16px]">
              Get started
            </button>

            <div className="flex gap-2 mt-4">
              <span className="w-3 h-3 rounded-full bg-[#D946EF]"></span>
              <span className="w-3 h-3 rounded-full bg-[#A855F7]"></span>
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            </div>
          </div>
        </div>

        {/* Right side: Image (optional) */}
      

      </div>
    </section>
    <About/>
    <Ourservices/>
    <Projects/>
    <OutsourceSection/>
    <Contactus/>
   </>
  );
};

export default Home;
