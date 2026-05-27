'use client'

import { useEffect, useState } from 'react'
import {
  isOpenNow,
  isSaturdayEmergency,
  getTodayClose,
  getNextOpening,
  formatCountdown,
  getViennaDate,
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

  if (!state) {
    return (
      <div className="h-[2.75rem] bg-slate w-full" />
    )
  }

  const { open, satEmergency, closeTime, next, countdown } = state

  if (satEmergency) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 px-4 py-2.5"
        style={{ background: '#ff3e2f', minHeight: '2.75rem' }}
      >
        <span className="animate-dot-pulse text-lg">🟢</span>
        <span
          className="text-white font-headline tracking-widest text-sm sm:text-base uppercase"
          style={{ fontFamily: 'var(--font-headline)' }}
        >
          SAMSTAG NOTDIENST — 20:00–22:30 Uhr — Jetzt geöffnet
        </span>
      </div>
    )
  }

  if (open) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 px-4 py-2.5"
        style={{ background: 'rgba(8,8,16,0.96)', borderBottom: '1px solid rgba(26,237,255,0.18)', minHeight: '2.75rem' }}
      >
        <span className="animate-dot-pulse" style={{ fontSize: '0.65rem', color: '#22c55e' }}>●</span>
        <span
          className="text-sm sm:text-base tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-headline)', color: '#ff3e2f' }}
        >
          JETZT GEÖFFNET
        </span>
        <span className="text-cream/60 text-xs sm:text-sm font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
          · Heute bis {closeTime} Uhr
        </span>
      </div>
    )
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 px-4 py-2.5"
      style={{ background: 'rgba(8,8,16,0.96)', borderBottom: '1px solid rgba(255,62,47,0.2)', minHeight: '2.75rem' }}
    >
      <span style={{ fontSize: '0.65rem', color: '#ff3e2f' }}>●</span>
      <span
        className="text-sm sm:text-base tracking-widest uppercase text-cream/80"
        style={{ fontFamily: 'var(--font-headline)' }}
      >
        GESCHLOSSEN
      </span>
      <span className="text-cream/50 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
        · Nächste Öffnung: {next.label} {next.time} Uhr
      </span>
      <span
        className="text-xs px-2 py-0.5 rounded"
        style={{
          fontFamily: 'var(--font-mono)',
          background: 'rgba(255,62,47,0.12)',
          color: '#ff3e2f',
          border: '1px solid rgba(255,62,47,0.3)',
        }}
      >
        in {countdown}
      </span>
    </div>
  )
}
