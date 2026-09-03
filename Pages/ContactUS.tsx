"use client";

import CTA from "@/components/CTA";
import { motion } from "motion/react";

export default function ContactUS() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b09] text-white">

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative overflow-hidden bg-[#080b09]">

        {/* ================= GREEN BACKGROUND GLOW ================= */}

        {/* Top right glow */}
        <div className="pointer-events-none absolute -right-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-lime-300/[0.07] blur-[150px]" />

        {/* Left middle glow */}
        <div className="pointer-events-none absolute -left-52 top-[35%] h-[500px] w-[500px] rounded-full bg-lime-400/[0.045] blur-[150px]" />

        {/* Bottom center glow */}
        <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[550px] w-[700px] -translate-x-1/2 rounded-full bg-lime-300/[0.035] blur-[160px]" />

        {/* Subtle center radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(163,230,53,0.035)_0%,transparent_65%)]" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1200px] items-center px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-36">

          <div className="grid w-full grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">

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
              className="min-w-0"
            >

              {/* Heading */}
              <h1 className="font-[var(--font-space-grotesk)] text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]">
                Get In Touch
              </h1>

              {/* Green line */}
              <div className="mt-5 h-[2px] w-16 bg-lime-300 sm:mt-6" />

              {/* Description */}
              <p className="mt-6 max-w-[430px] font-[var(--font-space-grotesk)] text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
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

                  <p className="font-[var(--font-space-grotesk)] text-sm font-medium text-white/75">
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
                    className="font-[var(--font-space-grotesk)] text-sm font-medium text-white/75 transition-colors hover:text-lime-300"
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
                    className="font-[var(--font-space-grotesk)] text-sm font-medium text-white/75 transition-colors hover:text-lime-300"
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
              className="relative min-w-0 overflow-hidden border border-white/[0.12] bg-[radial-gradient(circle_at_15%_15%,rgba(163,230,53,0.10),transparent_40%),#101411] px-6 py-8 sm:px-8 sm:py-9 lg:px-9 lg:py-9"
            >

              {/* Form glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-lime-300/[0.06] blur-[80px]" />

              {/* Form content */}
              <div className="relative">

                {/* Form Heading */}
                <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.02em] sm:text-[25px]">
                  Send Us A Message
                </h2>

                <form className="mt-7">

                  {/* Name */}
                  <div className="border-b border-white/20">
                    <label
                      htmlFor="name"
                      className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="h-8 w-full bg-transparent font-[var(--font-space-grotesk)] text-sm text-white outline-none placeholder:text-white/30"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="mt-5 border-b border-white/20">
                    <label
                      htmlFor="email"
                      className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                    >
                      Your Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="h-8 w-full bg-transparent font-[var(--font-space-grotesk)] text-sm text-white outline-none placeholder:text-white/30"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mt-5 border-b border-white/20">
                    <label
                      htmlFor="phone"
                      className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="h-8 w-full bg-transparent font-[var(--font-space-grotesk)] text-sm text-white outline-none placeholder:text-white/30"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-5 border-b border-white/20">
                    <label
                      htmlFor="message"
                      className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                    >
                      Write Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full resize-none bg-transparent pt-1 font-[var(--font-space-grotesk)] text-sm text-white outline-none placeholder:text-white/30"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="group mt-7 inline-flex h-11 w-full items-center justify-center gap-3 rounded-full bg-lime-300 px-6 font-[var(--font-space-grotesk)] text-xs font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-200 hover:shadow-[0_0_30px_rgba(163,230,53,0.18)] sm:w-auto"
                  >
                    Send Message

                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CTA />

    </main>
  );
}