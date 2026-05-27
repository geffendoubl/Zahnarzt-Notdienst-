'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LiveClock } from './LiveClock'
import { PHONE_HREF, PHONE } from '@/lib/openingHours'

const links = [
  { href: '/', label: 'Start' },
  { href: '/notfall', label: 'Notfall' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/zeiten', label: 'Öffnungszeiten' },
  { href: '/bewertungen', label: 'Bewertungen' },
  { href: '/termin', label: 'Termin' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky z-40 w-full"
      style={{
        top: '2.75rem',
        background: 'rgba(8, 8, 16, 0.92)',
        borderBottom: '1px solid rgba(26, 237, 255, 0.1)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        height: '4rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 no-underline"
          style={{ textDecoration: 'none' }}
        >
          <svg width="20" height="28" viewBox="0 0 120 260" fill="none" aria-hidden="true">
            <path
              d="M26 22 C20 10,26 2,34 4 C40 6,45 14,50 12 C55 10,60 2,67 4 C74 6,79 14,84 12 C89 10,95 4,100 8 C106 12,107 22,105 34 C103 50,100 66,97 80 C95 88,93 95,91 102 C89 110,88 118,88 126 C88 136,89 148,89 158 C89 170,87 182,85 192 C83 200,81 208,79 214 C78 219,75 222,72 220 C69 218,67 211,66 202 C65 192,64 178,64 164 C64 152,63 142,62 136 C61 142,60 152,60 164 C60 178,59 192,58 202 C57 211,55 218,52 220 C49 222,46 219,45 214 C43 208,41 200,39 192 C37 182,35 170,35 158 C35 148,36 136,36 126 C36 118,35 110,33 102 C31 95,29 88,27 80 C24 66,21 50,19 34 C17 22,20 12,26 22 Z"
              stroke="#1aedff"
              strokeWidth="5"
              fill="none"
            />
          </svg>
          <div>
            <div
              className="text-base leading-none tracking-widest"
              style={{ fontFamily: 'var(--font-headline)', color: '#f5f0e8' }}
            >
              ZAHNARZT{' '}
              <span style={{ color: '#1aedff' }}>NOTDIENST</span>
            </div>
            <div
              className="text-[0.6rem] tracking-[0.2em] mt-0.5"
              style={{ fontFamily: 'var(--font-mono)', color: '#6b6b8a' }}
            >
              <strong style={{ color: '#f5f0e8' }}>PRIVAT</strong> · 1020 WIEN
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors no-underline"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                color: pathname === href ? '#1aedff' : 'rgba(245,240,232,0.55)',
              }}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            className="hidden md:block text-sm tabular-nums"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(245,240,232,0.4)', fontSize: '0.75rem' }}
          >
            <LiveClock />
          </span>
          <a
            href={PHONE_HREF}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded text-sm font-bold transition-all hover:scale-105 active:scale-95 no-underline"
            style={{
              background: '#ff3e2f',
              color: '#fff',
              fontFamily: 'var(--font-headline)',
              letterSpacing: '0.06em',
              fontSize: '0.8rem',
              textDecoration: 'none',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            ANRUFEN
          </a>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
            style={{ color: '#f5f0e8' }}
          >
            <div className="w-5 h-px bg-current mb-1.5 transition-all" style={{ transform: open ? 'rotate(45deg) translate(0, 4px)' : '' }} />
            <div className="w-5 h-px bg-current mb-1.5 transition-all" style={{ opacity: open ? 0 : 1 }} />
            <div className="w-5 h-px bg-current transition-all" style={{ transform: open ? 'rotate(-45deg) translate(0, -4px)' : '' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 animate-slide-down"
          style={{
            background: 'rgba(8,8,16,0.98)',
            borderBottom: '1px solid rgba(26,237,255,0.1)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-3 px-3 rounded transition-colors no-underline"
                style={{
                  fontFamily: 'var(--font-headline)',
                  letterSpacing: '0.1em',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  color: pathname === href ? '#1aedff' : '#f5f0e8',
                  background: pathname === href ? 'rgba(26,237,255,0.06)' : 'transparent',
                }}
                onClick={() => setOpen(false)}
              >
                {label.toUpperCase()}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-3 py-3 px-3 rounded text-center font-bold no-underline"
              style={{
                background: '#ff3e2f',
                color: '#fff',
                fontFamily: 'var(--font-headline)',
                letterSpacing: '0.1em',
                fontSize: '1.1rem',
                textDecoration: 'none',
              }}
            >
              JETZT ANRUFEN
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
