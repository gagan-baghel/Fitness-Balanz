import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import Reveal from "@/app/components/Reveal"
import SectionIntro from "@/app/components/SectionIntro"
import { mealCategories, planBenefits } from "@/app/data/site"

export const metadata: Metadata = {
  title: "Meal Plans",
  description:
    "Explore Balanz meal categories, premium nutrition benefits, and flexible options for breakfast, lunch, dinner, and snack planning.",
}

export default function MealPlansPage() {
  return (
    <div className="page-shell">
      <section className="content-section dark-band pt-24 sm:pt-28">
        <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Meal Plans</p>
            <h1 className="hero-title mt-4 max-w-5xl text-[clamp(2.8rem,5vw,5rem)]">
              Balanced menus designed to feel useful, satisfying, and easy to repeat.
            </h1>
            <p className="hero-copy mt-6">
              Balanz menus are structured for steadier days and less decision fatigue, without slipping into generic
              wellness clichés or bland health-food routines.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="content-section light-band">
        <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {mealCategories.map((category, index) => (
              <Reveal key={category.category} delay={index * 0.06}>
                <article className="feature-card min-h-full">
                  <p className="eyebrow">{category.category}</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#111111]">{category.category} that stays interesting</h2>
                  <p className="mt-4 text-sm leading-7 text-[#111111]/72">{category.description}</p>
                  <ul className="mt-6 space-y-3">
                    {category.meals.map((meal) => (
                      <li key={meal} className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-[#111111]/84">
                        {meal}
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
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-3.5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {planBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.08}>
              <article className="timeline-card min-h-full">
                <span className="feature-icon">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-[#111111]">{benefit.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#111111]/72">{benefit.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-section light-band">
        <div className="mx-auto w-full max-w-5xl px-3.5 sm:px-6 lg:px-8">
          <Reveal className="cta-card">
            <SectionIntro
              eyebrow="Next Step"
              title="Want a plan built around your routine instead of a generic menu template?"
              description="Choose a subscription and shape it around your dietary preferences, calendar, and weekly meal volume."
              align="center"
            />
            <div className="mt-8 flex justify-center">
              <Link className="primary-button" href="/subscription">
                View subscriptions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
