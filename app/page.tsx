import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import Reveal from "@/app/components/Reveal"
import {
  aiTrainers,
  faqs,
  featureCards,
  heroMetrics,
  mealCategories,
  processSteps,
  subscriptionPlans,
} from "@/app/data/site"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Balanz",
  url: "https://balanz.com",
  email: "hello@balanz.com",
  telephone: "+91 98765 43210",
  description:
    "Balanz delivers premium personalized meal plans and nutrition subscriptions designed for sustainable healthy living.",
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="page-shell">
        <section className="hero-section">
          <div className="mx-auto grid w-full max-w-7xl gap-16 px-3.5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="eyebrow">Personalized meal planning for modern routines</p>
                <h1 className="hero-title">
                  Healthy eating,
                  <br />
                  without the
                  <br />
                  constant effort.
                </h1>
                <p className="hero-copy">
                  Balanz builds calm, structured nutrition around the way you actually live, with chef-made menus,
                  flexible subscriptions, and a service experience that feels considered from end to end.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link className="primary-button" href="/subscription">
                  Start your plan
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link className="secondary-button" href="/meal-plans">
                  View meal plans
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Reveal className="hero-card-grid" delay={0.08}>
              <div className="hero-card-grid">
                <article className="hero-surface hero-surface-primary">
                  <p className="eyebrow">This week, resolved</p>
                  <div className="mt-5 space-y-5">
                    {[
                      ["Mon-Wed", "Higher-protein lunches for office days"],
                      ["Thu-Fri", "Lighter dinners for late evenings"],
                      ["Weekend", "Flexible meals with snack coverage"],
                    ].map(([label, text]) => (
                      <div key={label} className="hero-divider-row flex items-start justify-between gap-4 py-4 first:border-t-0 first:pt-0">
                        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-off-white/42">{label}</span>
                        <span className="max-w-xs text-right text-sm leading-7 text-off-white/78">{text}</span>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="hero-surface">
                    <p className="text-sm uppercase tracking-[0.22em] text-off-white/42">Member control</p>
                    <p className="mt-4 text-3xl font-semibold text-white">Quick swaps, not complexity</p>
                    <p className="mt-3 text-sm leading-7 text-off-white/70">
                      Adjust meals, timing, and volume without rebuilding your routine from scratch.
                    </p>
                  </article>
                  <article className="hero-surface">
                    <p className="text-sm uppercase tracking-[0.22em] text-off-white/42">Support</p>
                    <p className="mt-4 text-3xl font-semibold text-white">Human nutrition guidance</p>
                    <p className="mt-3 text-sm leading-7 text-off-white/70">
                      Practical feedback and plan adjustments that feel tailored, not automated.
                    </p>
                  </article>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="content-section light-band">
          <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
            <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Why Balanz</p>
                <h2 className="section-title mt-4">A more disciplined experience, not a louder one.</h2>
              </div>
              <p className="section-copy">
                The product is designed around clarity. Fewer decisions. Better defaults. Stronger structure. Every
                screen and every service detail should make eating well feel more manageable, not more performative.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {featureCards.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.06}>
                  <article className="feature-card">
                    <span className="feature-icon">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-2xl font-semibold leading-tight text-[#111111]">{feature.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#111111]/72">{feature.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section light-band">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-3.5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2 className="section-title mt-4">Built to slot into a real week.</h2>
              <p className="section-copy mt-4">
                The flow is intentionally simple. We learn your routine, shape a plan around it, and refine it as your
                life changes.
              </p>
            </Reveal>

            <div className="grid gap-5">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <article className="timeline-card">
                    <span className="feature-icon">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111111]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#111111]/72">{step.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section light-band">
          <div className="mx-auto w-full max-w-7xl px-0 sm:px-6 lg:px-8">
            <Reveal className="grid gap-10 px-3.5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-0">
              <div>
                <p className="eyebrow">Support Specialists Available 24/7</p>
                <h2 className="section-title mt-4">A full support layer built directly into the Balanz experience.</h2>
              </div>
              <p className="section-copy">
                Instead of one generic assistant, Balanz can feel like a specialized team. Each specialist handles a distinct
                part of the experience so support stays practical, immediate, and actually relevant to your routine.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-4 px-1.5 sm:gap-6 sm:px-0 xl:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <article className="feature-card specialist-card flex h-full flex-col justify-between bg-[#111111] text-white">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.22em] text-white/46">Lead specialist</p>
                        <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-[0.96] tracking-[-0.05em] text-white">
                          {aiTrainers[0].role}
                        </h3>
                      </div>
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-neon-green text-2xl font-semibold text-black">
                        {aiTrainers[0].name[0]}
                      </span>
                    </div>
                    <p className="mt-8 max-w-xl text-base leading-8 text-white/72">{aiTrainers[0].description}</p>
                  </div>

                  <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                    {["Adaptive weekly planning", "Always-on support", "Goal-aware recommendations"].map((item) => (
                      <div key={item}>
                        <p className="text-sm uppercase tracking-[0.18em] text-white/42">Included</p>
                        <p className="mt-2 text-sm leading-7 text-white/78">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <div className="grid gap-4">
                {aiTrainers.slice(1).map((trainer, index) => (
                  <Reveal key={trainer.name} delay={index * 0.06}>
                    <article className="feature-card specialist-card bg-white/80">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-base font-semibold text-neon-green">
                          {trainer.name[0]}
                        </span>
                        <div>
                          <p className="text-sm uppercase tracking-[0.18em] text-[#111111]/46">{trainer.name}</p>
                          <h3 className="mt-1 text-xl font-semibold text-[#111111]">{trainer.role}</h3>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-[#111111]/72">{trainer.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section dark-band">
          <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
            <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="eyebrow">Meal categories</p>
                <h2 className="section-title mt-4 text-white">Useful structure, not generic menu filler.</h2>
              </div>
              <p className="section-copy dark-copy">
                Each category is designed with a job in mind: easier mornings, steadier workdays, and fewer energy dips
                between meals.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {mealCategories.map((category, index) => (
                <Reveal key={category.category} delay={index * 0.06}>
                  <article className="rounded-[1.75rem] border border-white/10 p-5 sm:p-6">
                    <p className="eyebrow">{category.category}</p>
                    <p className="mt-4 text-sm leading-7 text-off-white/72">{category.description}</p>
                    <ul className="mt-6 space-y-3">
                      {category.meals.map((meal) => (
                        <li key={meal} className="flex items-start gap-3 text-sm leading-7 text-off-white/84">
                          <span className="mt-2 h-2 w-2 rounded-full bg-neon-green" />
                          <span>{meal}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section light-band">
          <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
            <Reveal className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="eyebrow">Subscriptions</p>
                <h2 className="section-title mt-4">Choose the level of structure you need right now.</h2>
                <p className="section-copy mt-4">
                  Start with a lighter commitment or move straight into a fully supported weekly rhythm.
                </p>
              </div>

              <div className="grid gap-4">
                {subscriptionPlans.map((plan) => (
                  <article key={plan.name} className="divider-row grid gap-4 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-semibold text-[#111111]">{plan.name}</h3>
                        {plan.featured ? (
                          <span className="rounded-full bg-[#111111] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-green">
                            Popular
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#111111]/72">{plan.summary}</p>
                      <div className="mt-4 grid gap-2 text-sm text-[#111111]/82">
                        {[plan.meals, plan.cadence, plan.support].map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <Check className="h-4 w-4 text-[#111111]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-3xl font-semibold text-[#111111]">{plan.price}</p>
                      <p className="mt-1 text-sm text-[#111111]/58">per month</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="cta-section light-band">
          <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <Reveal className="cta-card text-left">
                <p className="eyebrow">Ready to begin</p>
                <h2 className="section-title mt-4">Build a plan that fits your actual routine.</h2>
                <p className="section-copy mt-4">
                  See pricing, choose your meal volume, and start with a setup that feels manageable from week one.
                </p>
                <div className="mt-8">
                  <Link className="primary-button" href="/subscription">
                    Start your subscription
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>

              <div className="grid gap-4">
                {faqs.map((item, index) => (
                  <Reveal key={item.question} delay={index * 0.06}>
                    <article className="faq-card">
                      <h3 className="text-lg font-semibold text-[#111111]">{item.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#111111]/72">{item.answer}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
