'use client'

import { useEffect, useState } from 'react'

export function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('de-AT', {
          timeZone: 'Europe/Vienna',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return <span className="opacity-0">00:00:00</span>

  return (
    <span
      className="tabular-nums tracking-widest"
      aria-label="Aktuelle Uhrzeit Wien"
    >
      {time}
    </span>
  )
}
