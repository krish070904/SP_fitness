"use client";

import { motion } from "motion/react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function TrainerTransformation() {
  return (
    <section
      id="trainer-transformation"
      className="relative w-full overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-lime-300/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-48 bottom-10 h-[500px] w-[500px] rounded-full bg-lime-300/[0.04] blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.02] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ================================================= */}
        {/* SECTION INTRO */}
        {/* ================================================= */}

        <div className="mb-14 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">

          {/* Left empty visual space */}
          <div className="hidden lg:block">
            <div className="h-px w-24 bg-lime-300/40" />
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.25em] text-lime-300 sm:text-xs">
              SP Fitness Empire
            </p>

            <h2 className="max-w-4xl font-[var(--font-space-grotesk)] text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              Built By
              <br />
              <span className="text-lime-300">People Who Care.</span>
            </h2>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* TRAINER FEATURE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden border border-white/[0.08] bg-[#101314]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr]">

            {/* ================= TRAINER IMAGE ================= */}

            <div className="group relative h-[390px] overflow-hidden sm:h-[480px] lg:h-[560px]">
              <img
                src="/trainer.png"
                alt="SP Fitness Trainer"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101314] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#101314]" />

              {/* Trainer number */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <p className="font-[var(--font-space-grotesk)] text-6xl font-black leading-none text-white/10 sm:text-7xl">
                  01
                </p>
              </div>

              {/* Image label */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lime-300" />

                  <span className="font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                    SP Fitness Coach
                  </span>
                </div>
              </div>
            </div>

            {/* ================= TRAINER CONTENT ================= */}

            <div className="flex min-w-0 flex-col justify-center px-6 py-10 sm:px-9 sm:py-12 md:px-12 lg:px-14 xl:px-16">

              <p className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.25em] text-lime-300 sm:text-xs">
                Your Coach. Your Guide.
              </p>

              <h3 className="mt-4 font-[var(--font-space-grotesk)] text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                Train With
                <br />
                <span className="text-lime-300">Purpose.</span>
              </h3>

              <p className="mt-6 max-w-xl font-[var(--font-space-grotesk)] text-sm leading-7 text-white/50 sm:text-[15px]">
                Great results start with the right guidance. Our trainers
                understand that every person walks into the gym with a
                different goal, different body, and different starting point.
              </p>

              <p className="mt-4 max-w-xl font-[var(--font-space-grotesk)] text-sm leading-7 text-white/50 sm:text-[15px]">
                From your first workout to your biggest milestone, we focus on
                proper technique, smart progression, consistency, and the
                confidence to keep going.
              </p>

              {/* Trainer qualities */}

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/[0.08] pt-7 sm:grid-cols-3">

                <div>
                  <p className="font-[var(--font-space-grotesk)] text-lg font-black text-lime-300">
                    01
                  </p>

                  <p className="mt-1 font-[var(--font-space-grotesk)] text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                    Personal Guidance
                  </p>
                </div>

                <div>
                  <p className="font-[var(--font-space-grotesk)] text-lg font-black text-lime-300">
                    02
                  </p>

                  <p className="mt-1 font-[var(--font-space-grotesk)] text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                    Smart Training
                  </p>
                </div>

                <div>
                  <p className="font-[var(--font-space-grotesk)] text-lg font-black text-lime-300">
                    03
                  </p>

                  <p className="mt-1 font-[var(--font-space-grotesk)] text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                    Real Progress
                  </p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* TRANSFORMATION SECTION */}
        {/* ================================================= */}

        <div className="mt-20 sm:mt-24 lg:mt-28">

          {/* Transformation heading */}

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.25em] text-lime-300 sm:text-xs">
                Real Work. Real Results.
              </p>

              <h3 className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                Transformation
                <span className="text-lime-300"> Stories.</span>
              </h3>
            </div>

            <p className="max-w-md font-[var(--font-space-grotesk)] text-sm leading-6 text-white/40">
              Progress isn't about changing overnight. It's about showing up,
              putting in the work, and becoming better one session at a time.
            </p>

          </div>

          {/* ================================================= */}
          {/* TRANSFORMATION 01 IMAGE */}
          {/* ================================================= */}

          
          {/* ================================================= */}
          {/* BEFORE / AFTER 01 */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            <BeforeAfterSlider
              before="/beforetranformation1.png"
              after="/aftertranforation1.png"
              title="Transformation Journey 01"
            />
          </motion.div>

          {/* ================================================= */}
          {/* TRANSFORMATION 02 IMAGE */}
          {/* ================================================= */}

         

          {/* ================================================= */}
          {/* BEFORE / AFTER 02 */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <BeforeAfterSlider
              before="/beforetransformation2.png"
              after="/aftertransformation2.png"
              title="Transformation Journey 02"
            />
          </motion.div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/[0.08] pt-8 sm:mt-24 lg:mt-28"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-[var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Your transformation starts here.
              </p>

              <h3 className="mt-2 max-w-xl font-[var(--font-space-grotesk)] text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                Show Up.
                <span className="text-lime-300"> Put In The Work.</span>
              </h3>
            </div>

            <a
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center border border-lime-300 bg-lime-300 px-7 font-[var(--font-space-grotesk)] text-xs font-black uppercase tracking-[0.08em] text-black transition-all duration-300 hover:bg-transparent hover:text-lime-300 sm:w-auto"
            >
              Start Your Journey
            </a>

          </div>
        </motion.div>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-lime-300" />
    </section>
  );
}