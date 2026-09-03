"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Member",
    image: "/gym1.png",
    text: "I've been training at SP Fitness for several months now, and I couldn't be happier with the results. The workouts are challenging, practical, and the atmosphere keeps me motivated.",
  },
  {
    name: "Priya Sharma",
    role: "Member",
    image: "/gym2.png",
    text: "The trainers are supportive and genuinely focused on helping you improve. My strength and confidence have improved so much since I started training here.",
  },
  {
    name: "Amit Deshmukh",
    role: "Member",
    image: "/gym3.png",
    text: "SP Fitness has everything I need to stay consistent. Great equipment, great environment, and trainers who actually pay attention to your progress.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Member",
    image: "/gym4.png",
    text: "I really enjoy the energy here. Everyone is focused on their own goals, and the environment makes you want to push yourself a little harder every day.",
  },
  {
    name: "Rohan Joshi",
    role: "Member",
    image: "/gym5.png",
    text: "The personalized guidance has helped me stay consistent and make real progress. SP Fitness feels more like a community than just another gym.",
  },
  {
    name: "Neha Patil",
    role: "Member",
    image: "/gym1.png",
    text: "From the equipment to the trainers, everything feels well thought out. I've finally found a place where I actually look forward to working out.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-[20%] top-[20%] h-[350px] w-[350px] rounded-full bg-lime-300/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-[940px] px-6 sm:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />

              <span className="text-[10px] font-medium uppercase tracking-wide text-lime-300">
                Testimonials
              </span>
            </div>

            <h2 className="max-w-[500px] text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-[42px]">
              What Our Members
              <br />
              <span className="text-white/95">Say About Us</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="pt-1 md:pt-2">
            <p className="max-w-[270px] text-[11px] leading-[1.65] text-white/55">
              Real people. Real workouts. Real progress. See what our members
              have to say about their experience at SP Fitness.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex h-9 items-center rounded-full bg-lime-300 px-5 text-[10px] font-semibold text-black transition-all duration-300 hover:bg-lime-200"
            >
              View All
            </a>
          </div>
        </div>

        {/* =====================================================
            TESTIMONIAL GRID
        ===================================================== */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">

          {/* COLUMN 1 */}
          <div className="flex flex-col">
            <TestimonialCard
              testimonial={testimonials[0]}
              tall
            />
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-4 pt-0 md:pt-0">
            <TestimonialCard testimonial={testimonials[1]} />
            <TestimonialCard testimonial={testimonials[4]} />
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col">
            <TestimonialCard
              testimonial={testimonials[2]}
              tall
            />
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col gap-4">
            <TestimonialCard testimonial={testimonials[3]} />
            <TestimonialCard testimonial={testimonials[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  tall = false,
}: {
  testimonial: {
    name: string;
    role: string;
    image: string;
    text: string;
  };
  tall?: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group rounded-[7px] bg-[#151d13] p-4 transition-all duration-300 hover:bg-[#182317] ${
        tall ? "min-h-[253px]" : "min-h-[166px]"
      }`}
    >
      {/* MEMBER */}
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#202720]">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-[11px] font-bold leading-tight text-white">
            {testimonial.name}
          </p>

          <p className="mt-1 text-[9px] leading-tight text-white/45">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* QUOTE */}
      <p
        className={`mt-5 text-[10px] leading-[1.55] text-white/75 ${
          tall ? "max-w-[170px]" : "max-w-[175px]"
        }`}
      >
        "{testimonial.text}"
      </p>

      {/* BOTTOM ACCENT */}
    </motion.div>
  );
}