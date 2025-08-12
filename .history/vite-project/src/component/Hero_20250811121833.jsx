import React from "react";

export default function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative bg-white pt-20 pb-16 overflow-hidden"
    >
      {/* Background Blurred Circles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 mb-12" />

      {/* Content Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm backdrop-blur-sm mb-4">
            {/* Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-emerald-600"
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

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
            Engineering Homes That Stand the Test of Time
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            From foundations to finishes, Homebizz Engineering delivers quality builds, renovations, and structural solutions—on time and on budget.
          </p>

          <div className="flex flex-col sm:flex-row sm:gap-6 gap-4">
            <a
              href="#quote"
              className="inline-block rounded-md bg-gradient-to-r from-teal-600 to-emerald-600 px-8 py-3 text-white font-semibold shadow-lg transition hover:from-teal-700 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Get a Free Quote
            </a>

            <a
              href="#projects"
              className="inline-block rounded-md border border-teal-300 px-8 py-3 font-semibold text-teal-700 hover:bg-teal-50 transition focus:outline-none focus:ring-4 focus:ring-teal-200"
            >
              View Projects
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-3 bg-white border rounded-lg p-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Licensed & Insured</p>
                <p className="text-sm text-gray-500">Safety-first builds</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-3 bg-white border rounded-lg p-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">On-Time Delivery</p>
                <p className="text-sm text-gray-500">Clear milestones</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-3 bg-white border rounded-lg p-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.44a1 1 0 00-1.176 0l-3.37 2.44c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118l-3.37-2.44c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.957z"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                <p className="text-sm text-gray-500">Happy clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Background */}
        <div className="relative rounded-3xl overflow-hidden border bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 shadow-xl max-h-[420px] flex items-center justify-center p-10 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 tracking-wide">
              Building Dreams Into Reality
            </h2>
            <p className="text-lg max-w-md mx-auto mb-6">
              Trusted experts delivering quality construction services with unmatched precision and care.
            </p>
            <div className="inline-flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold">250+</span>
                <span className="text-sm uppercase tracking-widest">Projects</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/50 pl-6">
                <span className="text-4xl font-extrabold">15+</span>
                <span className="text-sm uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/50 pl-6">
                <span className="text-4xl font-extrabold">99%</span>
                <span className="text-sm uppercase tracking-widest">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
