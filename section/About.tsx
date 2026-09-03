"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const ribbonRef = useRef<SVGPathElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const ribbon = ribbonRef.current;

    if (!section || !ribbon) return;

    const pathLength = ribbon.getTotalLength();

    ribbon.style.strokeDasharray = `${pathLength}`;
    ribbon.style.strokeDashoffset = `${pathLength}`;

    const updateRibbon = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
      Ribbon starts appearing when the About section
      enters around 85% of the viewport.
    */
      const startPoint = viewportHeight * 0.85;

      /*
      Ribbon becomes completely visible when the
      About section reaches around 20% of the viewport.
    */
      const endPoint = viewportHeight * 0.2;

      /*
      Calculate scroll progress.
      0 = completely hidden
      1 = completely visible
    */
      const progress = Math.min(
        1,
        Math.max(0, (startPoint - rect.top) / (startPoint - endPoint)),
      );

      /*
      Draw the ribbon according to scroll position.
    */
      const offset = pathLength * (1 - progress);

      ribbon.style.strokeDashoffset = `${offset}`;

      /*
      Control the rest of the About animations
      using the same scroll progress.
    */
      setIsVisible(progress > 0.03);
    };

    updateRibbon();

    window.addEventListener("scroll", updateRibbon, { passive: true });

    window.addEventListener("resize", updateRibbon);

    return () => {
      window.removeEventListener("scroll", updateRibbon);

      window.removeEventListener("resize", updateRibbon);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className={`pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-lime-400/5 blur-3xl transition-all duration-[1800ms] ${
          isVisible ? "scale-125 opacity-100" : "scale-50 opacity-0"
        }`}
      />

      {/* =====================================================
          TOP LIGHT LINE
      ====================================================== */}

      <div
        className={`pointer-events-none absolute left-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/50 to-transparent transition-all duration-[1800ms] ${
          isVisible ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div
            className={`max-w-xl transform transition-all duration-[1000ms] ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-12 opacity-0 blur-sm"
            }`}
          >
           

            {/* Heading */}
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span
                className={`inline-block transition-all duration-700 delay-100 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                More Than
              </span>

              <br />

              <span
                className={`inline-block text-lime-300 transition-all duration-700 delay-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Just A Gym.
              </span>
            </h2>

            {/* Accent */}
            <div className="mt-6 flex items-center gap-2">
              <div
                className={`h-1 bg-lime-300 transition-all duration-1000 delay-300 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />

              <div
                className={`h-1 bg-lime-300/40 transition-all duration-700 delay-500 ${
                  isVisible ? "w-4" : "w-0"
                }`}
              />

              <div
                className={`h-1 w-1 bg-lime-300/20 transition-all duration-500 delay-700 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
              />
            </div>

            {/* Paragraph 1 */}
            <p
              className={`mt-7 text-base leading-7 text-white/70 transition-all duration-700 delay-300 sm:text-lg sm:leading-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              At{" "}
              <span className="font-semibold text-white">
                SP Fitness Empire
              </span>
              , we believe fitness is not just about lifting heavier or running
              faster.
            </p>

            {/* Paragraph 2 */}
            <p
              className={`mt-4 text-sm leading-6 text-white/50 transition-all duration-700 delay-400 sm:text-base sm:leading-7 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              It is about building discipline, confidence, consistency, and a
              stronger mindset. Our gym is built for people who want to
              challenge themselves and make real progress every day.
            </p>

            {/* Paragraph 3 */}
            <p
              className={`mt-4 text-sm leading-6 text-white/50 transition-all duration-700 delay-500 sm:text-base sm:leading-7 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              Whether you're taking your first step into fitness or pushing
              toward your next personal best, SP Fitness Empire gives you the
              environment, equipment, and support to keep moving forward.
            </p>

            {/* =====================================================
                STATS
            ====================================================== */}

            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-white/10 py-7 sm:grid-cols-4 lg:grid-cols-2">
              {/* Experience */}
              <div
                className={`transition-all duration-700 delay-[600ms] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-2xl font-black text-lime-300">10+</p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  Years Experience
                </p>
              </div>

              {/* Members */}
              <div
                className={`transition-all duration-700 delay-[700ms] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-2xl font-black text-lime-300">5K+</p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  Members
                </p>
              </div>

              {/* Trainers */}
              <div
                className={`transition-all duration-700 delay-[800ms] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-2xl font-black text-lime-300">20+</p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  Expert Trainers
                </p>
              </div>

              {/* Classes */}
              <div
                className={`transition-all duration-700 delay-[900ms] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-2xl font-black text-lime-300">100+</p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  Weekly Classes
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}

          <div
            className={`relative mx-auto w-full max-w-sm transition-all duration-[1200ms] ease-out lg:ml-12 ${
              isVisible
                ? "translate-x-0 translate-y-6 scale-100 opacity-100"
                : "translate-x-16 translate-y-0 scale-95 opacity-0"
            }`}
          >
            {/* =================================================
                READ MORE
            ================================================= */}

            <div
              className={`mb-7 transition-all duration-700 delay-[1000ms] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="group inline-flex h-12 items-center gap-3 bg-lime-300 px-6 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
              >
                Read More
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* =================================================
                IMAGE AREA
            ================================================= */}

            <div className="relative">
              {/* =================================================
                  FLOWING SCROLL-DRIVEN RIBBON
              ================================================= */}

              <div
                className="pointer-events-none absolute inset-0 z-0 overflow-visible"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 500 800"
                  className="absolute left-1/2 top-1/2 h-[120%] w-[190%] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* Soft Glow */}
                  <path
                    d="
                      M -120 270
                      C 30 100, 100 450, 250 315
                      C 380 195, 440 455, 640 270
                    "
                    fill="none"
                    stroke="rgba(190,242,100,0.10)"
                    strokeWidth="30"
                    strokeLinecap="round"
                    className="about-ribbon-glow"
                  />

                  {/* Main Ribbon */}
                  <path
                    ref={ribbonRef}
                    d="
                      M -120 270
                      C 30 100, 100 450, 250 315
                      C 380 195, 440 455, 640 270
                    "
                    fill="none"
                    stroke="rgba(190,242,100,0.85)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    className="about-ribbon"
                  />
                </svg>
              </div>

              {/* =================================================
                  DECORATIVE BORDER
              ================================================= */}

              <div
                className={`absolute -right-3 -top-3 z-20 h-full w-full border border-lime-300/20 transition-all duration-[1400ms] delay-300 sm:-right-4 sm:-top-4 ${
                  isVisible
                    ? "translate-x-0 translate-y-0 opacity-100"
                    : "translate-x-5 -translate-y-5 opacity-0"
                }`}
              />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="group relative z-10 overflow-hidden bg-[#0b0d0e]">
                <img
                  src="/about.png"
                  alt="SP Fitness Empire athlete"
                  className={`block h-auto w-full object-contain transition-transform duration-[1800ms] ease-out ${
                    isVisible ? "scale-100" : "scale-110"
                  } group-hover:scale-[1.03]`}
                />

                {/* Image Shine */}
                <div
                  className={`pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1400ms] delay-500 ${
                    isVisible ? "translate-x-full" : ""
                  }`}
                />
              </div>

              {/* =================================================
                  CORNER ACCENT
              ================================================= */}

              <div
                className={`absolute -bottom-2 -left-2 z-30 h-12 w-12 border-b-2 border-l-2 border-lime-300 transition-all duration-700 delay-500 sm:-bottom-3 sm:-left-3 sm:h-16 sm:w-16 ${
                  isVisible
                    ? "translate-x-0 translate-y-0 opacity-100"
                    : "-translate-x-4 translate-y-4 opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
