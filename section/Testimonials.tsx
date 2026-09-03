"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "SP Fitness Member",
    image: "/gym2.jpeg",
    text: "I've been training at SP Fitness for several months now, and I couldn't be happier with the results. The workouts are challenging, practical, and the atmosphere keeps me motivated.",
  },
  {
    name: "Priya Sharma",
    role: "SP Fitness Member",
    image: "/gym.png",
    text: "The trainers are supportive and genuinely focused on helping you improve. My strength and confidence have improved so much since I started training here.",
  },
  {
    name: "Amit Deshmukh",
    role: "SP Fitness Member",
    image: "/gym2.jpeg",
    text: "SP Fitness has everything I need to stay consistent. Great equipment, great environment, and trainers who actually pay attention to your progress.",
  },
  {
    name: "Sneha Kulkarni",
    role: "SP Fitness Member",
    image: "/gym.png",
    text: "I really enjoy the energy here. Everyone is focused on their own goals, and the environment makes you want to push yourself a little harder every day.",
  },
  {
    name: "Rohan Joshi",
    role: "SP Fitness Member",
    image: "/gym2.jpeg",
    text: "The personalized guidance has helped me stay consistent and make real progress. SP Fitness feels more like a community than just another gym.",
  },
  {
    name: "Neha Patil",
    role: "SP Fitness Member",
    image: "/gym.png",
    text: "From the equipment to the trainers, everything feels well thought out. I've finally found a place where I actually look forward to working out.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOWS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-lime-300/[0.025] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-lime-300/[0.035] blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-10 sm:mb-12 lg:mb-14">

          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-lime-300" />

            <span className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.25em] text-lime-300 sm:text-xs">
              Member Stories
            </span>
          </motion.div>

          {/* Heading */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="max-w-3xl font-[var(--font-space-grotesk)] text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
                What Our
                <br />
                <span className="text-lime-300">
                  Members Say.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="font-[var(--font-space-grotesk)] text-sm leading-6 text-white/40 sm:text-[15px]">
                Real people. Real workouts. Real progress. Hear from
                the people who are putting in the work and becoming
                stronger every day at SP Fitness.
              </p>

            </motion.div>

          </div>
        </div>

        {/* ================================================= */}
        {/* FEATURED TESTIMONIAL */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <FeaturedTestimonial testimonial={testimonials[0]} />
        </motion.div>

        {/* ================================================= */}
        {/* TESTIMONIAL GRID */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {testimonials.slice(1).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}

        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
            Stronger Together
          </span>

          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-lime-300/40 sm:w-20" />

            <span className="font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.2em] text-lime-300/60">
              SP Fitness Community
            </span>
          </div>
        </motion.div>

      </div>

      {/* Bottom accent */}

      <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-lime-300" />
    </section>
  );
}


/* ========================================================= */
/* FEATURED TESTIMONIAL */
/* ========================================================= */

function FeaturedTestimonial({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    image: string;
    text: string;
  };
}) {
  return (
    <div className="group relative overflow-hidden border border-white/[0.08] bg-[#111515]">

      {/* Lime accent */}

      <div className="absolute left-0 top-0 h-full w-[3px] bg-lime-300" />

      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">

        {/* ================= PROFILE ================= */}

        <div className="relative min-h-[230px] overflow-hidden bg-[#151a16] sm:min-h-[280px] md:min-h-[320px]">

          <img
            src={testimonial.image}
            alt={`${testimonial.name} at SP Fitness`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-transform duration-700 md:group-hover:scale-[1.04]"
          />

          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#111515] via-black/20 to-transparent" />

          {/* Number */}

          <span className="absolute bottom-4 left-5 font-[var(--font-space-grotesk)] text-7xl font-black leading-none text-white/[0.08] sm:left-7 sm:text-8xl">
            01
          </span>

          {/* Member label */}

          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            <span className="border border-white/20 bg-black/50 px-3 py-2 font-[var(--font-space-grotesk)] text-[8px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Featured Member
            </span>
          </div>

        </div>

        {/* ================= TESTIMONIAL CONTENT ================= */}

        <div className="relative flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">

          {/* Quote mark */}

          <div className="absolute right-5 top-3 font-serif text-7xl leading-none text-lime-300/[0.08] sm:right-8 sm:top-4 sm:text-8xl">
            "
          </div>

          {/* Stars */}

          <div className="mb-5 flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-sm text-lime-300"
              >
                ★
              </span>
            ))}
          </div>

          {/* Quote */}

          <p className="max-w-2xl font-[var(--font-space-grotesk)] text-lg font-medium leading-7 tracking-[-0.01em] text-white sm:text-xl sm:leading-8 md:text-2xl md:leading-9">
            "{testimonial.text}"
          </p>

          {/* Divider */}

          <div className="my-6 h-px w-full bg-white/[0.08]" />

          {/* Member */}

          <div className="flex items-center gap-3">

            <div className="h-10 w-10 overflow-hidden rounded-full border border-lime-300/30 bg-[#202720]">
              <img
                src={testimonial.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="font-[var(--font-space-grotesk)] text-xs font-bold uppercase text-white">
                {testimonial.name}
              </p>

              <p className="mt-1 font-[var(--font-space-grotesk)] text-[9px] font-medium uppercase tracking-[0.12em] text-white/35">
                {testimonial.role}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


/* ========================================================= */
/* NORMAL TESTIMONIAL CARD */
/* ========================================================= */

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: {
    name: string;
    role: string;
    image: string;
    text: string;
  };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      className="group relative flex min-h-[270px] flex-col overflow-hidden border border-white/[0.07] bg-[#111515] p-5 transition-all duration-300 sm:min-h-[290px] sm:p-6 md:hover:-translate-y-1 md:hover:border-lime-300/20"
    >

      {/* Top accent */}

      <div className="absolute left-0 top-0 h-[2px] w-0 bg-lime-300 transition-all duration-500 md:group-hover:w-full" />

      {/* ================= TOP ================= */}

      <div className="flex items-center justify-between">

        {/* Member */}

        <div className="flex min-w-0 items-center gap-3">

          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#202720]">
            <img
              src={testimonial.image}
              alt={`${testimonial.name} at SP Fitness`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">

            <p className="truncate font-[var(--font-space-grotesk)] text-[11px] font-bold uppercase leading-tight text-white">
              {testimonial.name}
            </p>

            <p className="mt-1 font-[var(--font-space-grotesk)] text-[8px] font-medium uppercase tracking-[0.12em] text-white/35">
              {testimonial.role}
            </p>

          </div>
        </div>

        {/* Number */}

        <span className="font-[var(--font-space-grotesk)] text-2xl font-black leading-none text-white/[0.06]">
          0{index + 2}
        </span>

      </div>

      {/* ================= STARS ================= */}

      <div className="mt-6 flex gap-1">

        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className="text-[11px] text-lime-300"
          >
            ★
          </span>
        ))}

      </div>

      {/* ================= QUOTE ================= */}

      <p className="mt-4 flex-1 font-[var(--font-space-grotesk)] text-sm leading-6 text-white/65">
        "{testimonial.text}"
      </p>

      {/* ================= BOTTOM ================= */}

      <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">

        <span className="font-[var(--font-space-grotesk)] text-[8px] font-bold uppercase tracking-[0.18em] text-white/20">
          Verified Member
        </span>

        <span className="text-xs text-lime-300/50">
          ↗
        </span>

      </div>

    </motion.article>
  );
}