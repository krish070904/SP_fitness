import Navbar from "@/components/Navbar";
import About from "@/section/About";
import Services from "@/section/Services";
import Gallery from "@/section/Gallery";
import Pricing from "@/section/Pricing";
import Testimonials from "@/section/Testimonials";
import Blog from "@/section/Blog";
import CTA from "@/components/CTA";
import Footer from "@/section/Footer";
import TrainerTransformation from "@/section/trainer&transformation";
import ContactSection from "@/section/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-[#111315]">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-black"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/BG.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/20" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-start">
          <div className="mx-auto w-full max-w-7xl px-6 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:pt-52">

            <div className="max-w-2xl">

              {/* Label */}
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-lime-300 sm:text-sm">
                Train. Focus. Transform.
              </p>

              {/* Heading */}
              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Stronger
                <br />
                <span className="text-lime-300">Everyday.</span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Push your limits, build your strength, and become the strongest
                version of yourself.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                {/* ================= JOIN NOW ================= */}
<a
  href="/contact"
  className="group flex h-12 items-center justify-center gap-2 bg-lime-300 px-6 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
>
  Join Now

  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

{/* ================= EXPLORE TRAINING ================= */}
<a
  href="#pricing"
  className="flex h-12 items-center justify-center border border-white/40 bg-white/5 px-6 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-lime-300 hover:text-lime-300"
>
  Explore Training
</a>

              </div>
            </div>

            {/* ================= FEATURES ================= */}
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-5 border-t border-white/20 pt-5 sm:grid-cols-4">

              {/* Strength */}
              <div>
                <p className="text-xl font-bold text-lime-300">
                  01
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                  Strength
                </p>
              </div>

              {/* Cardio */}
              <div>
                <p className="text-xl font-bold text-lime-300">
                  02
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                  Cardio
                </p>
              </div>

              {/* Muscle */}
              <div>
                <p className="text-xl font-bold text-lime-300">
                  03
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                  Muscle
                </p>
              </div>

              {/* Results */}
              <div>
                <p className="text-xl font-bold text-lime-300">
                  04
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                  Results
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <About />

      {/* ================= SERVICES ================= */}
      <Services />

      {/* ================= GALLERY ================= */}
      <Gallery />

      {/* ================= PRICING ================= */}
      <Pricing />
      
      {/* ================= Trainer&Transformation ================= */}
      <TrainerTransformation />


      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />

      {/* ================= BLOG ================= */}
      <Blog />
      
      {/* ================= BLOG ================= */}
      <ContactSection />
      

      {/* ================= CTA ================= */}
      <CTA />

      {/* ================= FOOTER ================= */}
      <Footer />

    </main>
  );
}