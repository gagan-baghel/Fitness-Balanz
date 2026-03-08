"use client"

import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { navigationLinks } from "@/app/data/site"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-[1.75rem] border border-white/12 bg-[#0a0a0a] px-4 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.36)] sm:gap-8 sm:px-6 lg:px-8"
      >
        <Link className="group inline-flex items-center gap-4" href="/">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f5ef] p-2 transition-transform duration-300 group-hover:scale-[1.03]">
            <Image src="/logo.png" alt="Balanz logo" width={32} height={32} className="h-8 w-8 object-contain" priority />
          </span>
          <span className="block text-xl font-semibold tracking-tight text-white">Balanz</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b px-0 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "border-neon-green text-white"
                    : "border-transparent text-white/72 hover:text-white",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:block">
          <Link className="primary-button" href="/subscription">
            Start a plan
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-neon-green/40 hover:text-neon-green md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            className="mx-auto mt-2 max-w-7xl rounded-[1.5rem] border border-white/12 bg-[#0a0a0a] px-4 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.36)] md:hidden sm:px-5 sm:py-5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-base font-medium transition-colors duration-200",
                      isActive
                        ? "border-neon-green bg-neon-green text-pure-black"
                        : "border-white/10 text-off-white/78 hover:border-white/30 hover:text-white",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link className="primary-button mt-2 justify-center" href="/subscription">
                Start a plan
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
