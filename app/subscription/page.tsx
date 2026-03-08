import type { Metadata } from "next"

import Reveal from "@/app/components/Reveal"
import SectionIntro from "@/app/components/SectionIntro"
import SubscriptionPlans from "@/app/components/SubscriptionPlans"
import { faqs, planBenefits } from "@/app/data/site"

export const metadata: Metadata = {
  title: "Subscription",
  description:
    "Choose a Balanz subscription plan with flexible delivery, premium nutrition support, and tailored meal volume for your routine.",
}

export default function SubscriptionPage() {
  return (
    <div className="page-shell">
      <section className="content-section dark-band pt-24 sm:pt-28">
        <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Subscriptions</p>
            <h1 className="hero-title mt-4 max-w-5xl text-[clamp(2.8rem,5vw,5rem)]">
              Plans that scale from light support to a fully structured weekly rhythm.
            </h1>
            <p className="hero-copy mt-6">
              Each Balanz tier is built to feel composed and practical, with cleaner logistics, better defaults, and
              room to adapt over time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="content-section light-band">
        <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
          <SubscriptionPlans />
        </div>
      </section>

      <section className="content-section light-band">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-3.5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal className="glass-panel">
            <SectionIntro
              eyebrow="Included"
              title="Every subscription includes the fundamentals that make the service feel complete."
              description="The value is not just in the meals. It is in the smooth, well-resolved experience around them."
            />
            <div className="mt-8 grid gap-3">
              {planBenefits.map((benefit) => (
                <article key={benefit.title} className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-4 sm:px-5">
                  <h2 className="text-lg font-semibold text-[#111111]">{benefit.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#111111]/72">{benefit.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="glass-panel divide-y divide-black/10 overflow-hidden p-0">
              {faqs.map((faq) => (
                <article key={faq.question} className="px-5 py-6 sm:px-8 sm:py-8">
                  <h2 className="text-lg font-semibold text-[#111111]">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#111111]/72">{faq.answer}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
