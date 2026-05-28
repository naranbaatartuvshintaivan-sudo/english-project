'use client'
import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import WobbleText from './WobbleText'

const navLinks = [
  { label: 'Тухай', href: '#about' },
  { label: 'Бүлгүүд', href: '#chapters' },
  { label: 'Зохиолч', href: '#author' },
]

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-ink/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Student Ebook"
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, i) => (
            <Fragment key={link.href}>
              {i > 0 && (
                <span className="text-ink/20 select-none text-xs leading-none">·</span>
              )}
              <NavLink
                label={link.label}
                href={link.href}
                active={activeSection === link.href.slice(1)}
              />
            </Fragment>
          ))}
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={() => scrollTo('#chapters')}
            whileHover={{ rotate: 10, backgroundColor: 'rgba(0,0,0,0.05)' }}
            transition={{ duration: 0.2 }}
            className="p-2 text-ink hover:text-accent rounded-full transition-colors"
            aria-label="Номыг унших"
          >
            <BookIcon />
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Цэс нээх"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md mt-3 rounded-2xl px-6 py-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="block w-full text-left font-dm-sans text-ink py-3 border-b border-line last:border-0 hover:text-accent transition-colors"
                onClick={() => {
                  scrollTo(link.href)
                  setMenuOpen(false)
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <motion.button
      onClick={() => scrollTo(href)}
      className={`font-dm-sans text-sm relative cursor-pointer transition-colors duration-200 ${
        active ? 'text-ink font-semibold' : 'text-ink/60'
      }`}
      initial="initial"
      whileHover="hover"
      variants={{ initial: { letterSpacing: '0em' }, hover: { letterSpacing: '0.05em' } }}
      transition={{ duration: 0.2 }}
    >
      <WobbleText text={label} />
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-ink"
        variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ transformOrigin: 'left', width: '100%' }}
      />
    </motion.button>
  )
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  )
}
