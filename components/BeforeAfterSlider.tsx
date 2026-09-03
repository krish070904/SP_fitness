"use client";

import { useState } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  title,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  const updatePosition = (
    clientX: number,
    element: HTMLDivElement
  ) => {
    const rect = element.getBoundingClientRect();

    const percentage =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(
      Math.min(100, Math.max(0, percentage))
    );
  };

  return (
    <div className="w-full">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="font-[var(--font-space-grotesk)] text-[9px] font-bold uppercase tracking-[0.2em] text-lime-300 sm:text-[10px]">
            Before / After
          </p>

          <h4 className="mt-1 font-[var(--font-space-grotesk)] text-xl font-black uppercase leading-none tracking-[-0.02em] text-white sm:text-2xl md:text-3xl">
            {title}
          </h4>
        </div>

        <span className="hidden font-[var(--font-space-grotesk)] text-[9px] font-semibold uppercase tracking-[0.15em] text-white/30 sm:block">
          Drag To Compare
        </span>
      </div>

      {/* ================================================= */}
      {/* SLIDER */}
      {/* ================================================= */}

      <div
        className="
          relative
          h-[540px]
          w-full
          cursor-ew-resize
          select-none
          overflow-hidden
          border
          border-white/[0.10]
          bg-[#090b0c]
          touch-none
          sm:h-[620px]
          md:h-[680px]
          lg:h-[720px]
          xl:h-[760px]
        "
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(
            event.pointerId
          );

          updatePosition(
            event.clientX,
            event.currentTarget
          );
        }}
        onPointerMove={(event) => {
          if (event.buttons === 1) {
            updatePosition(
              event.clientX,
              event.currentTarget
            );
          }
        }}
      >

        {/* ================================================= */}
        {/* AFTER IMAGE */}
        {/* ================================================= */}

        <div className="absolute inset-0 flex items-center justify-center bg-[#090b0c]">
          <img
            src={after}
            alt={`${title} after transformation`}
            draggable={false}
            className="
              h-full
              w-full
              object-contain
              object-center
            "
          />
        </div>

        {/* AFTER LABEL */}

        <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
          <div className="border border-lime-300/30 bg-lime-300 px-3 py-2 shadow-lg sm:px-4">
            <span className="font-[var(--font-space-grotesk)] text-[9px] font-black uppercase tracking-[0.16em] text-black sm:text-[10px]">
              After
            </span>
          </div>
        </div>

        {/* ================================================= */}
        {/* BEFORE IMAGE */}
        {/* ================================================= */}

        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-[#090b0c]">
            <img
              src={before}
              alt={`${title} before transformation`}
              draggable={false}
              className="
                h-full
                w-full
                object-contain
                object-center
              "
            />
          </div>

          {/* BEFORE LABEL */}

          <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
            <div className="border border-white/30 bg-black/70 px-3 py-2 backdrop-blur-md sm:px-4">
              <span className="font-[var(--font-space-grotesk)] text-[9px] font-black uppercase tracking-[0.16em] text-white sm:text-[10px]">
                Before
              </span>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* SUBTLE OVERLAY */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div
          className="pointer-events-none absolute inset-y-0 z-30 w-[2px] bg-white"
          style={{
            left: `${position}%`,
          }}
        >

          {/* Divider glow */}

          <div className="absolute inset-y-0 left-1/2 w-[10px] -translate-x-1/2 bg-white/10 blur-md" />

          {/* ================================================= */}
          {/* HANDLE */}
          {/* ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-black/85
              shadow-2xl
              backdrop-blur-md
              sm:h-14
              sm:w-14
              md:h-16
              md:w-16
            "
          >
            <div className="flex items-center gap-1 text-white">
              <span className="text-sm font-bold sm:text-base">
                ←
              </span>

              <span className="h-4 w-px bg-white/30" />

              <span className="text-sm font-bold sm:text-base">
                →
              </span>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* CENTER INSTRUCTION */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 sm:bottom-6">
          <div className="border border-white/10 bg-black/65 px-4 py-2 backdrop-blur-md">
            <span className="font-[var(--font-space-grotesk)] text-[8px] font-bold uppercase tracking-[0.18em] text-white/60 sm:text-[9px]">
              Drag To Reveal
            </span>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3">
        <span className="font-[var(--font-space-grotesk)] text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
          Before
        </span>

        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>

        <span className="font-[var(--font-space-grotesk)] text-[8px] font-semibold uppercase tracking-[0.18em] text-lime-300/70">
          After
        </span>
      </div>
    </div>
  );
}