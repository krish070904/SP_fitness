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
    category: "Nutrition & Diet",
    title: "The Simple Guide To Eating For Better Results",
    description:
      "Understand the basics of nutrition and how the right food choices can support your fitness goals.",
    date: "Aug 28, 2026",
  },
  {
    image: "/blog3.png",
    category: "Workout Training",
    title: "Why Consistency Beats Motivation Every Time",
    description:
      "Motivation comes and goes. Discover how building the right habits can keep you moving forward.",
    date: "Aug 21, 2026",
  },
];

export default function Blog() {
  return (
    <section
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

        {/* ================= STATIC BLOG GRID ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group overflow-hidden border border-white/10 bg-[#111315]"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Category + Date */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-lime-300">
                    {blog.category}
                  </span>

                  <span className="h-px w-5 bg-white/25" />

                  <span className="text-[10px] text-white/40">{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-black uppercase leading-[1.05] text-white sm:text-2xl">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-white/45">
                  {blog.description}
                </p>

                {/* Read More */}
                <a
                  href={
                    blog.category === "Training"
                      ? "/blog/how-to-build-a-workout-routine"
                      : blog.category === "Nutrition & Diet"
                        ? "/blog/simple-guide-to-eating-for-better-results"
                        : "/blog/why-consistency-beats-motivation"
                  }
                  className="group/button mt-6 inline-flex h-10 items-center gap-3 bg-lime-300 px-5 text-[10px] font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
                >
                  Read Article
                  <span className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Bottom line */}
              <div className="h-[2px] w-full bg-lime-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
