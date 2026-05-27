import type { Metadata } from 'next'
import Link from 'next/link'
import { PHONE_HREF } from '@/lib/openingHours'

export const metadata: Metadata = {
  title: 'Leistungen — Zahnbehandlung Wien Notdienst',
  description:
    'Alle Leistungen der Privatordination: Akutschmerzbehandlung, Extraktion, provisorische Füllung, Abszess, Kronenreparatur, Zahnunfall. Wien 1020.',
}

const leistungen = [
  {
    icon: '⚡',
    title: 'Akutschmerzbehandlung',
    short: 'Sofortige Schmerzlinderung bei akuten Zahn- und Kieferschmerzen.',
    details: 'Wir ermitteln die Schmerzursache und behandeln akut — ob Pulpitis, Parodontalabszess oder Nervenreizung. Keine Wartezeit auf einen Kassenplatz.',
  },
  {
    icon: '✦',
    title: 'Zahnextraktion',
    short: 'Notfallextraktion, wenn eine Erhaltung nicht mehr möglich ist.',
    details: 'Komplikationslose und chirurgische Extraktionen, auch bei schwierigen Befunden. Inkl. Nachsorge und Wundversorgung.',
  },
  {
    icon: '◈',
    title: 'Provisorische Füllung',
    short: 'Herausgefallene oder defekte Füllung — sofort versorgt.',
    details: 'Vorübergehende Versorgung bei Füllungsausfall, um Schmerzen zu lindern und den Zahn zu schützen, bis eine definitive Füllung möglich ist.',
  },
  {
    icon: '◉',
    title: 'Abszessbehandlung',
    short: 'Entlastung von Abszessen und Behandlung akuter Entzündungen.',
    details: 'Eröffnung und Drainierung dentaler Abszesse, lokale Antibiose bei Bedarf. Schwellungen mit Fieber sind ein Notfall.',
  },
  {
    icon: '◇',
    title: 'Kronenreparatur',
    short: 'Krone oder Brücke ausgefallen — provisorische Wiederbefestigung.',
    details: 'Temporäre Zementierung ausgefallener Kronen und Brücken, bis eine definitive Neuversorgung beim behandelnden Zahnarzt erfolgen kann.',
  },
  {
    icon: '★',
    title: 'Zahnunfall',
    short: 'Ausgeschlagene oder verschobene Zähne nach Trauma.',
    details: 'Replantation ausgeschlagener Zähne (innerhalb 30 Min.), Schienung, Wundversorgung. Jede Minute zählt.',
  },
]

export default function Leistungen() {
  return (
    <div style={{ background: '#0d1b2e' }}>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative">
          <span className="section-number" aria-hidden="true">02</span>
          <span
            className="text-xs tracking-[0.25em] mb-3 block"
            style={{ fontFamily: 'var(--font-mono)', color: '#4b8ef5' }}
          >
            LEISTUNGEN
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.92,
              color: '#eef3ff',
              letterSpacing: '0.01em',
            }}
          >
            WAS WIR<br />
            <span style={{ color: '#4b8ef5' }}>BEHANDELN.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed max-w-lg" style={{ color: 'rgba(238,243,255,0.6)' }}>
            Akutversorgung, keine Wartelisten. Privatordination — Sie zahlen direkt und rechnen mit Ihrer Kasse ab.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leistungen.map((l) => (
              <div
                key={l.title}
                className="card-dark rounded-sm p-6 flex flex-col gap-3 group transition-all hover:border-electric/25"
              >
                <div
                  className="text-2xl transition-transform group-hover:scale-110"
                  style={{ color: '#4b8ef5' }}
                  aria-hidden="true"
                >
                  {l.icon}
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.4rem',
                    letterSpacing: '0.04em',
                    color: '#eef3ff',
                  }}
                >
                  {l.title.toUpperCase()}
                </h2>
                <p className="text-sm font-medium" style={{ color: 'rgba(238,243,255,0.85)' }}>
                  {l.short}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(238,243,255,0.45)' }}>
                  {l.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-electric mx-4 sm:mx-6 max-w-5xl lg:mx-auto" />

      {/* Privat section */}
      <section id="privat" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-10">
            <span
              className="text-xs tracking-[0.25em] mb-3 block"
              style={{ fontFamily: 'var(--font-mono)', color: '#4b8ef5' }}
            >
              WIE FUNKTIONIERT PRIVAT?
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#eef3ff',
                letterSpacing: '0.02em',
              }}
            >
              RÜCKERSTATTUNG<br />DURCH IHRE KASSE
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                q: 'Wie läuft die Bezahlung ab?',
                a: 'Sie zahlen direkt nach der Behandlung vor Ort — bar oder mit Karte. Wir stellen Ihnen sofort eine Honorarnote (Rechnung) aus.',
              },
              {
                q: 'Wie viel erstattet meine Krankenkasse?',
                a: 'ÖGK, BVAEB und SVS erstatten in der Regel 50–80% des jeweiligen Kassentarifs. Der genaue Betrag hängt von der Leistung und Ihrer Kasse ab. Die Rückerstattung deckt nicht unbedingt unsere Privatgebühr vollständig.',
              },
              {
                q: 'Was muss ich einreichen?',
                a: 'Die Honorarnote bei Ihrer Krankenkasse (persönlich, per Post oder online via "Meine ÖGK"). In der Regel erhalten Sie die Rückerstattung innerhalb weniger Wochen.',
              },
              {
                q: 'Gilt das auch für BVAEB und SVS?',
                a: 'Ja. BVAEB (Beamte), SVS (Selbstständige) und ÖGK erstatten alle Wahlarztkosten. Die genauen Tarife variieren — fragen Sie Ihre Kasse.',
              },
              {
                q: 'Warum Privatordination und nicht Kassenpraxis?',
                a: 'Keine Wartelisten, flexible Abendtermine, sofortige Behandlung. Im Notfall ist jede Stunde wichtig.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group border-b"
                style={{ borderColor: 'rgba(75,142,245,0.1)' }}
              >
                <summary
                  className="py-4 cursor-pointer flex items-center justify-between gap-4 list-none select-none"
                  style={{ color: '#eef3ff' }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform group-open:rotate-45"
                    style={{ background: 'rgba(75,142,245,0.08)', color: '#4b8ef5' }}
                  >
                    +
                  </span>
                </summary>
                <div className="pb-4 pr-10">
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(238,243,255,0.6)' }}>
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div
            className="mt-10 p-5 rounded-sm"
            style={{ background: 'rgba(224,71,71,0.07)', border: '1px solid rgba(224,71,71,0.2)' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(238,243,255,0.75)' }}>
              <strong style={{ color: '#eef3ff' }}>Hinweis:</strong> Als Privatordination zahlen Sie direkt vor Ort.
              Ihre Krankenkasse erstattet in der Regel einen Teil der Kosten. Bitte bringen Sie Ihre E-Card mit.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 mt-4 py-2.5 px-5 rounded-sm no-underline font-bold text-sm transition-all hover:brightness-110"
              style={{ background: '#e04747', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-headline)', fontSize: '0.95rem', letterSpacing: '0.06em' }}
            >
              JETZT ANRUFEN
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
