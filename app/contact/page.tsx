import type { Metadata } from "next"

import ContactForm from "@/app/components/ContactForm"
import Reveal from "@/app/components/Reveal"
import SectionIntro from "@/app/components/SectionIntro"
import { contactMethods } from "@/app/data/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Balanz for meal plan questions, subscription support, onboarding guidance, or partnership enquiries.",
}

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="content-section dark-band pt-24 sm:pt-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-3.5 sm:px-6 lg:items-start lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal className="space-y-6">
            <p className="eyebrow">Contact</p>
            <h1 className="hero-title max-w-4xl text-[clamp(2.8rem,5vw,5rem)]">
              Talk to a team that understands both nutrition and service quality.
            </h1>
            <p className="hero-copy">
              Whether you are comparing plans, navigating dietary requirements, or exploring a partnership, Balanz
              replies with clarity and speed.
            </p>
            <div className="grid gap-4">
              {contactMethods.map((method) => (
                <article key={method.title} className="rounded-[1.5rem] border border-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-off-white/48">{method.title}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{method.detail}</p>
                  <p className="mt-2 text-sm leading-7 text-off-white/70">{method.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="self-start rounded-[1.75rem] bg-[#efede6] p-5 text-[#111111] sm:p-8" delay={0.08}>
            <SectionIntro
              eyebrow="Send A Note"
              title="Tell us what you need."
              description="We’ll point you toward the right plan, answer dietary questions, or help scope the best next step."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
