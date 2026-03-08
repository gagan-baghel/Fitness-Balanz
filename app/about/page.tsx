import type { Metadata } from "next"

import Reveal from "@/app/components/Reveal"
import SectionIntro from "@/app/components/SectionIntro"
import { companyPrinciples } from "@/app/data/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Balanz approaches personalized nutrition with ingredient integrity, practical structure, and premium service design.",
}

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="content-section dark-band pt-24 sm:pt-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <Reveal className="space-y-6">
            <p className="eyebrow">About Balanz</p>
            <h1 className="hero-title max-w-4xl text-[clamp(2.8rem,5vw,5rem)]">A nutrition company designed with more restraint and more care.</h1>
            <p className="hero-copy">
              We believe the best wellness products do not shout for attention. They quietly remove friction, create
              confidence, and keep working in the background. That philosophy shapes our menus, onboarding, delivery
              experience, and the way members interact with the brand over time.
            </p>
          </Reveal>

          <Reveal className="rounded-[1.75rem] border border-white/10 p-7 text-off-white sm:p-8" delay={0.08}>
            <p className="eyebrow">Our Story</p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-off-white/72 sm:text-base">
              <p>
                Balanz began with a simple observation: people rarely struggle because they do not understand healthy
                eating in theory. They struggle because real schedules, real stress, and real trade-offs make
                consistency difficult.
              </p>
              <p>
                We built Balanz to close that gap. The result is a service that blends nutritional rigor, chef-led
                quality, and an interface that feels calm, capable, and easy to trust.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section light-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Principles"
            title="The standards that shape every meal, every interaction, and every design decision."
            description="Balanz is intentionally product-minded. The experience is designed as carefully as the meal plans themselves."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {companyPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06}>
                <article className="feature-card">
                  <span className="feature-icon">
                    <principle.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#111111]">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#111111]/72">{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section light-band">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: "Nutrition expertise",
              body: "Plans are built with macro awareness, ingredient transparency, and room for real-life flexibility.",
            },
            {
              title: "Operational precision",
              body: "Reliable delivery, intuitive plan management, and thoughtful defaults reduce the burden on members.",
            },
            {
              title: "Design discipline",
              body: "From copy tone to spacing and motion, Balanz is shaped to feel calm, premium, and deeply intentional.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="faq-card min-h-full">
                <h2 className="text-xl font-semibold text-[#111111]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#111111]/72">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
