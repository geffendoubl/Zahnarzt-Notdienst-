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
    background: 'rgba(13,27,46,0.97)',
    borderBottom: '1px solid rgba(75,142,245,0.12)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  }

  if (!state) return <div style={{ ...base, position: 'fixed' }} />

  const { open, satEmergency, closeTime, next, countdown } = state

  if (satEmergency) {
    return (
      <div style={{ ...base, borderBottom: '1px solid rgba(224,71,71,0.2)' }}>
        <span className="animate-dot-pulse" style={{ fontSize: '0.5rem', color: '#22c55e' }}>●</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em', color: '#eef3ff' }}>
          Samstag Notdienst — geöffnet bis{' '}
          <strong style={{ color: '#e04747' }}>22:30 Uhr</strong>
        </span>
      </div>
    )
  }

  if (open) {
    return (
      <div style={base}>
        <span className="animate-dot-pulse" style={{ fontSize: '0.5rem', color: '#22c55e' }}>●</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(238,243,255,0.75)' }}>
          Jetzt geöffnet —{' '}
          <strong style={{ color: '#eef3ff' }}>bis {closeTime} Uhr</strong>
        </span>
      </div>
    )
  }

  return (
    <div style={base}>
      <span style={{ fontSize: '0.5rem', color: 'rgba(238,243,255,0.3)' }}>●</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(238,243,255,0.5)' }}>
        Geschlossen — nächste Öffnung:{' '}
        <strong style={{ color: 'rgba(238,243,255,0.8)' }}>{next.label} ab {next.time} Uhr</strong>
        <span style={{ color: 'rgba(75,142,245,0.6)', marginLeft: '0.5rem' }}>· in {countdown}</span>
      </span>
    </div>
  )
}
