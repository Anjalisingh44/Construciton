import React from 'react'
import home from '../assets/home.jpeg'
import About from '../component/About';
import Ourservices from '../component/Ourservices';
import Projects from '../component/Projects';
import Contactus from '../component/Contactus';
import OutsourceSection from '../component/OutsourceSection';
import QA from '../component/QA';

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
            <p className="text-lime-600 mt-4 font-semibold">
              Why wait? Get same day funding and a faster way to access cash flow.
            </p>
          </div>

          <div className="">
            <button className="bg-white text-[#0284C7] px-6 py-2 rounded-full font-medium text-[16px]">
              Get started
            </button>

            <div className="flex gap-2 mt-4">
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
    <Projects/>
    <OutsourceSection/>
    <Contactus/>
    <QA/>
   </>
  );
};

export default Home;
