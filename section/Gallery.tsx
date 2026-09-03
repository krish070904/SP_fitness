"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

const galleryImages = [
  "/gym1.png",
  "/gym2.png",
  "/gym3.png",
  "/gym4.png",
  "/gym5.png",
];

function GalleryCard({
  image,
  index,
  total,
  onSendToBack,
}: {
  image: string;
  index: number;
  total: number;
  onSendToBack: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [18, -18]);
  const rotateY = useTransform(x, [-150, 150], [-18, 18]);

  const depth = total - index - 1;

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } },
  ) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        zIndex: index + 1,
        perspective: 1200,
      }}
      drag
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      dragElastic={0.7}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      <motion.div
        className="relative h-full w-full cursor-grab overflow-hidden border border-white/10 bg-[#111315] shadow-2xl"
        animate={{
          rotateZ: depth * 3 - 6,
          scale: 1 - index * 0.055,
          y: index * 8,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 24,
        }}
        onClick={() => {
          if (index === total - 1) {
            onSendToBack();
          }
        }}
      >
        <img
          src={image}
          alt={`SP Fitness gym ${index + 1}`}
          className="h-full w-full select-none object-cover"
          draggable={false}
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-lime-300/50 bg-black/40 text-xs font-bold tracking-widest text-lime-300 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-lime-300">
              SP FITNESS
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/70">
              Train. Focus. Transform.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/30 text-lg text-white backdrop-blur-md">
            ↗
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [stack, setStack] = useState(galleryImages);

  const sendToBack = (image: string) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.indexOf(image);

      if (index === -1) return prev;

      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);

      return newStack;
    });
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.045] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* ================= CONTENT ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-lime-300" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
              Explore Our Gallery
            </span>

            <span className="h-2 w-2 rounded-full bg-lime-300" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Take A Look
            <br />
            <span className="text-lime-300">Inside.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
            Take a look around SP Fitness. Explore the space, the equipment, and
            the people putting in the work every day.
          </p>
        </div>

        {/* ================= CENTER GALLERY ================= */}
        <div className="mt-10 flex flex-col items-center sm:mt-12">
          {/* See More */}
          <a
            href="#contact"
            className="group inline-flex h-12 items-center gap-3 bg-lime-300 px-7 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
          >
            See More
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <div
            className="relative mt-10 w-[290px] sm:mt-12 sm:w-[340px] lg:w-[380px]"
            style={{
              height: "480px",
              perspective: "1200px",
            }}
          >
            {stack.map((image, index) => (
              <GalleryCard
                key={image}
                image={image}
                index={index}
                total={stack.length}
                onSendToBack={() => sendToBack(image)}
              />
            ))}
          </div>

          {/* Drag hint */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-8 bg-white/20" />

            <span className="h-px w-8 bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
