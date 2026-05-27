'use client'

import { useState } from 'react'
import { PHONE_HREF } from '@/lib/openingHours'

export function QuickContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
      setSubmitted(true)
    } catch {
      alert('Fehler beim Senden. Bitte rufen Sie uns direkt an.')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div
        style={{
          background: 'rgba(22,163,74,0.06)',
          border: '1px solid rgba(22,163,74,0.2)',
          borderRadius: '4px',
          padding: '1.5rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '1.3rem',
            color: '#16a34a',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem',
          }}
        >
          NACHRICHT GESENDET
        </div>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.5 }}>
          Wir melden uns beim nächsten Öffnen. Bei akuten Beschwerden:{' '}
          <a href={PHONE_HREF} style={{ color: '#dc2626', textDecoration: 'none', fontWeight: 500 }}>
            +43 676 844116204
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="col-span-2 sm:col-span-1 px-3 py-2.5 rounded-sm text-sm"
        />
        <input
          name="telefon"
          type="tel"
          placeholder="Telefon"
          required
          className="col-span-2 sm:col-span-1 px-3 py-2.5 rounded-sm text-sm"
        />
      </div>
      <select name="anliegen" required className="px-3 py-2.5 rounded-sm text-sm">
        <option value="">Anliegen auswählen...</option>
        <option value="schmerzen">Akute Schmerzen</option>
        <option value="zahn">Gebrochener Zahn</option>
        <option value="schwellung">Schwellung</option>
        <option value="fuellung">Ausgefallene Füllung</option>
        <option value="sonstiges">Sonstiges</option>
      </select>
      <input
        name="rueckruf"
        type="text"
        placeholder="Bevorzugte Rückrufzeit (z.B. Mo 10–12)"
        className="px-3 py-2.5 rounded-sm text-sm"
      />
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
        className="mt-1 py-3 px-5 rounded-sm font-bold text-sm transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
        style={{
          background: '#dc2626',
          color: '#ffffff',
          fontFamily: 'var(--font-headline)',
          fontSize: '1rem',
          letterSpacing: '0.08em',
        }}
      >
        {submitting ? 'WIRD GESENDET...' : 'NACHRICHT ABSENDEN'}
      </button>
    </form>
  )
}
