"use client";

import { motion } from "motion/react";
import CTA from "@/components/CTA";

const values = [
  {
    number: "01",
    title: "Focus",
    description: "We stay focused on what matters — your progress.",
  },
  {
    number: "02",
    title: "Passion",
    description: "We're passionate about fitness and your success.",
  },
  {
    number: "03",
    title: "Integrity",
    description: "We believe in honesty, transparency, and trust.",
  },
  {
    number: "04",
    title: "Community",
    description: "We're more than a gym, we're a family.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Years Of Experience",
  },
  {
    value: "15K+",
    label: "Happy Members",
  },
  {
    value: "50+",
    label: "Certified Trainers",
  },
  {
    value: "3",
    label: "Premium Locations",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080a0b] text-white">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative min-h-[720px] overflow-hidden sm:min-h-[760px] lg:min-h-[820px]">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/about.png"
            alt=""
            className="absolute right-[-18%] top-0 h-full w-[100%] object-cover object-center opacity-55 sm:right-[-8%] sm:w-[75%] lg:right-0 lg:w-[65%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080a0b] via-[#080a0b]/95 to-[#080a0b]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080a0b] via-transparent to-[#080a0b]/20" />
        </div>

        {/* Lime glow */}
        <div className="pointer-events-none absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-lime-300/[0.05] blur-[130px]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-28 sm:min-h-[760px] sm:px-10 sm:py-32 lg:min-h-[820px] lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[650px]"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-lime-300 sm:text-sm">
              About Us
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-[86px]">
              Built On
              <br />
              <span className="text-white">
                Passion.
              </span>
              <br />
              <span className="text-lime-300">
                Driven By Results.
              </span>
            </h1>

            <p className="mt-7 max-w-[520px] text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              SP Fitness was founded with a simple mission — to help people
              become the strongest version of themselves. We combine expert
              coaching, cutting-edge equipment, and a supportive community to
              deliver real, lasting results.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex h-12 items-center gap-4 rounded-full bg-lime-300 px-7 text-xs font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]"
            >
              Join Our Community

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR STORY */}
      {/* ========================================================= */}

      <section className="relative bg-[#0b0d0e]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-1 -top-1 h-full w-full border border-lime-300/70" />

              <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <img
                  src="/gym1.png"
                  alt="SP Fitness gym"
                  className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300">
                Our Story
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                More Than A Gym,
                <br />
                <span className="text-lime-300">
                  We're A Movement.
                </span>
              </h2>

              <p className="mt-6 max-w-[500px] text-sm leading-7 text-white/55 sm:text-base">
                SP Fitness began with a vision to create a space where fitness
                is not just about training, but about transforming lives. From
                day one, our goal has been to empower individuals to break
                limits, build confidence, and live healthier, stronger lives.
              </p>

              <div className="mt-8">
                <p className="font-serif text-3xl italic text-lime-300">
                  SP Fitness
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                  Founder
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STATS */}
      {/* ========================================================= */}

      <section className="bg-[#111315]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`flex flex-col items-center px-5 py-6 text-center ${
                  index !== 0
                    ? "border-l border-white/15"
                    : ""
                }`}
              >
                <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/45 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VALUES */}
      {/* ========================================================= */}

      <section className="bg-[#080a0b]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-300">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.03em] sm:text-5xl">
              What We Stand For
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-10 bg-lime-300" />
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group px-6 py-8 text-center ${
                  index > 0
                    ? "border-t border-white/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                {/* Number */}
                <span className="text-xs font-bold tracking-[0.2em] text-lime-300/70">
                  {value.number}
                </span>

                <h3 className="mt-4 text-xl font-bold uppercase">
                  {value.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-white/45">
                  {value.description}
                </p>

                <div className="mx-auto mt-5 h-[2px] w-0 bg-lime-300 transition-all duration-500 group-hover:w-8" />
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* IMAGE CTA */}
      {/* ========================================================= */}

      <section className="relative min-h-[430px] overflow-hidden">
        <img
          src="/gym5.png"
          alt="SP Fitness training"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto flex min-h-[430px] max-w-4xl flex-col items-center justify-center px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-4xl font-black uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Ready To Transform?
            </p>

            <p className="mt-3 text-3xl font-black uppercase leading-none text-lime-300 sm:text-4xl lg:text-5xl">
              Join SP Fitness Today.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex h-12 items-center gap-4 rounded-full bg-lime-300 px-8 text-xs font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
            >
              Join Now

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

        </div>
      </section>


    </main>
  );
}