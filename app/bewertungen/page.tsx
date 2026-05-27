import type { Metadata } from 'next'
import { PHONE_HREF } from '@/lib/openingHours'

export const metadata: Metadata = {
  title: 'Bewertungen — Zahnarzt Notdienst Wien ⭐ 4.5',
  description:
    'Was unsere Patienten sagen. 4.5 Sterne aus 55 Google-Bewertungen. Zahnarzt Notdienst Privatordination Wien 1020.',
}

const reviews = [
  {
    name: 'Michael K.',
    rating: 5,
    date: 'Nov 2024',
    text: 'Sonntagabend, akute Zahnschmerzen — ich wusste nicht wohin. Hier wurde ich sofort aufgenommen und schnell und freundlich behandelt. Absolut empfehlenswert.',
  },
  {
    name: 'Sarah M.',
    rating: 5,
    date: 'Okt 2024',
    text: 'Meine Krone ist am Freitagabend herausgefallen. Innerhalb einer Stunde war alles wieder in Ordnung. Sehr kompetent und die Preise waren fair.',
  },
  {
    name: 'Thomas B.',
    rating: 4,
    date: 'Sep 2024',
    text: 'Guter Notfalldienst. Kurze Wartezeit, der Arzt hat sich Zeit genommen zu erklären. Als Privatordination natürlich teurer, aber dafür sofort verfügbar.',
  },
  {
    name: 'Anna L.',
    rating: 5,
    date: 'Sep 2024',
    text: 'Perfekter Service um 21 Uhr! Hatte einen Abszess, der sofort behandelt wurde. Die Praxis ist modern und sehr sauber. Sehr zu empfehlen.',
  },
  {
    name: 'David R.',
    rating: 5,
    date: 'Aug 2024',
    text: 'Mein Kind hat sich einen Zahn ausgeschlagen. Wurde sofort behandelt und alles ruhig erklärt. Kinder werden hier wirklich gut betreut.',
  },
  {
    name: 'Julia H.',
    rating: 4,
    date: 'Jul 2024',
    text: 'Sehr zufrieden. Hatte Montag früh extreme Zahnschmerzen — um 10 Uhr schon beim Arzt, um 11 Uhr behandelt. Das Privatsystem funktioniert hier gut.',
  },
  {
    name: 'Klaus W.',
    rating: 5,
    date: 'Jun 2024',
    text: 'Absolut kompetent. Donnerstagabend nach 20 Uhr noch behandelt. Keine Geheimnistuerei bei Preisen — alles transparent erklärt.',
  },
  {
    name: 'Maria S.',
    rating: 5,
    date: 'Mai 2024',
    text: 'Endlich ein Notdienst, der auch abends auf hat! Füllung ausgefallen, innerhalb von 2 Stunden provisorisch versorgt. Sehr nettes Personal.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= count ? '#f59e0b' : 'rgba(15,23,42,0.12)'} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Bewertungen() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative">
          <span className="section-number" aria-hidden="true">05</span>
          <span
            className="text-xs tracking-[0.25em] mb-3 block"
            style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8' }}
          >
            BEWERTUNGEN
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
            WAS PATIENTEN<br />
            <span style={{ color: '#1d4ed8' }}>SAGEN.</span>
          </h1>

          {/* Rating badge */}
          <div className="mt-8 flex items-center gap-5 flex-wrap">
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-sm glow-electric-sm"
              style={{
                background: 'rgba(29,78,216,0.05)',
                border: '1px solid rgba(29,78,216,0.18)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: '#0f172a',
                }}
              >
                4.5
              </span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4].map((i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="rgba(15,23,42,0.12)" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" />
                  </svg>
                </div>
                <div
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: '#6b7280' }}
                >
                  55 GOOGLE-BEWERTUNGEN
                </div>
              </div>
            </div>

            <a
              href="https://g.page/r/zahnarzt-notdienst-wien/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm no-underline transition-all hover:brightness-110"
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#1d4ed8',
                textDecoration: 'none',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
              }}
            >
              BEWERTUNG SCHREIBEN →
            </a>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="card-dark rounded-sm p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium" style={{ color: '#0f172a' }}>{r.name}</div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ fontFamily: 'var(--font-mono)', color: '#9ca3af' }}
                    >
                      {r.date}
                    </div>
                  </div>
                  <Stars count={r.rating} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                  „{r.text}"
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-sm text-center"
            style={{ background: '#f4f7ff', border: '1px solid rgba(29,78,216,0.1)' }}
          >
            <p className="text-sm mb-4" style={{ color: '#6b7280' }}>
              Sie waren Patient und möchten eine Bewertung hinterlassen?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://g.page/r/zahnarzt-notdienst-wien/review"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-6 rounded-sm no-underline text-sm font-bold transition-all hover:brightness-110"
                style={{ background: '#1d4ed8', color: '#ffffff', textDecoration: 'none', fontFamily: 'var(--font-headline)', letterSpacing: '0.06em' }}
              >
                GOOGLE BEWERTUNG SCHREIBEN
              </a>
              <a
                href={PHONE_HREF}
                className="py-2.5 px-6 rounded-sm no-underline text-sm font-bold transition-all hover:brightness-110"
                style={{ background: '#dc2626', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-headline)', letterSpacing: '0.06em' }}
              >
                TERMIN BUCHEN
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
