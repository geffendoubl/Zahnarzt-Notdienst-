import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import Link from 'next/link'
import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/openingHours'
import { QuickContactForm } from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'Zahnarzt Notdienst Wien | Heute bis 21 Uhr geöffnet',
  description:
    'Akute Zahnschmerzen in Wien? Wir sind für Sie da — täglich geöffnet. Privatordination in 1020 Wien Leopoldstadt. Jetzt anrufen: +43 676 844116204',
}

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'Akutschmerz',
    desc: 'Sofortige Schmerzlinderung — keine Wartezeit auf einen Kassentermin.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Extraktion',
    desc: 'Notfallextraktion und chirurgische Eingriffe bei akutem Befund.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17L4.655 7.773A2 2 0 014 6.386V4.5a.5.5 0 01.5-.5h1.886a2 2 0 011.387.573l7.773 6.765" />
      </svg>
    ),
    title: 'Provisorische Füllung',
    desc: 'Versorgung gebrochener oder verlorener Füllungen & Kronen.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Abszess & Schwellung',
    desc: 'Behandlung dentaler Abszesse und akuter Schwellungen.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services strip */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ background: 'rgba(255,255,255,0.97)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-12">
            <span className="section-number" aria-hidden="true">01</span>
            <span
              className="text-xs tracking-[0.25em] mb-3 block"
              style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8' }}
            >
              LEISTUNGEN
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                color: '#0f172a',
                letterSpacing: '0.02em',
              }}
            >
              WAS WIR BEHANDELN
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-dark rounded-sm p-6 transition-all duration-200 hover:border-electric/30 group"
              >
                <div
                  className="mb-4 group-hover:text-electric transition-colors"
                  style={{ color: 'rgba(29,78,216,0.5)' }}
                >
                  {s.icon}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.35rem',
                    letterSpacing: '0.05em',
                    color: '#0f172a',
                  }}
                >
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm no-underline transition-colors"
              style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8', textDecoration: 'none', fontSize: '0.75rem', letterSpacing: '0.1em' }}
            >
              ALLE LEISTUNGEN →
            </Link>
          </div>
        </div>
      </section>

      {/* Privat section */}
      <section
        className="py-16 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: '#f4f7ff' }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative mb-8">
            <span className="section-number" aria-hidden="true">02</span>
            <span
              className="text-xs tracking-[0.25em] mb-3 block"
              style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8' }}
            >
              PRIVATORDINATION
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                color: '#0f172a',
                letterSpacing: '0.02em',
              }}
            >
              SIE ZAHLEN — KASSE ERSTATTET
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              ['01', 'Sie zahlen direkt', 'Bezahlung vor Ort nach der Behandlung. Wir stellen eine Honorarnote aus.'],
              ['02', 'Honorarnote einreichen', 'Schicken Sie die Rechnung an Ihre Krankenkasse (ÖGK, BVAEB, SVS etc.)'],
              ['03', 'Rückerstattung', 'Ihre Kasse erstattet in der Regel 50–80% des Kassentarifs zurück.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4">
                <div
                  className="shrink-0 text-3xl leading-none"
                  style={{ fontFamily: 'var(--font-headline)', color: 'rgba(29,78,216,0.22)' }}
                >
                  {num}
                </div>
                <div>
                  <h3
                    className="mb-1.5"
                    style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', letterSpacing: '0.05em', color: '#0f172a' }}
                  >
                    {title.toUpperCase()}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-sm p-4 flex gap-3 items-start"
            style={{ background: 'rgba(29,78,216,0.05)', border: '1px solid rgba(29,78,216,0.15)' }}
          >
            <span style={{ color: '#1d4ed8', fontSize: '1.2rem' }}>ℹ</span>
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Als Privatordination zahlen Sie direkt vor Ort. Ihre Krankenkasse erstattet in der Regel einen Teil der Kosten. Mehr Infos unter{' '}
              <Link href="/leistungen#privat" style={{ color: '#1d4ed8', textDecoration: 'none' }}>
                Wie funktioniert Privat?
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Contact quick section */}
      <section className="py-16 px-4 sm:px-6 bg-noise-dark">
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-12">
            <span className="section-number" aria-hidden="true">03</span>
            <span
              className="text-xs tracking-[0.25em] mb-3 block"
              style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8' }}
            >
              KONTAKT
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                color: '#0f172a',
                letterSpacing: '0.02em',
              }}
            >
              DIREKT ERREICHBAR
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
                  <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', letterSpacing: '0.05em' }}>
                    JETZT ANRUFEN
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.85 }}>
                    +43 676 844116204
                  </div>
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
                  <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', letterSpacing: '0.05em' }}>
                    WHATSAPP
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.7 }}>
                    Nachricht hinterlassen
                  </div>
                </div>
              </a>
            </div>

            <div
              className="card-dark rounded-sm p-6"
            >
              <h3
                className="mb-4"
                style={{ fontFamily: 'var(--font-headline)', fontSize: '1.3rem', letterSpacing: '0.08em', color: '#0f172a' }}
              >
                SCHNELLNACHRICHT
              </h3>
              <p className="text-xs mb-5" style={{ fontFamily: 'var(--font-mono)', color: '#9ca3af' }}>
                Außerhalb der Öffnungszeiten — wir melden uns beim nächsten Öffnen.
              </p>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
