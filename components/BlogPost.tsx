"use client";

import Link from "next/link";

type BlogPostProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
};

export default function BlogPost({
  image,
  category,
  title,
  description,
  date,
}: BlogPostProps) {
  return (
    <main className="min-h-screen bg-[#0b0d0e] text-white">

      {/* ================================================= */}
      {/* BLOG HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d0e]">

        {/* Background glow */}
        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-lime-300/[0.035] blur-[130px]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36">

          {/* Back */}
          <Link
            href="/#blog"
            className="group mb-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/45 transition-colors hover:text-lime-300"
          >
            <span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back To Blog
          </Link>

          {/* Category */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              {category}
            </span>

            <span className="h-px w-8 bg-white/25" />

            <span className="text-xs text-white/40">
              {date}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            {description}
          </p>

        </div>
      </section>

      {/* ================================================= */}
      {/* BLOG IMAGE */}
      {/* ================================================= */}

      <section className="bg-[#0b0d0e]">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">

          <div className="overflow-hidden border border-white/10 bg-[#111315]">
            <img
              src={image}
              alt={title}
              className="h-auto w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* BLOG CONTENT */}
      {/* ================================================= */}

      <section className="bg-[#0b0d0e]">
        <div className="mx-auto max-w-3xl px-6 pb-20 sm:px-10 sm:pb-24">

          <div className="border-t border-white/10 pt-10">

            <p className="text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
              {description}
            </p>

            <div className="mt-10 space-y-7 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">

              <p>
                Your fitness journey is built one session at a time. The right
                approach is not about doing everything at once, but about
                creating a routine that you can consistently follow.
              </p>

              <p>
                At SP Fitness, we believe that effective training starts with
                understanding your goals and building a plan around them.
                Consistency, proper technique, recovery, and nutrition all
                play an important role in achieving sustainable results.
              </p>

              <h2 className="pt-5 text-2xl font-black uppercase text-white sm:text-3xl">
                Make Every Session Count
              </h2>

              <p>
                Focus on quality rather than simply spending more time in the
                gym. Follow a structured routine, track your progress, and
                gradually challenge yourself as your strength and fitness
                improve.
              </p>

              <p>
                Remember that progress takes time. Stay consistent, trust the
                process, and keep working toward becoming a stronger version
                of yourself.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="border-t border-white/10 bg-[#111315]">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:px-10 lg:px-12">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              SP Fitness
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
              Ready To Get Started?
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex h-12 items-center gap-3 bg-lime-300 px-7 text-xs font-bold uppercase tracking-wide text-black transition-colors hover:bg-lime-200"
          >
            Join Now

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </section>

    </main>
  );
}