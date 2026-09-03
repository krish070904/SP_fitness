"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileLinks = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/#service" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/#blog" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0b0d0f]">
      <div className="mx-auto flex h-[88px] w-full max-w-[1350px] items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* ================= LOGO ================= */}
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="SP Fitness Empire"
            className="h-auto w-[125px] object-contain sm:w-[135px]"
          />
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-8 md:flex lg:gap-9">

          {/* Home */}
          <a
            href="/"
            className="font-[var(--font-space-grotesk)] text-[15px] font-semibold text-white transition-colors duration-200 hover:text-lime-300"
          >
            Home
          </a>

          {/* Service */}
          <a
            href="/#service"
            className="font-[var(--font-space-grotesk)] text-[15px] font-semibold text-white/65 transition-colors duration-200 hover:text-lime-300"
          >
            Service
          </a>

          {/* About */}
          <a
            href="/about"
            className="font-[var(--font-space-grotesk)] text-[15px] font-semibold text-white/65 transition-colors duration-200 hover:text-lime-300"
          >
            About
          </a>

          {/* Gallery */}
          <a
            href="/gallery"
            className="font-[var(--font-space-grotesk)] text-[15px] font-semibold text-white/65 transition-colors duration-200 hover:text-lime-300"
          >
            Gallery
          </a>

          {/* ================= PAGES DROPDOWN ================= */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 font-[var(--font-space-grotesk)] text-[15px] font-semibold text-white/65 transition-colors duration-200 hover:text-lime-300"
            >
              Pages

              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div className="invisible absolute left-1/2 top-full mt-5 w-48 -translate-x-1/2 translate-y-2 rounded-md border border-white/10 bg-[#111416] p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {/* Pricing */}
              <a
                href="/#pricing"
                className="block rounded px-4 py-3 font-[var(--font-space-grotesk)] text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-lime-300"
              >
                Pricing
              </a>

              {/* Blog */}
              <a
                href="/#blog"
                className="block rounded px-4 py-3 font-[var(--font-space-grotesk)] text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-lime-300"
              >
                Blog
              </a>

              {/* Testimonials */}
              <a
                href="/#testimonials"
                className="block rounded px-4 py-3 font-[var(--font-space-grotesk)] text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-lime-300"
              >
                Testimonials
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Contact */}
          <a
            href="/contact"
            className="flex h-[52px] min-w-[148px] items-center justify-center rounded-full border border-white/70 px-6 font-[var(--font-space-grotesk)] text-[15px] font-bold text-lime-300 transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black"
          >
            Contact Us
          </a>
        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-md border border-white/20 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="relative flex h-5 w-6 flex-col justify-between">

            {/* Top */}
            <motion.span
              animate={
                menuOpen
                  ? {
                      rotate: 45,
                      y: 8,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 block h-[2px] w-6 origin-center bg-white"
            />

            {/* Middle */}
            <motion.span
              animate={
                menuOpen
                  ? {
                      opacity: 0,
                      x: 8,
                    }
                  : {
                      opacity: 1,
                      x: 0,
                    }
              }
              transition={{
                duration: 0.2,
              }}
              className="absolute left-0 top-[9px] block h-[2px] w-6 bg-white"
            />

            {/* Bottom */}
            <motion.span
              animate={
                menuOpen
                  ? {
                      rotate: -45,
                      y: -8,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 left-0 block h-[2px] w-6 origin-center bg-white"
            />

          </div>
        </button>
      </div>

      {/* ===================================================== */}
      {/* MOBILE NAVIGATION */}
      {/* ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-white/10 bg-[#0b0d0f] md:hidden"
          >
            <div className="px-6 pb-7 pt-5 sm:px-8">

              {/* Mobile Links */}
              <div className="flex flex-col">

                {mobileLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-white/10 py-4 font-[var(--font-space-grotesk)] text-[15px] font-semibold text-white/80 transition-colors duration-200 hover:text-lime-300"
                  >
                    {link.label}
                  </motion.a>
                ))}

              </div>

              {/* Divider */}
              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.3,
                }}
                className="my-5 h-px origin-left bg-white/10"
              />

              {/* Mobile Contact Button */}
              <motion.a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.44,
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 flex h-12 w-full items-center justify-center rounded-full border border-lime-300 bg-lime-300 font-[var(--font-space-grotesk)] text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200"
              >
                Contact Us
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}