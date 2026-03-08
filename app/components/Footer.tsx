import Link from "next/link"

import { navigationLinks } from "@/app/data/site"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-off-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-8">
        <div className="max-w-xl space-y-5">
          <span className="pill">Balanz</span>
          <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
            Personalized nutrition with the calm, polish, and consistency people actually stick with.
          </h2>
          <p className="max-w-lg text-sm leading-7 text-off-white/68 sm:text-base">
            Balanced meal plans, flexible subscriptions, and thoughtful guidance for busy lives that still want to eat
            exceptionally well.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-off-white/48">Explore</h3>
          <ul className="mt-5 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-off-white/72 transition-colors hover:text-neon-green" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-off-white/48">Contact</h3>
            <div className="mt-5 space-y-2 text-off-white/72">
              <p>hello@balanz.com</p>
              <p>+91 98765 43210</p>
              <p>12 Orchard Lane, Bengaluru 560001</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-off-white/48">Hours</h3>
            <p className="mt-5 text-off-white/72">Monday to Saturday, 9:00 AM to 7:00 PM IST</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-off-white/48 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Balanz. Crafted for healthier routines.</p>
          <p>Built with a cleaner, editorial product-marketing approach.</p>
        </div>
      </div>
    </footer>
  )
}
