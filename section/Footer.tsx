import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d0e] font-[var(--font-space-grotesk)] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

        {/* BRAND */}
        <div>
          <Link href="#home" className="inline-flex items-center">
            <img
              src="/logo.png"
              alt="SP Fitness"
              className="h-8 w-auto object-contain sm:h-9"
            />
          </Link>

          <p className="mt-4 max-w-[300px] text-[11px] leading-[1.6] text-white/55 sm:text-xs">
            Train with purpose. Build your strength. Become the strongest
            version of yourself.
          </p>
        </div>

        {/* SOCIAL */}
        <div className="mt-5">
          <p className="mb-3 text-sm font-bold text-white sm:text-xs">
            Follow Us:
          </p>

          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-white/25 transition hover:border-lime-300"
            >
              <img
                src="/insta.png"
                alt="Instagram"
                className="h-3.5 w-3.5 object-contain"
              />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-white/25 transition hover:border-lime-300"
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className="h-3.5 w-3.5 object-contain"
              />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-white/25 transition hover:border-lime-300"
            >
              <img
                src="/YT.png"
                alt="YouTube"
                className="h-3.5 w-3.5 object-contain"
              />
            </a>
          </div>
        </div>

        {/* MOBILE LINK COLUMNS */}
        <div className="mt-8 grid grid-cols-2 gap-8 lg:hidden">

          {/* MAIN PAGES */}
          <div>
            <h3 className="text-base font-bold text-white">
              Main Pages
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="#home"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                About Us
              </Link>

              <Link
                href="#services"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Services
              </Link>

              <Link
                href="#gallery"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Gallery
              </Link>

              <Link
                href="#pricing"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* MORE PAGES */}
          <div>
            <h3 className="text-base font-bold text-white">
              More Pages
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="#testimonials"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Testimonials
              </Link>

              <Link
                href="#blog"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Blog
              </Link>

              <Link
                href="#pricing"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Join Now
              </Link>

              <Link
                href="/contact"
                className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* UTILITY PAGES */}
        <div className="mt-8 lg:hidden">
          <h3 className="text-base font-bold text-white">
            Utility Pages
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#"
              className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
            >
              Style Guide
            </Link>

            <Link
              href="#"
              className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
            >
              Licenses
            </Link>

            <Link
              href="#"
              className="text-sm font-semibold text-white/60 transition hover:text-lime-300"
            >
              Changelog
            </Link>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:mt-10">
          <div>
            <h3 className="text-sm font-semibold">Main Pages</h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="#home" className="text-xs text-white/55 hover:text-lime-300">Home</Link>
              <Link href="/about" className="text-xs text-white/55 hover:text-lime-300">About Us</Link>
              <Link href="#services" className="text-xs text-white/55 hover:text-lime-300">Services</Link>
              <Link href="#gallery" className="text-xs text-white/55 hover:text-lime-300">Gallery</Link>
              <Link href="#pricing" className="text-xs text-white/55 hover:text-lime-300">Pricing</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="#testimonials" className="text-xs text-white/55 hover:text-lime-300">Testimonials</Link>
              <Link href="#blog" className="text-xs text-white/55 hover:text-lime-300">Blog</Link>
              <Link href="#pricing" className="text-xs text-white/55 hover:text-lime-300">Join Now</Link>
              <Link href="/contact" className="text-xs text-white/55 hover:text-lime-300">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Get In Touch</h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="tel:+919876543210" className="text-xs text-white/55 hover:text-lime-300">
                +91 98765 43210
              </a>

              <a href="mailto:info@spfitness.com" className="text-xs text-white/55 hover:text-lime-300">
                info@spfitness.com
              </a>

              <p className="text-xs leading-5 text-white/55">
                Pune, Maharashtra
                <br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 border-t border-white/15 pt-4 sm:mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs font-semibold text-white/50">
  © 2026 SP Fitness. All rights reserved.
</p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-xs font-semibold text-white/50 hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="text-[10px] text-white/45 hover:text-white sm:text-[11px]"
              >
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}