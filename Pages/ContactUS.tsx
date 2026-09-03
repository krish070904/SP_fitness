"use client";

import CTA from "@/components/CTA";
import { motion } from "motion/react";

export default function ContactUS() {
  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative overflow-hidden bg-[#0b0d0f]">
        
        {/* Subtle green glow */}
        <div className="pointer-events-none absolute right-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-lime-300/[0.025] blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-[1200px] items-center px-6 py-28 sm:px-10 sm:py-32 lg:px-12 lg:py-36">

          <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">

            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Heading */}
              <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[58px]">
                Get In Touch
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[390px] text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-6">
                Our platform provides access to a variety of fitness programs
                and is designed to meet your unique needs and preferences. Our
                programs are designed to be customizable, allowing you to
                progress.
              </p>

              {/* Contact Details */}
              <div className="mt-9 space-y-5">

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10.5C20 15.5 12 21 12 21C12 21 4 15.5 4 10.5C4 6.36 7.58 3 12 3C16.42 3 20 6.36 20 10.5Z"
                        stroke="#a3e635"
                        strokeWidth="1.8"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="#a3e635"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>

                  <p className="text-sm font-medium text-white/75">
                    Pune, Maharashtra, India
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 4L8 3L10 8L7.5 9.5C8.7 12.2 10.8 14.3 13.5 15.5L15 13L20 15L19 18C18.7 19.1 17.7 20 16.5 20C9.6 20 4 14.4 4 7.5C4 6.3 4.9 5.3 5 4Z"
                        stroke="#a3e635"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <a
                    href="tel:+919876543210"
                    className="text-sm font-medium text-white/75 transition-colors hover:text-lime-300"
                  >
                    +91 98765 43210
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="#a3e635"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M4 7L12 13L20 7"
                        stroke="#a3e635"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <a
                    href="mailto:info@spfitness.com"
                    className="text-sm font-medium text-white/75 transition-colors hover:text-lime-300"
                  >
                    info@spfitness.com
                  </a>
                </div>

              </div>
            </motion.div>

            {/* ================================================= */}
            {/* RIGHT SIDE - FORM */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden border border-white/15 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.08),transparent_45%),#101411] px-7 py-8 sm:px-8 sm:py-9 lg:px-8 lg:py-8"
            >
              {/* Form Heading */}
              <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-[22px]">
                Send Us A Message
              </h2>

              <form className="mt-7">

                {/* Name */}
                <div className="border-b border-white/20">
                  <label
                    htmlFor="name"
                    className="block pb-2 text-[11px] font-semibold text-white/70"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="h-7 w-full bg-transparent text-sm text-white outline-none"
                  />
                </div>

                {/* Email */}
                <div className="mt-5 border-b border-white/20">
                  <label
                    htmlFor="email"
                    className="block pb-2 text-[11px] font-semibold text-white/70"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-7 w-full bg-transparent text-sm text-white outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="mt-5 border-b border-white/20">
                  <label
                    htmlFor="phone"
                    className="block pb-2 text-[11px] font-semibold text-white/70"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="h-7 w-full bg-transparent text-sm text-white outline-none"
                  />
                </div>

                {/* Message */}
                <div className="mt-5 border-b border-white/20">
                  <label
                    htmlFor="message"
                    className="block pb-2 text-[11px] font-semibold text-white/70"
                  >
                    Write Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full resize-none bg-transparent pt-1 text-sm text-white outline-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group mt-6 inline-flex h-10 items-center gap-3 rounded-full bg-lime-300 px-6 text-xs font-bold text-black transition-all duration-300 hover:bg-lime-200 hover:shadow-[0_0_25px_rgba(163,230,53,0.15)]"
                >
                  Send Message

                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CTA />

    </main>
  );
}