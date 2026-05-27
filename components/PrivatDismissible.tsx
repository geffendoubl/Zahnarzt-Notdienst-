'use client'

import { useEffect, useState } from 'react'

export function PrivatDismissible() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('privat-info-dismissed')
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem('privat-info-dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-20 sm:w-[340px] z-40 animate-slide-down rounded-lg p-5"
      style={{
        background: 'rgba(28, 28, 46, 0.97)',
        border: '1px solid rgba(75, 142, 245, 0.3)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 40px rgba(29,78,216,0.06)',
      }}
      role="dialog"
      aria-label="Hinweis Privatordination"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2 py-0.5 rounded font-bold tracking-widest"
            style={{
              background: 'rgba(29,78,216,0.1)',
              color: '#1d4ed8',
              border: '1px solid rgba(29,78,216,0.22)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            PRIVAT
          </span>
          <span className="text-cream text-sm font-semibold">Hinweis</span>
        </div>
        <button
          onClick={dismiss}
          aria-label="Schließen"
          className="text-muted hover:text-cream transition-colors text-xl leading-none mt-0.5"
          style={{ color: '#9ca3af' }}
        >
          ×
        </button>
      </div>
      <p className="text-cream/80 text-sm leading-relaxed mb-4">
        Dies ist eine <strong className="text-cream">Privatordination</strong>.
        Sie zahlen direkt vor Ort und reichen die Honorarnote bei Ihrer
        Krankenkasse ein — schnell, unbürokratisch, ohne Wartezeit.
      </p>
      <a
        href="/leistungen#privat"
        className="text-xs underline underline-offset-2 transition-colors"
        style={{ color: '#1d4ed8' }}
        onClick={dismiss}
      >
        Wie funktioniert die Rückerstattung? →
      </a>
    </div>
  )
}
