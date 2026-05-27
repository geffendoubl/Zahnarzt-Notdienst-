'use client'

import { useEffect, useState } from 'react'
import { ToothSVG } from './ToothSVG'
import { getTodayClose, getNextOpening, isOpenNow, PHONE_HREF, WHATSAPP_HREF } from '@/lib/openingHours'

export function Hero() {
  const [closeTime, setCloseTime] = useState('')
  const [open, setOpen] = useState<boolean | null>(null)
  const [nextOpening, setNextOpening] = useState<{ label: string; time: string } | null>(null)

  useEffect(() => {
    const isOpen = isOpenNow()
    setCloseTime(getTodayClose())
    setOpen(isOpen)
    setNextOpening(getNextOpening())
  }, [])

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: 'calc(100svh - 7.75rem)',
        background: 'linear-gradient(145deg, #f8faff 0%, #ffffff 45%, #f0f5ff 100%)',
        padding: '4rem 1.5rem 3rem',
      }}
    >
      {/* Subtle tooth mark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <ToothSVG className="w-[min(55vw,420px)] h-auto" />
      </div>

      <div className="relative z-10 text-center max-w-4xl w-full mx-auto">

        {/* Location label */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: 'rgba(29,78,216,0.6)',
            marginBottom: '1.1rem',
          }}
        >
          ZAHNARZT NOTDIENST · 1020 WIEN LEOPOLDSTADT
        </div>

        {/* Static headline — immediate, no delay */}
        <h1
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(3.4rem, 9vw, 8.5rem)',
            lineHeight: 0.93,
            letterSpacing: '0.01em',
            color: '#0f172a',
            marginBottom: '1.5rem',
          }}
        >
          WIR SIND<br />
          <span style={{ color: '#dc2626' }}>FÜR SIE DA.</span>
        </h1>

        {/* Live status sub-headline */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 2.5vw, 1.4rem)',
            color: '#374151',
            lineHeight: 1.55,
            marginBottom: '0.7rem',
          }}
        >
          {open === true && closeTime && (
            <>Heute bis <strong style={{ color: '#0f172a', fontWeight: 600 }}>{closeTime} Uhr</strong> geöffnet — rufen Sie jetzt an.</>
          )}
          {open === false && nextOpening && (
            <>Gerade geschlossen. Nächste Öffnung: <strong style={{ color: '#0f172a', fontWeight: 600 }}>{nextOpening.label} ab {nextOpening.time} Uhr.</strong></>
          )}
          {open === null && (
            <>Akute Zahnschmerzen? Wir helfen schnell und unkompliziert.</>
          )}
        </p>
        <p style={{ fontSize: '0.88rem', color: '#9ca3af', marginBottom: '2.2rem' }}>
          Akute Schmerzen · Gebrochene Zähne · Schwellungen · Notfälle aller Art
        </p>

        {/* CTAs — always rendered, no animation gate */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto">
          <a
            href={PHONE_HREF}
            className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded no-underline transition-all hover:brightness-105 active:scale-[0.99]"
            style={{
              background: '#dc2626',
              color: '#ffffff',
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
              letterSpacing: '0.07em',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(220,38,38,0.28)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            JETZT ANRUFEN
          </a>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded no-underline transition-all active:scale-[0.99]"
            style={{
              background: '#ffffff',
              color: '#0f172a',
              border: '1.5px solid rgba(29,78,216,0.18)',
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
              letterSpacing: '0.07em',
              textDecoration: 'none',
              boxShadow: '0 1px 4px rgba(15,23,42,0.06)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WHATSAPP
          </a>
        </div>

        {/* Closed state: callback prompt */}
        {open === false && nextOpening && (
          <div
            className="animate-fade-up"
            style={{
              background: 'rgba(220,38,38,0.04)',
              border: '1px solid rgba(220,38,38,0.15)',
              borderRadius: '6px',
              padding: '0.8rem 1.1rem',
              marginTop: '1.25rem',
              maxWidth: '480px',
              margin: '1.25rem auto 0',
            }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#dc2626', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
              GESCHLOSSEN
            </p>
            <p style={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.5 }}>
              Hinterlassen Sie Ihre Nummer —{' '}
              <a href="/termin" style={{ color: '#1d4ed8', fontWeight: 500, textDecoration: 'none' }}>
                wir rufen beim nächsten Öffnen zurück
              </a>.
            </p>
          </div>
        )}

        {/* Trust bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem 1.1rem',
            marginTop: '1.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: '#9ca3af',
          }}
        >
          <span>⭐ 4.5 von 5</span>
          <span aria-hidden>·</span>
          <span>55 Bewertungen</span>
          <span aria-hidden>·</span>
          <span>Privatordination</span>
          <span aria-hidden>·</span>
          <span>1020 Wien</span>
        </div>
      </div>

      {/* Fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #ffffff)' }}
        aria-hidden="true"
      />
    </section>
  )
}
