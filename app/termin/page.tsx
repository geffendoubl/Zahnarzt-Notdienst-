'use client'

import type { Metadata } from 'next'
import { useEffect, useState } from 'react'
import { isOpenNow, getTodayClose, PHONE_HREF, WHATSAPP_HREF } from '@/lib/openingHours'

export default function Termin() {
  const [open, setOpen] = useState(false)
  const [closeTime, setCloseTime] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setOpen(isOpenNow())
    setCloseTime(getTodayClose())
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
      setSubmitted(true)
    } catch {
      alert('Fehler beim Senden. Bitte rufen Sie uns direkt an.')
    }
    setSubmitting(false)
  }

  return (
    /* No full nav/footer on this page — pure conversion */
    <div style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(29,78,216,0.03) 0%, transparent 60%), #ffffff', minHeight: '100dvh' }}>
      <div className="max-w-2xl mx-auto px-4 py-14">

        {/* Trust header */}
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.25em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8' }}
          >
            PRIVATORDINATION · 1020 WIEN · TÄGLICH GEÖFFNET
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              lineHeight: 0.9,
              color: '#0f172a',
              letterSpacing: '0.01em',
            }}
          >
            ZAHNARZT<br />
            <span style={{ color: '#dc2626' }}>NOTDIENST</span><br />
            WIEN
          </h1>
          {open && closeTime && (
            <div
              className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm"
              style={{ background: 'rgba(22,163,74,0.06)', border: '1px solid rgba(22,163,74,0.25)' }}
            >
              <span className="animate-dot-pulse" style={{ fontSize: '0.5rem', color: '#16a34a' }}>●</span>
              <span
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#16a34a', letterSpacing: '0.1em' }}
              >
                JETZT GEÖFFNET · bis {closeTime} Uhr
              </span>
            </div>
          )}
        </div>

        {/* Trust signals */}
        <div
          className="grid grid-cols-3 gap-3 mb-10"
        >
          {[
            ['⭐ 4.5', 'Google', '55 Bewertungen'],
            ['🔒 PRIVAT', 'Ordination', 'Direkt bezahlen'],
            ['🕘 TÄGLICH', 'Geöffnet', 'Bis 21:00 Uhr'],
          ].map(([em, label, sub]) => (
            <div
              key={label}
              className="text-center p-3 rounded-sm"
              style={{ background: 'rgba(244,247,255,0.9)', border: '1px solid rgba(29,78,216,0.08)' }}
            >
              <div className="text-sm mb-0.5" style={{ fontFamily: 'var(--font-headline)', color: '#1d4ed8', fontSize: '0.9rem', letterSpacing: '0.06em' }}>{em}</div>
              <div className="text-xs" style={{ color: '#0f172a', fontFamily: 'var(--font-headline)', letterSpacing: '0.08em' }}>{label.toUpperCase()}</div>
              <div className="text-xs mt-0.5" style={{ color: '#9ca3af', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col gap-3 mb-10">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-3 py-5 rounded-sm no-underline font-bold transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: '#dc2626', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-headline)', fontSize: '1.5rem', letterSpacing: '0.08em',  }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            JETZT ANRUFEN
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 rounded-sm no-underline font-bold transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.25)', color: '#1d4ed8', textDecoration: 'none', fontFamily: 'var(--font-headline)', fontSize: '1.35rem', letterSpacing: '0.08em' }}
          >
            WHATSAPP SCHREIBEN
          </a>
        </div>

        <div className="divider-electric mb-10" />

        {/* Privat explainer */}
        <div
          className="p-4 rounded-sm mb-10"
          style={{ background: 'rgba(29,78,216,0.04)', border: '1px solid rgba(29,78,216,0.12)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
            <strong style={{ color: '#0f172a' }}>Privatordination:</strong> Als Privatordination zahlen Sie direkt vor Ort.
            Ihre Krankenkasse (ÖGK, BVAEB, SVS) erstattet in der Regel einen Teil der Kosten zurück.
            Wir stellen Ihnen eine Honorarnote aus.
          </p>
        </div>

        {/* Booking form */}
        {submitted ? (
          <div
            className="p-8 rounded-sm text-center"
            style={{ background: 'rgba(22,163,74,0.06)', border: '1px solid rgba(34,197,94,0.25)' }}
          >
            <div
              className="text-3xl mb-3"
              style={{ fontFamily: 'var(--font-headline)', color: '#16a34a', letterSpacing: '0.05em' }}
            >
              NACHRICHT GESENDET
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
              Wir melden uns so schnell wie möglich. Bei akuten Beschwerden rufen Sie bitte direkt an:{' '}
              <a href={PHONE_HREF} style={{ color: '#dc2626', textDecoration: 'none' }}>+43 676 844116204</a>
            </p>
          </div>
        ) : (
          <div className="card-dark rounded-sm p-6">
            <h2
              className="mb-1"
              style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', letterSpacing: '0.08em', color: '#0f172a' }}
            >
              RÜCKRUF ANFRAGEN
            </h2>
            <p className="text-xs mb-5" style={{ fontFamily: 'var(--font-mono)', color: '#9ca3af' }}>
              Außerhalb der Öffnungszeiten — wir melden uns beim nächsten Öffnen.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-2 gap-3">
                <input name="name" type="text" placeholder="Name" required className="px-3 py-3 rounded-sm text-sm" />
                <input name="telefon" type="tel" placeholder="Telefon" required className="px-3 py-3 rounded-sm text-sm" />
              </div>
              <select name="anliegen" required className="px-3 py-3 rounded-sm text-sm">
                <option value="">Anliegen wählen...</option>
                <option value="schmerzen">Akute Schmerzen</option>
                <option value="zahn">Gebrochener Zahn</option>
                <option value="schwellung">Schwellung</option>
                <option value="fuellung">Ausgefallene Füllung</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
              <input name="rueckruf" type="text" placeholder="Bevorzugte Rückrufzeit (z.B. Mo 10–12 Uhr)" className="px-3 py-3 rounded-sm text-sm" />
              <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                <input type="checkbox" name="dsgvo" required className="mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>
                  Ich stimme der{' '}
                  <a href="/datenschutz" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Datenschutzerklärung</a>{' '}
                  zu. Als Privatordination zahlen Sie direkt vor Ort.
                </span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="py-3.5 rounded-sm font-bold text-sm transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
                style={{ background: '#dc2626', color: '#fff', fontFamily: 'var(--font-headline)', fontSize: '1.05rem', letterSpacing: '0.08em' }}
              >
                {submitting ? 'WIRD GESENDET...' : 'RÜCKRUF ANFRAGEN'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
