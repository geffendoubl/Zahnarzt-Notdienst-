'use client'

import { useEffect, useState } from 'react'
import { ToothSVG } from './ToothSVG'
import { getTodayClose, isOpenNow, PHONE_HREF, WHATSAPP_HREF } from '@/lib/openingHours'

const PHRASE = 'ZAHNSCHMERZEN?'

export function Hero() {
  const [chars, setChars] = useState(0)
  const [subVisible, setSubVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [closeTime, setCloseTime] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setCloseTime(getTodayClose())
    setOpen(isOpenNow())

    let i = 0
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setChars(i)
        if (i >= PHRASE.length) {
          clearInterval(interval)
          setTimeout(() => setSubVisible(true), 120)
          setTimeout(() => setCtaVisible(true), 380)
        }
      }, 65)
    }, 200)

    return () => clearTimeout(delay)
  }, [])

  const displayed = PHRASE.slice(0, chars)
  const done = chars >= PHRASE.length

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: 'calc(100svh - 7.75rem)',
        background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(75,142,245,0.07) 0%, transparent 65%), #0d1b2e',
        padding: '4rem 1.5rem 3rem',
      }}
    >
      {/* Tooth — very subtle, just a hint of context */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <ToothSVG className="w-[min(50vw,360px)] h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full mx-auto">

        {/* Small label above headline */}
        <div
          className="mb-4 transition-all duration-500"
          style={{
            opacity: subVisible ? 1 : 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: 'rgba(75,142,245,0.7)',
          }}
        >
          ZAHNARZT NOTDIENST · 1020 WIEN
        </div>

        {/* Headline */}
        <h1
          className="mb-6"
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(3.2rem, 9vw, 8rem)',
            lineHeight: '0.94',
            letterSpacing: '0.01em',
            color: '#eef3ff',
          }}
        >
          {displayed}
          {!done && (
            <span className="animate-blink" style={{ color: '#4b8ef5' }}>|</span>
          )}
        </h1>

        {/* Sub-headline */}
        <div
          className="mb-10 transition-all duration-400"
          style={{ opacity: subVisible ? 1 : 0, transform: subVisible ? 'translateY(0)' : 'translateY(6px)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.05rem, 2.5vw, 1.55rem)',
              color: 'rgba(238,243,255,0.8)',
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            {open
              ? <>Wir sind für Sie da — heute bis{' '}
                  <strong style={{ color: '#eef3ff', fontWeight: 600 }}>{closeTime} Uhr</strong>
                  {' '}geöffnet.
                </>
              : <>Wir sind heute leider geschlossen.{' '}
                  <span style={{ color: 'rgba(238,243,255,0.55)' }}>Schauen Sie auf unsere Öffnungszeiten.</span>
                </>
            }
          </p>
          <p
            className="mt-2.5"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
              color: 'rgba(238,243,255,0.38)',
            }}
          >
            Akute Schmerzen · Gebrochene Zähne · Schwellungen · Notfälle aller Art
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto transition-all duration-500"
          style={{ opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? 'translateY(0)' : 'translateY(12px)' }}
        >
          {/* Primary — call */}
          <a
            href={PHONE_HREF}
            className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded no-underline transition-all hover:brightness-105 active:scale-[0.99]"
            style={{
              background: '#e04747',
              color: '#fff',
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
              letterSpacing: '0.07em',
              textDecoration: 'none',
              boxShadow: '0 2px 16px rgba(224,71,71,0.28)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            JETZT ANRUFEN
          </a>

          {/* Secondary — WhatsApp */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded no-underline transition-all hover:bg-[#1c2e44] active:scale-[0.99]"
            style={{
              background: 'rgba(28,46,68,0.8)',
              color: '#eef3ff',
              border: '1px solid rgba(75,142,245,0.25)',
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
              letterSpacing: '0.07em',
              textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WHATSAPP
          </a>
        </div>

        {/* Trust signals — quiet, not shouting */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 transition-all duration-700"
          style={{
            opacity: ctaVisible ? 0.55 : 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: 'rgba(238,243,255,0.45)',
          }}
        >
          <span>⭐ 4.5 von 5</span>
          <span>·</span>
          <span>55 Bewertungen</span>
          <span>·</span>
          <span>Privatordination</span>
          <span>·</span>
          <span>1020 Wien</span>
        </div>
      </div>

      {/* Gentle bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #0d1b2e)' }}
        aria-hidden="true"
      />
    </section>
  )
}
