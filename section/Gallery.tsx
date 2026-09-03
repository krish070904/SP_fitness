"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "motion/react";
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

  const shouldReduceMotion = useReducedMotion();

  /*
   * Keep tilt extremely small.
   * This prevents heavy 3D rendering on mobile.
   */
  const rotateX = useTransform(
    y,
    [-150, 150],
    shouldReduceMotion ? [0, 0] : [6, -6]
  );

  const rotateY = useTransform(
    x,
    [-150, 150],
    shouldReduceMotion ? [0, 0] : [-6, 6]
  );

  const depth = total - index - 1;

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: {
        x: number;
        y: number;
      };
    }
  ) => {
    if (
      Math.abs(info.offset.x) > 100 ||
      Math.abs(info.offset.y) > 100
    ) {
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

        /*
         * Desktop can have subtle 3D.
         * Mobile gets almost no tilt.
         */
        rotateX,
        rotateY,

        zIndex: index + 1,

        transformPerspective: 1200,

        /*
         * Helps browser promote the card to its own layer.
         */
        willChange: "transform",
      }}
      drag
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      dragElastic={0.55}
      dragMomentum={false}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      <motion.div
        className="relative h-full w-full cursor-grab overflow-hidden border border-white/10 bg-[#111315] shadow-xl"
        animate={{
          /*
           * Much smaller movement between cards.
           */
          rotateZ: depth * 2.2 - 4,
          scale: 1 - index * 0.045,
          y: index * 7,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
          mass: 0.6,
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
          className="pointer-events-none h-full w-full select-none object-cover"
          draggable={false}
          loading={index === total - 1 ? "eager" : "lazy"}
          decoding="async"
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

        {/* Number */}
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-lime-300/50 bg-black/40 text-[10px] font-bold tracking-widest text-lime-300 backdrop-blur-sm sm:left-5 sm:top-5 sm:h-10 sm:w-10 sm:text-xs">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between sm:bottom-5 sm:left-5 sm:right-5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-lime-300 sm:text-[10px] sm:tracking-[0.25em]">
              SP FITNESS
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-white/70 sm:text-xs sm:tracking-[0.15em]">
              Train. Focus. Transform.
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center border border-white/20 bg-black/30 text-base text-white backdrop-blur-sm sm:h-10 sm:w-10 sm:text-lg">
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
      const index = prev.indexOf(image);

      if (index === -1) {
        return prev;
      }

      const newStack = [...prev];
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
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.035] blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300 sm:h-2 sm:w-2" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-300 sm:text-xs sm:tracking-[0.25em]">
              Explore Our Gallery
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-lime-300 sm:h-2 sm:w-2" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Take A Look
            <br />
            <span className="text-lime-300">
              Inside.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
            Take a look around SP Fitness. Explore the space, the equipment,
            and the people putting in the work every day.
          </p>
        </div>

        {/* ================================================= */}
        {/* GALLERY */}
        {/* ================================================= */}

        <div className="mt-10 flex flex-col items-center sm:mt-12">

          {/* See More */}
          <a
            href="/gallery"
            className="group inline-flex h-12 items-center gap-3 bg-lime-300 px-7 text-sm font-bold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-lime-200"
          >
            See More

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* ================================================= */}
          {/* CARD STACK */}
          {/* ================================================= */}

          <div
            className="relative mt-10 w-[280px] sm:mt-12 sm:w-[340px] lg:w-[380px]"
            style={{
              height: "450px",
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

          {/* ================================================= */}
          {/* DRAG HINT */}
          {/* ================================================= */}

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-8 bg-white/20" />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
              Drag To Explore
            </span>

            <span className="h-px w-8 bg-white/20" />
          </div>

        </div>
      </div>
    </section>
  );
}