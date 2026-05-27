'use client'

import { useState } from 'react'
import { PHONE_HREF, PHONE, WHATSAPP_HREF, ADDRESS } from '@/lib/openingHours'

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
      setSubmitted(true)
    } catch {
      alert('Fehler beim Senden. Bitte rufen Sie uns direkt an.')
    }
    setSubmitting(false)
  }

  return (
    <div style={{ background: '#ffffff' }}>
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative">
          <span className="section-number" aria-hidden="true">06</span>
          <span
            className="text-xs tracking-[0.25em] mb-3 block"
            style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8' }}
          >
            KONTAKT
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
            DIREKT<br />
            <span style={{ color: '#1d4ed8' }}>ERREICHBAR.</span>
          </h1>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-4 p-5 rounded-sm no-underline transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: '#dc2626', color: '#fff', textDecoration: 'none', boxShadow: '0 4px 30px rgba(220,38,38,0.2)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', letterSpacing: '0.05em' }}>ANRUFEN</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.85 }}>{PHONE}</div>
              </div>
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-sm no-underline transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.25)', color: '#1d4ed8', textDecoration: 'none' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1d4ed8" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', letterSpacing: '0.05em' }}>WHATSAPP</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.7 }}>Nachricht hinterlassen</div>
              </div>
            </a>

            <div
              className="p-5 rounded-sm card-dark"
            >
              <div className="text-xs mb-3 tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: '#9ca3af' }}>ADRESSE</div>
              <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                Darwingasse 37<br />1020 Wien (Leopoldstadt)<br />
                <br />
                <span style={{ color: '#9ca3af', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                  U2 Taborstraße, 5 Min. Fußweg
                </span>
              </p>
              <a
                href={`https://maps.google.com/?q=Darwingasse+37,+1020+Wien`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs no-underline"
                style={{ color: '#1d4ed8', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em' }}
              >
                IN MAPS ÖFFNEN →
              </a>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div
              className="p-8 rounded-sm flex items-center justify-center"
              style={{ background: 'rgba(22,163,74,0.06)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', color: '#16a34a', letterSpacing: '0.05em' }}>
                  NACHRICHT GESENDET
                </div>
                <p className="text-sm mt-3" style={{ color: '#4b5563' }}>
                  Wir melden uns so schnell wie möglich. Bei Notfall bitte direkt anrufen.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-dark rounded-sm p-6 flex flex-col gap-4">
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.3rem', letterSpacing: '0.08em', color: '#0f172a' }}>
                NACHRICHT SENDEN
              </h2>
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
              <textarea
                name="nachricht"
                placeholder="Ihre Nachricht (optional)"
                rows={3}
                className="px-3 py-3 rounded-sm text-sm resize-none"
              />
              <input name="rueckruf" type="text" placeholder="Bevorzugte Rückrufzeit" className="px-3 py-3 rounded-sm text-sm" />
              <label className="flex items-start gap-2.5 cursor-pointer">
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
                className="py-3.5 rounded-sm font-bold transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
                style={{ background: '#dc2626', color: '#fff', fontFamily: 'var(--font-headline)', fontSize: '1rem', letterSpacing: '0.08em' }}
              >
                {submitting ? 'WIRD GESENDET...' : 'ABSENDEN'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
