import React from "react";
import home from '../assets/home.jpeg'

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-white pt-24">
      {/* Subtle brand background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 ">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Slim accent bar with brand gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-12 pt-8 md:grid-cols-2 md:pb-16 lg:gap-16 lg:pb-24">
        {/* Left: brand, headline, copy, CTAs, trust */}
        <div className="max-w-xl">
          {/* Brand row inside hero */}
         
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-xs font-medium text-teal-700 shadow-sm backdrop-blur">
            {/* Replace icon with inline SVG or font icon if not using lucide-react */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-emerald-600"
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

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-2xl">
            Engineering homes that stand the test of time
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            From foundations to finishes, Homebizz Engineering delivers quality builds, renovations, and structural solutions—on time and on budget.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="inline-flex h-11 items-center justify-center rounded bg-gradient-to-r from-teal-600 to-emerald-600 px-6 text-white hover:from-teal-700 hover:to-emerald-700"
            >
              Get a Free Quote
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded border border-teal-200 bg-transparent px-6 text-teal-800 hover:bg-teal-50"
            >
              View Projects
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2">
              {/* Shield icon svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-600"
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
                <p className="text-sm font-medium text-gray-900">Licensed & Insured</p>
                <p className="text-xs text-gray-500">Safety-first builds</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2">
              {/* Clock icon svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-600"
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
                <p className="text-sm font-medium text-gray-900">On-Time Delivery</p>
                <p className="text-xs text-gray-500">Clear milestones</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2">
              {/* Star icon svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-600"
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
                <p className="text-sm font-medium text-gray-900">4.9/5 Rating</p>
                <p className="text-xs text-gray-500">Happy clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: hero visual */}
        <div className="relative">
          <div className="sm:relative overflow-hidden rounded-2xl border bg-white shadow-lg max-h-[400px]">
            <img
              src={home}
              alt="Construction site with cranes and workers"
              width={680}
              height={520}
              className="h-auto w-full object-cover"
            />
            {/* Overlay corner stat */}
            <div className="absolute right-4 top-4 rounded-lg border bg-white/90 px-4 py-3 shadow backdrop-blur">
              <p className="text-xs text-gray-500">Completed Projects</p>
              <p className="text-lg font-semibold text-gray-900">250+</p>
            </div>
            {/* Bottom ribbon */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-sm font-medium text-white">
                Residential • Commercial • Renovations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
