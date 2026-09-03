"use client";

import { motion } from "motion/react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#0b0d0e] py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-lime-300/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden border border-white/[0.08] bg-[#101314]"
        >
          <div className="grid min-h-[430px] lg:grid-cols-2">

            {/* ================= IMAGE ================= */}
            <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
              <img
                src="/CTA.png"
                alt="SP Fitness"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#101314]/90 lg:from-transparent lg:via-black/10 lg:to-[#101314]" />

             
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

              {/* Accent line */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-lime-300" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
                  Start Your Journey
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready To
                <br />
                <span className="text-lime-300">Level Up?</span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-md text-sm leading-7 text-white/50 sm:text-base">
                Stop waiting for the perfect time. Start training, stay
                consistent, and become stronger every day at SP Fitness.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-lime-300 px-7 text-xs font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
                >
                  Join Now

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

         
              </div>

              {/* Bottom stats */}
              <div className="mt-10 flex items-center gap-6 border-t border-white/[0.08] pt-6 sm:gap-10">

                <div>
                  <p className="text-xl font-black text-white">
                    01
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Community
                  </p>
                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>
                  <p className="text-xl font-black text-white">
                    100%
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Commitment
                  </p>
                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>
                  <p className="text-xl font-black text-lime-300">
                    ∞
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Progress
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Lime bottom accent */}
          <div className="absolute bottom-0 left-0 h-[3px] w-1/3 bg-lime-300" />
        </motion.div>
      </div>
    </section>
  );
}