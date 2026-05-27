'use client'

import { useEffect, useState } from 'react'
import { HOURS, DAY_NAMES, getViennaDate, isOpenNow, PHONE_HREF } from '@/lib/openingHours'

export default function Zeiten() {
  const [today, setToday] = useState<number | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setToday(getViennaDate().getDay())
    setOpen(isOpenNow())
  }, [])

  const rows = [
    { day: 1, name: 'Montag' },
    { day: 2, name: 'Dienstag' },
    { day: 3, name: 'Mittwoch' },
    { day: 4, name: 'Donnerstag' },
    { day: 5, name: 'Freitag' },
    { day: 6, name: 'Samstag', note: 'Notdienst' },
    { day: 0, name: 'Sonntag' },
  ]

  return (
    <div style={{ background: '#ffffff' }}>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto relative">
          <span className="section-number" aria-hidden="true">04</span>
          <span
            className="text-xs tracking-[0.25em] mb-3 block"
            style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8' }}
          >
            ÖFFNUNGSZEITEN
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.92,
              color: '#0f172a',
              letterSpacing: '0.01em',
            }}
          >
            TÄGLICH<br />
            <span style={{ color: '#1d4ed8' }}>FÜR SIE DA.</span>
          </h1>

          {today !== null && (
            <div
              className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-sm"
              style={{
                background: open ? 'rgba(22,163,74,0.06)' : 'rgba(220,38,38,0.06)',
                border: `1px solid ${open ? 'rgba(22,163,74,0.25)' : 'rgba(220,38,38,0.2)'}`,
              }}
            >
              <span
                className="animate-dot-pulse text-sm"
                style={{ color: open ? '#16a34a' : '#dc2626' }}
              >
                ●
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: open ? '#16a34a' : '#dc2626',
                  letterSpacing: '0.1em',
                }}
              >
                {open
                  ? `JETZT GEÖFFNET — bis ${HOURS[today].close} Uhr`
                  : `GESCHLOSSEN — öffnet ${HOURS[today].open} Uhr`}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Hours table */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <div
            className="card-dark rounded-sm overflow-hidden"
          >
            {rows.map(({ day, name, note }, i) => {
              const { open: o, close: c } = HOURS[day]
              const isToday = today === day
              const isSat = day === 6

              return (
                <div
                  key={day}
                  className="flex items-center justify-between px-5 py-4"
                  style={{
                    borderBottom: i < rows.length - 1 ? '1px solid rgba(29,78,216,0.06)' : undefined,
                    background: isToday ? 'rgba(29,78,216,0.05)' : 'transparent',
                  }}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span
                        className="animate-dot-pulse"
                        style={{ fontSize: '0.5rem', color: open ? '#16a34a' : '#dc2626' }}
                      >
                        ●
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: isToday ? 'var(--font-headline)' : 'var(--font-body)',
                        fontSize: isToday ? '1.15rem' : '0.95rem',
                        color: isToday ? '#1d4ed8' : '#374151',
                        letterSpacing: isToday ? '0.06em' : 'normal',
                        fontWeight: isToday ? undefined : 400,
                      }}
                    >
                      {isToday ? name.toUpperCase() : name}
                    </span>
                    {note && (
                      <span
                        className="text-xs px-1.5 py-0.5 rounded"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(220,38,38,0.08)',
                          color: '#dc2626',
                          border: '1px solid rgba(220,38,38,0.15)',
                        }}
                      >
                        {note}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: isSat ? '#dc2626' : isToday ? '#0f172a' : '#6b7280',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {o} – {c}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Saturday callout */}
          <div
            className="mt-5 p-4 rounded-sm"
            style={{
              background: 'rgba(220,38,38,0.06)',
              border: '1px solid rgba(220,38,38,0.15)',
            }}
          >
            <div
              className="text-xs font-bold mb-1.5"
              style={{ fontFamily: 'var(--font-headline)', color: '#dc2626', letterSpacing: '0.12em' }}
            >
              SAMSTAG NOTDIENST
            </div>
            <p className="text-sm" style={{ color: '#4b5563' }}>
              Samstags sind wir ausschließlich von <strong style={{ color: '#dc2626' }}>20:00 bis 22:30 Uhr</strong> für echte Notfälle geöffnet.
              Kein regulärer Terminbetrieb — nur Akutversorgung.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 px-4 sm:px-6" style={{ background: '#f4f7ff' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="mb-8"
            style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0f172a', letterSpacing: '0.05em' }}
          >
            WIE SIE UNS FINDEN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div
                className="p-4 rounded-sm card-dark"
              >
                <div
                  className="text-xs mb-2 tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)', color: '#9ca3af' }}
                >
                  ADRESSE
                </div>
                <p style={{ color: '#0f172a' }}>
                  Darwingasse 37<br />1020 Wien (Leopoldstadt)
                </p>
              </div>
              <div className="p-4 rounded-sm card-dark">
                <div
                  className="text-xs mb-2 tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)', color: '#9ca3af' }}
                >
                  ÖFFENTLICHE VERKEHRSMITTEL
                </div>
                <ul className="flex flex-col gap-1.5 text-sm" style={{ color: '#374151' }}>
                  <li>🟠 U2 Taborstraße — ca. 5 Min. Fußweg</li>
                  <li>🚌 Linie 5, 31 — Darwingasse</li>
                </ul>
              </div>
              <a
                href={PHONE_HREF}
                className="py-3.5 px-5 rounded-sm text-center no-underline font-bold transition-all hover:brightness-110"
                style={{ background: '#dc2626', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-headline)', fontSize: '1.2rem', letterSpacing: '0.06em' }}
              >
                JETZT ANRUFEN
              </a>
            </div>
            <div
              className="rounded-sm overflow-hidden flex items-center justify-center"
              style={{ background: '#f4f7ff', border: '1px solid rgba(29,78,216,0.12)', minHeight: 220 }}
            >
              <div className="text-center p-6">
                <p className="text-sm mb-3" style={{ color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>
                  KARTE LADEN (COOKIE-ZUSTIMMUNG ERFORDERLICH)
                </p>
                <a
                  href="https://maps.google.com/?q=Darwingasse+37,+1020+Wien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 rounded-sm no-underline text-sm transition-all hover:brightness-110"
                  style={{ background: 'rgba(29,78,216,0.08)', color: '#1d4ed8', textDecoration: 'none', border: '1px solid rgba(29,78,216,0.22)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
                >
                  IN GOOGLE MAPS ÖFFNEN →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
