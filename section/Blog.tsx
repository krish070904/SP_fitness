"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const blogs = [
  {
    image: "/blog1.png",
    category: "Training",
    title: "How To Build A Workout Routine That Actually Works",
    description:
      "Learn how to structure your weekly workouts, stay consistent, and make every session count.",
    date: "Sep 02, 2026",
  },
  {
    image: "/blog2.png",
    category: "Nutrition",
    title: "The Simple Guide To Eating For Better Results",
    description:
      "Understand the basics of nutrition and how the right food choices can support your fitness goals.",
    date: "Aug 28, 2026",
  },
  {
    image: "/blog3.png",
    category: "Mindset",
    title: "Why Consistency Beats Motivation Every Time",
    description:
      "Motivation comes and goes. Discover how building the right habits can keep you moving forward.",
    date: "Aug 21, 2026",
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!panels.length) return;

    const updatePanels = () => {
      panels.forEach((panel, index) => {
        const content = panel.querySelector(
          ".blog-content",
        ) as HTMLElement | null;

        const overlay = panel.querySelector(
          ".blog-overlay",
        ) as HTMLElement | null;

        const info = panel.querySelector(
          ".blog-info",
        ) as HTMLElement | null;

        const image = panel.querySelector(
          ".blog-image",
        ) as HTMLElement | null;

        if (!content || !overlay || !info || !image) return;

        const isActive = index === active;

        gsap.to(panel, {
          flexGrow: isActive ? 2.4 : 1,
          duration: 0.65,
          ease: "power3.out",
        });

        gsap.to(image, {
          scale: isActive ? 1.04 : 1.12,
          filter: isActive ? "grayscale(0%)" : "grayscale(35%)",
          duration: 0.65,
          ease: "power3.out",
        });

        gsap.to(overlay, {
          opacity: isActive ? 0.35 : 0.65,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(info, {
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 15,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(content, {
          opacity: isActive ? 1 : 0,
          duration: 0.4,
          delay: isActive ? 0.12 : 0,
        });
      });
    };

    updatePanels();

    return () => {
      gsap.killTweensOf(panels);
    };
  }, [active]);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-lime-300/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-300" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
                Fitness Journal
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Train
              <br />
              <span className="text-lime-300">Smarter.</span>
            </h2>
          </div>

          <div className="max-w-sm md:pb-1">
            <p className="text-sm leading-6 text-white/45 sm:text-base">
              Practical fitness tips, training advice, nutrition insights, and
              motivation to help you make better progress.
            </p>
          </div>
        </div>

        {/* ================= BLOG ACCORDION ================= */}
        <div
          className="flex h-[520px] w-full gap-3 overflow-hidden"
          onMouseLeave={() => setActive(0)}
        >
          {blogs.map((blog, index) => {
            const isActive = index === active;

            return (
              <div
                key={blog.title}
                ref={(el) => {
                  panelRefs.current[index] = el;
                }}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className="group relative min-w-0 flex-1 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#111315]"
              >
                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-image absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark overlay */}
                <div className="blog-overlay absolute inset-0 bg-black opacity-60" />

                {/* Top number */}
                <div
                  className={`absolute left-5 top-5 z-10 flex h-9 w-9 items-center justify-center border backdrop-blur-md transition-all duration-300 ${
                    isActive
                      ? "border-lime-300/60 bg-lime-300 text-black"
                      : "border-white/20 bg-black/30 text-white"
                  }`}
                >
                  <span className="text-[10px] font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Collapsed title */}
                {!isActive && (
                  <div className="absolute bottom-6 left-5 right-5 z-10">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-lime-300">
                      {blog.category}
                    </p>

                    <h3 className="mt-2 text-sm font-bold leading-tight text-white">
                      {blog.title}
                    </h3>
                  </div>
                )}

                {/* Active content */}
                <div className="blog-content absolute inset-x-0 bottom-0 z-10 p-6 opacity-0 sm:p-8">
                  <div className="blog-info">

                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-lime-300">
                        {blog.category}
                      </span>

                      <span className="h-px w-6 bg-white/30" />

                      <span className="text-[9px] uppercase tracking-wider text-white/45">
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="max-w-xl text-2xl font-black uppercase leading-[0.95] text-white sm:text-3xl lg:text-4xl">
                      {blog.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-xs leading-6 text-white/65 sm:text-sm">
                      {blog.description}
                    </p>

                    <button
                      className="group/button mt-6 inline-flex h-10 items-center gap-3 bg-lime-300 px-5 text-[10px] font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
                    >
                      Read Article

                      <span className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* Bottom lime line */}
                <div
                  className={`absolute bottom-0 left-0 z-20 h-[3px] bg-lime-300 transition-all duration-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}