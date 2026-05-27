import type { Metadata } from 'next'
import Link from 'next/link'
import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/openingHours'

export const metadata: Metadata = {
  title: 'Zahnnotfall Wien — Was tun bei akuten Zahnschmerzen?',
  description:
    'Sofortmaßnahmen bei Zahnnotfällen. Was tun vor dem Anruf? Was mitbringen? Schmerzskala. Zahnarzt Notdienst Wien 1020 — täglich geöffnet.',
}

const emergencies = [
  {
    level: 'SOFORT',
    color: '#dc2626',
    title: 'Hochnotfall',
    cases: [
      'Starke, anhaltende Zahnschmerzen',
      'Gesichtsschwellung oder Kieferschwellung',
      'Zahn ausgeschlagen (Trauma)',
      'Blutung, die nicht aufhört',
      'Abszess mit Fieber',
    ],
    action: 'Sofort anrufen oder WhatsApp schreiben.',
  },
  {
    level: 'BALD',
    color: '#f59e0b',
    title: 'Dringend',
    cases: [
      'Krone oder Brücke ausgefallen',
      'Füllung herausgefallen',
      'Zahnschmerzen bei Kälte/Wärme',
      'Druckschmerz beim Beißen',
      'Zahlfleischblutung',
    ],
    action: 'Innerhalb des Tages behandeln lassen.',
  },
  {
    level: 'PLANBAR',
    color: '#1d4ed8',
    title: 'Weniger dringend',
    cases: [
      'Leichte Empfindlichkeit',
      'Lose Zahnprothese',
      'Kosmetische Beschädigungen',
      'Regelmäßige Kontrolle',
    ],
    action: 'Termin vereinbaren.',
  },
]

const firstAid = [
  {
    title: 'Zahn ausgeschlagen?',
    steps: [
      'Zahn an der Krone anfassen — NICHT an der Wurzel',
      'Kurz unter fließend Wasser abspülen (nicht schrubben)',
      'In Zahnrettungsbox, Milch oder Wangentasche transportieren',
      'Innerhalb von 30 Minuten zum Zahnarzt — jede Minute zählt',
    ],
  },
  {
    title: 'Starke Schmerzen?',
    steps: [
      'Ibuprofen 400mg oder Paracetamol nehmen (Packungsbeilage beachten)',
      'Kühlen — von außen, niemals direkt auf den Zahn',
      'Keine Wärme — verstärkt Entzündungen',
      'Anrufen — wir finden eine Lösung',
    ],
  },
  {
    title: 'Schwellung?',
    steps: [
      'Kühlen mit Kühlkissen (niemals Eis direkt auf die Haut)',
      'Ibuprofen als Schmerzmittel und Entzündungshemmer',
      'Starke Schwellung mit Fieber = umgehend behandeln lassen',
      'Nicht drücken oder massieren',
    ],
  },
]

export default function Notfall() {
  return (
    <div
      style={{
        background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(224,71,71,0.05) 0%, transparent 60%), #ffffff',
      }}
    >
      {/* Header */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <span className="section-number" aria-hidden="true">!</span>
            <span
              className="text-xs tracking-[0.25em] mb-3 block"
              style={{ fontFamily: 'var(--font-mono)', color: '#dc2626' }}
            >
              NOTFALLHILFE
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                lineHeight: 0.92,
                color: '#0f172a',
                letterSpacing: '0.01em',
              }}
            >
              ZAHNNOTFALL?<br />
              <span style={{ color: '#dc2626' }}>WIR HELFEN.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed max-w-xl" style={{ color: '#4b5563' }}>
              Keine Panik. Hier finden Sie Sofortmaßnahmen, was Sie mitbringen sollten, und wie Sie uns am schnellsten erreichen.
            </p>
          </div>

          {/* Emergency CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-lg">
            <a
              href={PHONE_HREF}
              className="flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-sm no-underline font-bold transition-all hover:brightness-110"
              style={{ background: '#dc2626', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-headline)', fontSize: '1.35rem', letterSpacing: '0.06em' }}
            >
              JETZT ANRUFEN
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-sm no-underline font-bold transition-all hover:brightness-110"
              style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.3)', color: '#1d4ed8', textDecoration: 'none', fontFamily: 'var(--font-headline)', fontSize: '1.35rem', letterSpacing: '0.06em' }}
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <div className="divider-electric mx-4 sm:mx-6 max-w-6xl lg:mx-auto" />

      {/* Emergency levels */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="mb-10"
            style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0f172a', letterSpacing: '0.05em' }}
          >
            DRINGLICHKEIT EINSCHÄTZEN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {emergencies.map((e) => (
              <div
                key={e.level}
                className="card-dark rounded-sm p-6"
                style={{ borderTopColor: e.color, borderTopWidth: '3px' }}
              >
                <div
                  className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-3"
                  style={{ background: `${e.color}20`, color: e.color, fontFamily: 'var(--font-mono)' }}
                >
                  {e.level}
                </div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', letterSpacing: '0.05em', color: '#0f172a' }}
                >
                  {e.title.toUpperCase()}
                </h3>
                <ul className="flex flex-col gap-2 mb-5">
                  {e.cases.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm" style={{ color: '#4b5563' }}>
                      <span style={{ color: e.color, marginTop: '3px' }}>▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: e.color }}>
                  {e.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid */}
      <section className="py-16 px-4 sm:px-6" style={{ background: '#f4f7ff' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="mb-10"
            style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0f172a', letterSpacing: '0.05em' }}
          >
            ERSTE HILFE — BEVOR SIE BEI UNS ANKOMMEN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {firstAid.map((item) => (
              <div key={item.title}>
                <h3
                  className="mb-4 pb-3"
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.25rem',
                    letterSpacing: '0.06em',
                    color: '#1d4ed8',
                    borderBottom: '1px solid rgba(29,78,216,0.15)',
                  }}
                >
                  {item.title.toUpperCase()}
                </h3>
                <ol className="flex flex-col gap-3">
                  {item.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#374151' }}>
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{ background: 'rgba(29,78,216,0.08)', color: '#1d4ed8', fontFamily: 'var(--font-mono)' }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="mb-8"
            style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0f172a', letterSpacing: '0.05em' }}
          >
            WAS MITBRINGEN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['E-Card oder Lichtbild-Ausweis', 'Zur Identifikation'],
              ['Krankenversicherungskarte', 'Für die Honorarnote zur Kasse'],
              ['Liste aktueller Medikamente', 'Wichtig für Wechselwirkungen'],
              ['Zahlungsmittel', 'Bar oder Karte — Privatordination'],
              ['Bisherige Röntgenbilder (optional)', 'Falls vorhanden und verfügbar'],
              ['Den ausgeschlagenen Zahn', 'In Milch oder Zahnrettungsbox'],
            ].map(([item, note]) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-sm card-dark"
              >
                <span style={{ color: '#1d4ed8', fontSize: '1.1rem', lineHeight: 1 }}>✓</span>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#0f172a' }}>{item}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>{note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
