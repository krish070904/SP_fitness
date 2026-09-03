"use client";

import { motion } from "motion/react";
import DepthCarousel from "@/components/DepthCarousel";
import CTA from "@/components/CTA";

const galleryImages = [
  {
    src: "/trainer.jpeg",
    title: "Our Trainers",
    category: "Training",
  },
  {
    src: "/gym2.jpeg",
    title: "Training Experience",
    category: "Fitness",
  },
  {
    src: "/gym2.png",
    title: "Training Floor",
    category: "Gym",
  },
  {
    src: "/gym3.png",
    title: "Performance Zone",
    category: "Training",
  },
  {
    src: "/gym4.png",
    title: "Workout Area",
    category: "Fitness",
  },
  {
    src: "/gym5.png",
    title: "SP Fitness Community",
    category: "Community",
  },
  {
    src: "/blog1.png",
    title: "Train With Purpose",
    category: "Training",
  },
  {
    src: "/blog2.png",
    title: "Nutrition & Results",
    category: "Nutrition",
  },
  {
    src: "/blog3.png",
    title: "Consistency Matters",
    category: "Mindset",
  },
  {
    src: "/BG.png",
    title: "SP Fitness",
    category: "Experience",
  },
  {
    src: "/about.png",
    title: "More Than A Gym",
    category: "Our Story",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080a0b] text-white">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#080a0b]">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/BG.png"
            alt=""
            className="h-full w-full object-cover opacity-[0.12]"
          />

          <div className="absolute inset-0 bg-[#080a0b]/80" />
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute left-[10%] top-[15%] h-[450px] w-[450px] rounded-full bg-lime-300/[0.04] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-32 sm:px-10 sm:pb-20 sm:pt-36 lg:px-16 lg:pb-20 lg:pt-40">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime-300 sm:text-sm">
              SP Fitness
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-[90px]">
              Explore
              <br />
              <span className="text-lime-300">
                Our Gallery.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              Step inside SP Fitness and experience the environment,
              equipment, trainers, and community built to help you become
              stronger every day.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* DEPTH CAROUSEL */}
      {/* ===================================================== */}

      <section className="relative bg-[#080a0b]">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-8 sm:pb-24 lg:px-16 lg:pb-28">

          <div className="mb-8 flex items-end justify-between sm:mb-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
                Featured
              </p>

              <h2 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
                Inside SP Fitness
              </h2>
            </motion.div>

            <p className="hidden text-xs font-medium text-white/30 sm:block">
              Drag • Scroll • Explore
            </p>

          </div>

          {/* Carousel */}
          <div className="relative h-[460px] w-full sm:h-[530px] lg:h-[600px]">

            <DepthCarousel
              items={galleryImages.map((image) => ({
                image: image.src,
                alt: image.title,
              }))}
              cardWidth={300}
              cardHeight={400}
              radius={2}
              depth={220}
              spread={95}
              tilt={20}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.2}
              blur={4}
              duration={700}
              autoplay={true}
              autoplayDelay={3500}
              loop={true}
              showControls={true}
              showIndicators={true}
            />

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FULL GALLERY */}
      {/* ===================================================== */}

      <section className="bg-[#0d0f10]">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-300">
                The Collection
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Take A Look
                <br />
                <span className="text-white/35">
                  Around.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/40">
              From our training floor to our community, every part of SP
              Fitness is built around progress.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* GALLERY GRID */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">

            {/* 01 - TRAINER */}
            <GalleryCard
              image="/trainer.jpeg"
              title="Our Trainers"
              category="Training"
              className="sm:col-span-2 lg:col-span-7"
              aspect="aspect-[16/10]"
              delay={0}
            />

            {/* 02 - GYM 2 JPEG */}
            <GalleryCard
              image="/gym2.jpeg"
              title="Training Experience"
              category="Fitness"
              className="sm:col-span-1 lg:col-span-5"
              aspect="aspect-[4/5]"
              delay={0.05}
            />

            {/* 03 - GYM 2 PNG */}
            <GalleryCard
              image="/gym2.png"
              title="Training Floor"
              category="Gym"
              className="sm:col-span-1 lg:col-span-5"
              aspect="aspect-[4/5]"
              delay={0.1}
            />

            {/* 04 - GYM 3 */}
            <GalleryCard
              image="/gym3.png"
              title="Performance Zone"
              category="Training"
              className="sm:col-span-1 lg:col-span-7"
              aspect="aspect-[16/10]"
              delay={0.15}
            />

            {/* 05 - GYM 4 */}
            <GalleryCard
              image="/gym4.png"
              title="Workout Area"
              category="Fitness"
              className="sm:col-span-2 lg:col-span-7"
              aspect="aspect-[16/10]"
              delay={0.2}
            />

            {/* 06 - GYM 5 */}
            <GalleryCard
              image="/gym5.png"
              title="SP Fitness Community"
              category="Community"
              className="sm:col-span-2 lg:col-span-5"
              aspect="aspect-[4/5]"
              delay={0.25}
            />

            {/* 07 - BLOG 1 */}
            <GalleryCard
              image="/blog1.png"
              title="Train With Purpose"
              category="Training"
              className="sm:col-span-1 lg:col-span-4"
              aspect="aspect-[4/5]"
              delay={0.3}
            />

            {/* 08 - BLOG 2 */}
            <GalleryCard
              image="/blog2.png"
              title="Nutrition & Results"
              category="Nutrition"
              className="sm:col-span-1 lg:col-span-4"
              aspect="aspect-[4/5]"
              delay={0.35}
            />

            {/* 09 - BLOG 3 */}
            <GalleryCard
              image="/blog3.png"
              title="Consistency Matters"
              category="Mindset"
              className="sm:col-span-1 lg:col-span-4"
              aspect="aspect-[4/5]"
              delay={0.4}
            />

            {/* 10 - BG */}
            <GalleryCard
              image="/BG.png"
              title="The SP Fitness Experience"
              category="Experience"
              className="sm:col-span-2 lg:col-span-7"
              aspect="aspect-[16/9]"
              delay={0.45}
            />

            {/* 11 - ABOUT */}
            <GalleryCard
              image="/about.png"
              title="More Than A Gym"
              category="Our Story"
              className="sm:col-span-2 lg:col-span-5"
              aspect="aspect-[4/5]"
              delay={0.5}
            />

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <CTA />

    </main>
  );
}


/* ========================================================= */
/* GALLERY CARD */
/* ========================================================= */

function GalleryCard({
  image,
  title,
  category,
  className = "",
  aspect = "aspect-square",
  delay = 0,
}: {
  image: string;
  title: string;
  category: string;
  className?: string;
  aspect?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden ${className}`}
    >

      {/* Image */}
      <div className={`${aspect} overflow-hidden bg-[#111315]`}>

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Lime border */}
      <div className="pointer-events-none absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-lime-300/50" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">
          {category}
        </p>

        <div className="mt-1 flex items-center justify-between gap-4">

          <h3 className="text-lg font-bold uppercase sm:text-xl">
            {title}
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 text-sm text-white transition-all duration-300 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-black">
            ↗
          </span>

        </div>

      </div>
    </motion.div>
  );
}