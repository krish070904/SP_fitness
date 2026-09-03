import BlogPost from "@/components/BlogPost";

const blogs = [
  {
    slug: "how-to-build-a-workout-routine",
    image: "/blog1.png",
    category: "Training",
    title: "How To Build A Workout Routine That Actually Works",
    description:
      "Learn how to structure your weekly workouts, stay consistent, and make every session count.",
    date: "Sep 02, 2026",
  },
  {
    slug: "simple-guide-to-eating-for-better-results",
    image: "/blog2.png",
    category: "Nutrition & Diet",
    title: "The Simple Guide To Eating For Better Results",
    description:
      "Understand the basics of nutrition and how the right food choices can support your fitness goals.",
    date: "Aug 28, 2026",
  },
  {
    slug: "why-consistency-beats-motivation",
    image: "/blog3.png",
    category: "Workout Training",
    title: "Why Consistency Beats Motivation Every Time",
    description:
      "Motivation comes and goes. Discover how building the right habits can keep you moving forward.",
    date: "Aug 21, 2026",
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0d0e] px-6 text-center text-white">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
            404
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase">
            Blog Not Found
          </h1>

          <a
            href="/#blog"
            className="mt-6 inline-flex bg-lime-300 px-6 py-3 text-xs font-bold uppercase text-black"
          >
            Back To Blog
          </a>
        </div>
      </main>
    );
  }

  return <BlogPost {...blog} />;
}