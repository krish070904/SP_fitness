"use client";

import { motion } from "motion/react";

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative w-full overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-lime-300/[0.025] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-lime-300/[0.035] blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:mb-14 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-300" />

              <span className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.25em] text-lime-300 sm:text-xs">
                SP Fitness Empire
              </span>
            </div>

            <h2 className="font-[var(--font-space-grotesk)] text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
              Experience
              <br />
              <span className="text-lime-300">
                The Gym.
              </span>
            </h2>
          </div>

          <p className="max-w-xl font-[var(--font-space-grotesk)] text-sm leading-6 text-white/40 sm:text-[15px]">
            A place built for hard work, serious training, and real
            transformation. Step inside SP Fitness and experience an
            environment designed to keep you moving forward.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* TWO GYM IMAGES */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* ================= IMAGE 01 ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden border border-white/[0.08] bg-[#101314]"
          >
            <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
              <img
                src="/gym2.jpeg"
                alt="SP Fitness Gym"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Number */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <span className="font-[var(--font-space-grotesk)] text-6xl font-black leading-none text-white/10 sm:text-7xl">
                  01
                </span>
              </div>

              {/* Label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="border border-white/20 bg-black/50 px-3 py-2 font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Training Environment
                </span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-black uppercase text-white sm:text-3xl lg:text-4xl">
                  Train With
                  <br />
                  <span className="text-lime-300">
                    Purpose.
                  </span>
                </h3>
              </div>
            </div>
          </motion.div>

          {/* ================= IMAGE 02 ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden border border-white/[0.08] bg-[#101314]"
          >
            <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
              <img
                src="/gym.png"
                alt="SP Fitness Gym Experience"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Number */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <span className="font-[var(--font-space-grotesk)] text-6xl font-black leading-none text-white/10 sm:text-7xl">
                  02
                </span>
              </div>

              {/* Label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="border border-white/20 bg-black/50 px-3 py-2 font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  SP Fitness Experience
                </span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-black uppercase text-white sm:text-3xl lg:text-4xl">
                  Push Your
                  <br />
                  <span className="text-lime-300">
                    Limits.
                  </span>
                </h3>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ================= BOTTOM LINE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5"
        >
          <span className="font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
            Train Hard
          </span>

          <span className="h-px w-16 bg-lime-300/40 sm:w-24" />

          <span className="font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.2em] text-lime-300/60">
            Transform Yourself
          </span>
        </motion.div>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-lime-300" />
    </section>
  );
}