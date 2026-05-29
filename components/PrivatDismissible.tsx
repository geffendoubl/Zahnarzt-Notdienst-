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
        background: '#ffffff',
        border: '1px solid rgba(29,78,216,0.15)',
        boxShadow: '0 8px 32px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06)',
      }}
      role="dialog"
      aria-label="Hinweis Privatordination"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2 py-0.5 rounded font-bold tracking-widest"
            style={{
              background: 'rgba(29,78,216,0.08)',
              color: '#1d4ed8',
              border: '1px solid rgba(29,78,216,0.18)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            PRIVAT
          </span>
          <span className="text-sm font-semibold" style={{ color: '#0f172a' }}>Hinweis</span>
        </div>
        <button
          onClick={dismiss}
          aria-label="Schließen"
          className="transition-colors text-xl leading-none mt-0.5"
          style={{ color: '#9ca3af' }}
        >
          ×
        </button>
      </div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>
        Dies ist eine <strong style={{ color: '#0f172a' }}>Privatordination</strong>.
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
