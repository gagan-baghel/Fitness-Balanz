"use client"

import { useState, useTransition } from "react"

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    startTransition(() => {
      setFormStatus("Thanks. A Balanz specialist will reply within one business day.")
      event.currentTarget.reset()
    })
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field-group">
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input className="field-input" id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input className="field-input" id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="goal">
          What are you looking for?
        </label>
        <input
          className="field-input"
          id="goal"
          name="goal"
          type="text"
          placeholder="Weight management, family meals, performance nutrition..."
        />
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="field-input min-h-36 resize-y"
          id="message"
          name="message"
          placeholder="Tell us about your routine, dietary preferences, or what you want Balanz to improve."
          required
        />
      </div>

      <button className="primary-button w-full justify-center" type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send enquiry"}
      </button>

      <p aria-live="polite" className="text-sm text-[#111111]/72">
        {formStatus}
      </p>
    </form>
  )
}
