"use client";

import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#080b09] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOWS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute -right-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-lime-300/[0.07] blur-[150px]" />

      <div className="pointer-events-none absolute -left-52 top-[35%] h-[500px] w-[500px] rounded-full bg-lime-400/[0.045] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[550px] w-[700px] -translate-x-1/2 rounded-full bg-lime-300/[0.035] blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(163,230,53,0.035)_0%,transparent_65%)]" />

      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-300" />

              <span className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.25em] text-lime-300 sm:text-xs">
                Get Started
              </span>
            </div>

            <h2 className="font-[var(--font-space-grotesk)] text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[64px]">
              Get In
              <br />
              <span className="text-lime-300">
                Touch.
              </span>
            </h2>

            <div className="mt-6 h-[2px] w-16 bg-lime-300" />

            <p className="mt-6 max-w-[430px] font-[var(--font-space-grotesk)] text-sm leading-6 text-white/50 sm:text-[15px] sm:leading-7">
              Ready to start your fitness journey? Get in touch with
              SP Fitness and take the first step toward becoming
              stronger, healthier, and more confident.
            </p>

            {/* ================================================= */}
            {/* CONTACT DETAILS */}
            {/* ================================================= */}

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
          {/* FORM */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden border border-white/[0.12] bg-[radial-gradient(circle_at_15%_15%,rgba(163,230,53,0.10),transparent_40%),#101411] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
          >

            {/* Form glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-lime-300/[0.06] blur-[80px]" />

            <div className="relative">

              <p className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.22em] text-lime-300">
                Start Your Journey
              </p>

              <h3 className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-black uppercase tracking-[-0.02em] text-white sm:text-3xl">
                Send Us A Message
              </h3>

              <form className="mt-8">

                {/* NAME */}

                <div className="border-b border-white/20">

                  <label
                    htmlFor="contact-name"
                    className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-9 w-full bg-transparent font-[var(--font-space-grotesk)] text-sm text-white outline-none placeholder:text-white/25"
                  />

                </div>

                {/* EMAIL */}

                <div className="mt-6 border-b border-white/20">

                  <label
                    htmlFor="contact-email"
                    className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                  >
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-9 w-full bg-transparent font-[var(--font-space-grotesk)] text-sm text-white outline-none placeholder:text-white/25"
                  />

                </div>

                {/* PHONE */}

                <div className="mt-6 border-b border-white/20">

                  <label
                    htmlFor="contact-phone"
                    className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-9 w-full bg-transparent font-[var(--font-space-grotesk)] text-sm text-white outline-none placeholder:text-white/25"
                  />

                </div>

                {/* MESSAGE */}

                <div className="mt-6 border-b border-white/20">

                  <label
                    htmlFor="contact-message"
                    className="block pb-2 font-[var(--font-space-grotesk)] text-[11px] font-semibold text-white/70"
                  >
                    Write Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none bg-transparent pt-1 font-[var(--font-space-grotesk)] text-sm leading-6 text-white outline-none placeholder:text-white/25"
                  />

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="group mt-8 inline-flex h-12 w-full items-center justify-center gap-3 bg-lime-300 px-7 font-[var(--font-space-grotesk)] text-xs font-black uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-lime-200 hover:shadow-[0_0_30px_rgba(163,230,53,0.18)] sm:w-auto"
                >
                  Send Message

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom accent */}

      <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-lime-300" />
    </section>
  );
}   