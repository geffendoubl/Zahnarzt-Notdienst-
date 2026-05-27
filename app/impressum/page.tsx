import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum — Zahnarzt Notdienst Wien',
  robots: { index: false },
}

export default function Impressum() {
  return (
    <div style={{ background: '#0d1b2e' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <span className="text-xs tracking-[0.25em] mb-4 block" style={{ fontFamily: 'var(--font-mono)', color: '#4b8ef5' }}>
          RECHTLICHES
        </span>
        <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#eef3ff', letterSpacing: '0.02em', marginBottom: '3rem' }}>
          IMPRESSUM
        </h1>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'rgba(238,243,255,0.7)' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.2rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              ANGABEN GEMÄß § 5 ECG
            </h2>
            <p>
              <strong style={{ color: '#eef3ff' }}>Zahnarzt Notdienst (Privat)</strong><br />
              Darwingasse 37<br />
              1020 Wien<br />
              Österreich
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.2rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              KONTAKT
            </h2>
            <p>
              Telefon: +43 676 844116204<br />
              E-Mail: ordination@zahnarzt-notdienst-wien.at
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.2rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              BERUF UND BERUFSRECHT
            </h2>
            <p>
              Berufsbezeichnung: Zahnarzt/Zahnärztin<br />
              Zuständige Kammer: <a href="https://www.zak.or.at" target="_blank" rel="noopener noreferrer" style={{ color: '#4b8ef5', textDecoration: 'none' }}>Österreichische Zahnärztekammer, Landeszahnärztekammer Wien</a><br />
              Berufsrecht: Zahnärztegesetz (ZÄG), BGBl. I Nr. 126/2005 i.d.g.F.
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.2rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              AUFSICHTSBEHÖRDE
            </h2>
            <p>
              Österreichische Zahnärztekammer<br />
              Kohlmarkt 11/6, 1010 Wien<br />
              <a href="https://www.zak.or.at" target="_blank" rel="noopener noreferrer" style={{ color: '#4b8ef5', textDecoration: 'none' }}>www.zak.or.at</a>
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.2rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              HAFTUNGSAUSSCHLUSS
            </h2>
            <p>
              Die Inhalte dieser Website dienen ausschließlich zur allgemeinen Information und ersetzen keine ärztliche Diagnose oder Behandlung. Bei medizinischen Notfällen wenden Sie sich bitte direkt an uns oder den Notruf 144.
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.2rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              URHEBERRECHT
            </h2>
            <p>
              Alle Inhalte dieser Website (Texte, Grafiken, Code) sind urheberrechtlich geschützt. Eine Verwendung ohne ausdrückliche schriftliche Genehmigung ist nicht gestattet.
            </p>
          </section>

          <p className="text-xs mt-8" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(238,243,255,0.3)' }}>
            Stand: {new Date().getFullYear()} · Wien
          </p>
        </div>
      </div>
    </div>
  )
}
