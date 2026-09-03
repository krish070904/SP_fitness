"use client";

import { motion } from "motion/react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    subtitle: "Everything you need to stay active and consistent.",
    price: "₹999",
    period: "/month",
    button: "Start Training",
    popular: false,
    features: [
      "Full gym access",
      "Access to cardio equipment",
      "Access to strength equipment",
      "Locker room access",
      "Basic workout guidance",
    ],
  },
  {
    name: "Standard",
    subtitle: "The perfect balance of training, guidance and results.",
    price: "₹1,499",
    period: "/month",
    button: "Choose Standard",
    popular: true,
    features: [
      "Everything in Basic",
      "Personalized workout plan",
      "Trainer guidance",
      "Monthly progress tracking",
      "Basic nutrition guidance",
      "Priority trainer support",
    ],
  },
  {
    name: "Premium",
    subtitle: "A complete fitness experience built around your goals.",
    price: "₹2,499",
    period: "/month",
    button: "Go Premium",
    popular: false,
    features: [
      "Everything in Standard",
      "Personal training sessions",
      "Personalized diet guidance",
      "Weekly progress tracking",
      "Body composition tracking",
      "Advanced workout planning",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0b0d0e] py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.045] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-lime-300" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
              Membership Plans
            </span>

            <span className="h-2 w-2 rounded-full bg-lime-300" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Choose Your
            <br />
            <span className="text-lime-300">Level.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Simple, transparent membership plans designed to fit your
            training goals and your budget.
          </p>
        </div>

        {/* ================= PRICING CARDS ================= */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`group relative flex flex-col overflow-hidden border p-7 transition-all duration-500 sm:p-8 ${
                plan.popular
                  ? "border-lime-300/70 bg-[#141915]"
                  : "border-white/10 bg-[#101314] hover:border-white/20"
              }`}
            >

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-0 top-0 bg-lime-300 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-black">
                  Most Popular
                </div>
              )}

              {/* Top number */}
              <div className="mb-8 flex items-center justify-between">
                <span
                  className={`text-xs font-bold tracking-[0.2em] ${
                    plan.popular
                      ? "text-lime-300"
                      : "text-white/25"
                  }`}
                >
                  0{index + 1}
                </span>

                <span className="h-px w-10 bg-white/10" />
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                {plan.name}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/45">
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-baseline">
                <span
                  className={`text-4xl font-black tracking-tight sm:text-5xl ${
                    plan.popular
                      ? "text-lime-300"
                      : "text-white"
                  }`}
                >
                  {plan.price}
                </span>

                <span className="ml-2 text-xs font-medium text-white/35">
                  {plan.period}
                </span>
              </div>

              {/* CTA */}
              <Link
  href="/contact"
  className={`group/button mt-8 flex h-12 w-full items-center justify-center gap-3 text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
    plan.popular
      ? "bg-lime-300 text-black hover:bg-lime-200"
      : "border border-white/20 bg-transparent text-white hover:border-lime-300 hover:text-lime-300"
  }`}
>
  {plan.button}

  <span className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
    →
  </span>
</Link>

              {/* Divider */}
              <div className="my-8 h-px bg-white/[0.08]" />

              {/* Features */}
              <div className="flex-1">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Plan Includes
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/65"
                    >
                      <span
                        className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
                          plan.popular
                            ? "bg-lime-300"
                            : "bg-lime-300/70"
                        }`}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent */}
              <div
                className={`mt-8 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                  plan.popular
                    ? "bg-lime-300"
                    : "bg-white/20"
                }`}
              />
            </motion.div>
          ))}
        </div>

        

       

     

        {/* Bottom note */}
        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.15em] text-white/25">
          Membership terms & pricing may vary. Contact SP Fitness for current offers.
        </p>

      </div>
    </section>
  );
}