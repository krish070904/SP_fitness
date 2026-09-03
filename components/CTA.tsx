"use client";

import { motion } from "motion/react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden bg-[#0b0d0e] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-lime-300/[0.05] blur-[120px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ================= CTA CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden border border-white/[0.08] bg-[#101314]"
        >
          <div className="grid w-full grid-cols-1 lg:grid-cols-2">

            {/* ================================================= */}
            {/* IMAGE */}
            {/* ================================================= */}

            <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[380px] lg:h-[520px]">
              <img
                src="/CTA.png"
                alt="SP Fitness"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101314] via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-[#101314]" />
            </div>

            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <div className="relative flex min-w-0 flex-col justify-center px-6 py-10 sm:px-9 sm:py-12 md:px-12 md:py-14 lg:px-12 lg:py-16 xl:px-16">

              {/* Accent */}
              <div className="mb-6 flex items-center gap-3 sm:mb-7">
                <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300" />

                <span className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.22em] text-lime-300 sm:text-xs sm:tracking-[0.25em]">
                  Start Your Journey
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-xl font-[var(--font-space-grotesk)] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[64px]">
                Ready To
                <br />
                <span className="text-lime-300">Level Up?</span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-lg font-[var(--font-space-grotesk)] text-sm leading-6 text-white/50 sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base">
                Stop waiting for the perfect time. Start training, stay
                consistent, and become stronger every day at SP Fitness.
              </p>

              {/* ================================================= */}
              {/* BUTTON */}
              {/* ================================================= */}

              <div className="mt-7 w-full sm:mt-8">
                <a
                  href="/contact"
                  className="group inline-flex h-12 w-full items-center justify-center gap-3 bg-lime-300 px-7 font-[var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:bg-lime-200 sm:w-auto"
                >
                  <span>Join Now</span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* ================================================= */}
              {/* STATS */}
              {/* ================================================= */}

              <div className="mt-9 flex w-full flex-wrap items-center gap-x-5 gap-y-5 border-t border-white/[0.08] pt-6 sm:mt-10 sm:gap-x-8 sm:pt-7 md:gap-x-10">

                {/* Community */}
                <div className="min-w-[70px]">
                  <p className="font-[var(--font-space-grotesk)] text-lg font-black text-white sm:text-xl">
                    01
                  </p>

                  <p className="mt-1 font-[var(--font-space-grotesk)] text-[8px] font-semibold uppercase tracking-[0.15em] text-white/30 sm:text-[9px] sm:tracking-[0.18em]">
                    Community
                  </p>
                </div>

                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                {/* Commitment */}
                <div className="min-w-[75px]">
                  <p className="font-[var(--font-space-grotesk)] text-lg font-black text-white sm:text-xl">
                    100%
                  </p>

                  <p className="mt-1 font-[var(--font-space-grotesk)] text-[8px] font-semibold uppercase tracking-[0.15em] text-white/30 sm:text-[9px] sm:tracking-[0.18em]">
                    Commitment
                  </p>
                </div>

                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                {/* Progress */}
                <div className="min-w-[65px]">
                  <p className="font-[var(--font-space-grotesk)] text-lg font-black text-lime-300 sm:text-xl">
                    ∞
                  </p>

                  <p className="mt-1 font-[var(--font-space-grotesk)] text-[8px] font-semibold uppercase tracking-[0.15em] text-white/30 sm:text-[9px] sm:tracking-[0.18em]">
                    Progress
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= LIME ACCENT ================= */}
          <div className="absolute bottom-0 left-0 h-[3px] w-1/2 bg-lime-300 sm:w-1/3" />
        </motion.div>
      </div>
    </section>
  );
}