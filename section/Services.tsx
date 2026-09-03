"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Strength Training",
    description:
      "Build real strength with structured workouts designed around progressive overload and proper technique.",
  },
  {
    number: "02",
    title: "Personal Training",
    description:
      "Get focused one-on-one coaching, personalized workouts, and guidance built around your goals.",
  },
  {
    number: "03",
    title: "Functional Fitness",
    description:
      "Improve mobility, endurance, balance, and everyday performance through functional movement.",
  },
  {
    number: "04",
    title: "Weight Management",
    description:
      "Train smarter with a balanced approach combining exercise, consistency, and sustainable results.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-lime-300/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
                What We Offer
              </span>
            </div>

            <h2 className="max-w-lg text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built
              <br />
              <span className="text-lime-300">For Your</span>
              <br />
              Goals.
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              Whether you want to build strength, improve your fitness, or
              completely transform your body, our training programs are built
              to move you forward.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-lime-300" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                Train With Purpose
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-3">
            {services.map((service, index) => {
              const isActive = active === index;

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActive(index)}
                  className={`group relative overflow-hidden border transition-all duration-500 ${
                    isActive
                      ? "border-lime-300/40 bg-[#151918]"
                      : "border-white/[0.08] bg-[#101314]"
                  }`}
                >
                  {/* Active lime line */}
                  <div
                    className={`absolute left-0 top-0 h-full w-[3px] bg-lime-300 transition-transform duration-500 ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <div className="flex items-center gap-5 px-5 py-6 sm:px-7 sm:py-7">
                    {/* Number */}
                    <span
                      className={`w-10 shrink-0 text-sm font-bold transition-colors duration-300 ${
                        isActive ? "text-lime-300" : "text-white/25"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Main content */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-xl font-bold uppercase tracking-tight transition-colors duration-300 sm:text-2xl ${
                          isActive ? "text-white" : "text-white/75"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <div
                        className={`grid transition-all duration-500 ${
                          isActive
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xl text-sm leading-6 text-white/50">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? "rotate-[-45deg] border-lime-300 bg-lime-300 text-black"
                          : "border-white/10 text-white/30"
                      }`}
                    >
                      ↗
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
}