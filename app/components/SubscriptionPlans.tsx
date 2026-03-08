"use client"

import { Check } from "lucide-react"
import { useState } from "react"

import { subscriptionPlans } from "@/app/data/site"
import { cn } from "@/lib/utils"

export default function SubscriptionPlans() {
  const [selectedPlanName, setSelectedPlanName] = useState(subscriptionPlans[1].name)

  const selectedPlan = subscriptionPlans.find((plan) => plan.name === selectedPlanName) ?? subscriptionPlans[1]

  return (
    <div className="space-y-8">
      <div className="grid gap-6 xl:grid-cols-3">
        {subscriptionPlans.map((plan) => {
          const isSelected = selectedPlanName === plan.name

          return (
            <article
              key={plan.name}
              className={cn("pricing-card", plan.featured && "pricing-card-featured", isSelected && "pricing-card-active")}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[2rem] font-semibold tracking-tight text-[#111111]">{plan.name}</h3>
                    {plan.featured ? (
                      <span className="rounded-full border border-black/10 bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-green">
                        Popular
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-6 text-[#111111]/68">{plan.summary}</p>
                </div>

                <div className="flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-[#111111]">{plan.price}</span>
                  <span className="pb-1 text-sm text-[#111111]/58">/ month</span>
                </div>
              </div>

              <ul className="space-y-3 text-sm leading-7 text-[#111111]/80">
                {[plan.meals, plan.cadence, plan.support, "Access to all meal categories"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-neon-green/14 text-neon-green">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={cn(
                  "secondary-button w-full justify-center",
                  isSelected && "bg-neon-green text-pure-black hover:bg-dark-green hover:text-pure-black",
                )}
                onClick={() => setSelectedPlanName(plan.name)}
              >
                {isSelected ? "Selected" : "Choose plan"}
              </button>
            </article>
          )
        })}
      </div>

      <article className="glass-panel">
        <div className="grid gap-8 xl:grid-cols-[0.75fr_1.25fr] xl:items-start">
          <div className="space-y-5">
            <p className="eyebrow">Checkout</p>
            <div className="space-y-3">
              <h3 className="text-[2.25rem] font-semibold leading-[1] tracking-tight text-[#111111]">
                {selectedPlan.name}
              </h3>
              <p className="text-base leading-8 text-[#111111]/72">
                Complete your details and we’ll tailor delivery cadence, meal timing, and dietary preferences around
                this plan after checkout.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-4 sm:px-5">
                <p className="text-sm uppercase tracking-[0.22em] text-[#111111]/48">Monthly total</p>
                <p className="mt-2 text-3xl font-semibold text-[#111111]">{selectedPlan.price}</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-4 sm:px-5">
                <p className="text-sm uppercase tracking-[0.22em] text-[#111111]/48">Includes</p>
                <p className="mt-2 text-base leading-7 text-[#111111]/76">
                  {selectedPlan.meals}, {selectedPlan.cadence.toLowerCase()}, and {selectedPlan.support.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>

          <form className="grid gap-5 rounded-[1.5rem] border border-black/10 bg-white/60 p-4 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="field-group">
                <label className="field-label" htmlFor="full-name">
                  Full name
                </label>
                <input className="field-input" id="full-name" name="fullName" type="text" autoComplete="name" required />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="email-address">
                  Email address
                </label>
                <input
                  className="field-input"
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="field-group">
                <label className="field-label" htmlFor="phone">
                  Phone
                </label>
                <input className="field-input" id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="city">
                  City
                </label>
                <input className="field-input" id="city" name="city" type="text" autoComplete="address-level2" />
              </div>
            </div>
            <div className="field-group">
              <label className="field-label" htmlFor="notes">
                Dietary notes
              </label>
              <textarea
                className="field-input min-h-32 resize-y"
                id="notes"
                name="notes"
                placeholder="Vegetarian, high-protein, lactose-free, office lunch only..."
              />
            </div>
            <button className="primary-button w-full justify-center sm:w-auto sm:min-w-[18rem]" type="submit">
              Continue to secure checkout
            </button>
          </form>
        </div>
      </article>
    </div>
  )
}
