'use client'

import { useEffect, useState } from 'react'
import {
  isOpenNow,
  isSaturdayEmergency,
  getTodayClose,
  getNextOpening,
  formatCountdown,
} from '@/lib/openingHours'

export function StatusBanner() {
  const [state, setState] = useState<{
    open: boolean
    satEmergency: boolean
    closeTime: string
    next: ReturnType<typeof getNextOpening>
    countdown: string
  } | null>(null)

  useEffect(() => {
    const update = () => {
      const next = getNextOpening()
      setState({
        open: isOpenNow(),
        satEmergency: isSaturdayEmergency(),
        closeTime: getTodayClose(),
        next,
        countdown: formatCountdown(next.minutesUntil),
      })
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  const base: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    padding: '0.55rem 1rem',
    minHeight: '2.75rem',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  }

  if (!state) return <div style={{ ...base, background: 'rgba(255,255,255,0.97)', borderBottom: '1px solid rgba(29,78,216,0.08)' }} />

  const { open, satEmergency, closeTime, next, countdown } = state

  if (satEmergency) {
    return (
      <div style={{ ...base, background: 'rgba(220,38,38,0.05)', borderBottom: '1px solid rgba(220,38,38,0.2)' }}>
        <span className="animate-dot-pulse" style={{ fontSize: '0.5rem', color: '#16a34a' }}>●</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', letterSpacing: '0.1em', color: '#0f172a' }}>
          Samstag Notdienst — geöffnet bis{' '}
          <strong style={{ color: '#dc2626' }}>22:30 Uhr</strong>
        </span>
      </div>
    )
  }

  if (open) {
    return (
      <div style={{ ...base, background: 'rgba(22,163,74,0.06)', borderBottom: '1px solid rgba(22,163,74,0.22)' }}>
        <span className="animate-dot-pulse" style={{ fontSize: '0.55rem', color: '#16a34a' }}>●</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.1em', color: '#16a34a', fontWeight: 600 }}>
          Jetzt geöffnet —{' '}
          <strong style={{ color: '#0f172a', fontWeight: 700 }}>bis {closeTime} Uhr</strong>
        </span>
      </div>
    )
  }

  return (
    <div style={{ ...base, background: 'rgba(255,255,255,0.97)', borderBottom: '1px solid rgba(29,78,216,0.08)' }}>
      <span style={{ fontSize: '0.5rem', color: '#d1d5db' }}>●</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.08em', color: '#6b7280' }}>
        Geschlossen — nächste Öffnung:{' '}
        <strong style={{ color: '#0f172a' }}>{next.label} ab {next.time} Uhr</strong>
        <span style={{ color: 'rgba(29,78,216,0.55)', marginLeft: '0.5rem' }}>· in {countdown}</span>
      </span>
    </div>
  )
}
