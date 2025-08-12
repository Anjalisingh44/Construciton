import React from "react";
import home from '../assets/home.jpeg'

export default function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative bg-gradient-to-br from-white via-sky-50 to-white pt-24 pb-20 overflow-hidden"
    >
      {/* Background Blurred Circles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-700 mb-16 rounded-full" />

      {/* Content Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 lg:px-24 items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-white/80 px-4 py-1 text-xs font-semibold text-cyan-700 shadow-sm backdrop-blur-sm mb-6">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-cyan-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m4 4h2m-6 6v2m-4-4H4" />
            </svg>
            Home & Commercial Construction
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-black leading-tight mb-8">
            Engineering Homes That Stand the Test of Time
          </h1>

          <p className="text-lg text-black mb-10 leading-relaxed">
            From foundations to finishes, Homebizz Engineering delivers quality builds, renovations, and structural solutions—on time and on budget.
          </p>

          <div className="flex flex-col sm:flex-row sm:gap-8 gap-6">
            <a
              href="#quote"
              className="inline-block rounded-md bg-gradient-to-br from-cyan-700 via-cyan-600 to-cyan-500 px-10 py-3 text-white font-semibold shadow-md transition-transform hover:scale-105 hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              Get in Touch
            </a>

            <a
              href="#projects"
              className="inline-block rounded-md border-2 border-cyan-300 px-10 py-3 font-semibold text-cyan-700 hover:bg-cyan-100 transition focus:outline-none focus:ring-4 focus:ring-cyan-200"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side Background */}
        <div className="relative rounded-3xl overflow-hidden border shadow-lg max-h-[420px] flex items-center justify-center p-12 text-white text-center max-w-[700px]">
          <img src={home} alt=""
          className=" object-cover " />
         
            </div>
          </div>
        
      
    </section>
  );
}
