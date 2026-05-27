import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — DSGVO',
  robots: { index: false },
}

export default function Datenschutz() {
  return (
    <div style={{ background: '#0d1b2e' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <span className="text-xs tracking-[0.25em] mb-4 block" style={{ fontFamily: 'var(--font-mono)', color: '#4b8ef5' }}>
          RECHTLICHES
        </span>
        <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#eef3ff', letterSpacing: '0.02em', marginBottom: '3rem' }}>
          DATENSCHUTZ&shy;ERKLÄRUNG
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed" style={{ color: 'rgba(238,243,255,0.7)' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              1. VERANTWORTLICHER
            </h2>
            <p>
              Zahnarzt Notdienst (Privat)<br />
              Darwingasse 37, 1020 Wien<br />
              Telefon: +43 676 844116204<br />
              E-Mail: ordination@zahnarzt-notdienst-wien.at
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              2. RECHTSGRUNDLAGE (DSGVO ART. 6)
            </h2>
            <ul className="space-y-2 list-none">
              {[
                ['Kontaktformular / Rückrufanfragen', 'Art. 6 Abs. 1 lit. a (Einwilligung)'],
                ['Terminvereinbarung', 'Art. 6 Abs. 1 lit. b (Vertragsanbahnung)'],
                ['Buchhaltung / Honorarnoten', 'Art. 6 Abs. 1 lit. c (gesetzliche Verpflichtung)'],
                ['Websitefunktionalität / Sicherheit', 'Art. 6 Abs. 1 lit. f (berechtigtes Interesse)'],
              ].map(([zweck, basis]) => (
                <li key={zweck} className="flex gap-3">
                  <span style={{ color: 'rgba(75,142,245,0.5)' }}>▸</span>
                  <span><strong style={{ color: '#eef3ff' }}>{zweck}:</strong> {basis}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              3. WELCHE DATEN VERARBEITEN WIR?
            </h2>
            <p className="mb-3">Beim Ausfüllen des Kontaktformulars:</p>
            <ul className="space-y-1 list-none">
              {['Name', 'Telefonnummer', 'Anliegen (Art des Zahnproblems)', 'Bevorzugte Rückrufzeit (optional)'].map(d => (
                <li key={d} className="flex gap-3">
                  <span style={{ color: 'rgba(75,142,245,0.5)' }}>·</span>{d}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Wir speichern <strong style={{ color: '#eef3ff' }}>keine Gesundheitsdaten</strong> ohne gesonderte Einwilligung. Das Anliegen (z.B. „akute Schmerzen") wird nicht als Patientenakte gespeichert.
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              4. AUFTRAGSVERARBEITER / DRITTANBIETER
            </h2>
            <ul className="space-y-3 list-none">
              {[
                ['Resend', 'E-Mail-Versand', 'EU-Server (Deutschland)', 'resend.com/legal/privacy-policy'],
                ['Plausible Analytics', 'Cookielose Websiteanalyse', 'EU-Server (Deutschland)', 'plausible.io/privacy'],
                ['Cal.com (optional)', 'Terminbuchung', 'EU-konform', 'cal.com/privacy'],
              ].map(([name, zweck, server, _]) => (
                <li key={name} className="flex gap-3">
                  <span style={{ color: 'rgba(75,142,245,0.5)' }}>▸</span>
                  <span><strong style={{ color: '#eef3ff' }}>{name}</strong> — {zweck} ({server})</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              5. ANALYTICS
            </h2>
            <p>
              Diese Website nutzt <strong style={{ color: '#eef3ff' }}>Plausible Analytics</strong> — eine cookielose, DSGVO-konforme Alternative zu Google Analytics. Es werden keine personenbezogenen Daten übertragen, kein Cookie gesetzt, kein Geräteprofil erstellt. Alle Daten werden auf EU-Servern in Deutschland gespeichert.
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              6. IHRE RECHTE
            </h2>
            <p className="mb-3">Nach DSGVO haben Sie das Recht auf:</p>
            <ul className="space-y-1.5 list-none">
              {[
                'Auskunft (Art. 15 DSGVO)',
                'Berichtigung (Art. 16 DSGVO)',
                'Löschung (Art. 17 DSGVO)',
                'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Datenübertragbarkeit (Art. 20 DSGVO)',
                'Widerspruch (Art. 21 DSGVO)',
                'Beschwerde bei der Datenschutzbehörde (DSB Österreich, dsb.gv.at)',
              ].map(r => (
                <li key={r} className="flex gap-3">
                  <span style={{ color: '#4b8ef5' }}>✓</span>{r}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Anfragen richten Sie bitte an: ordination@zahnarzt-notdienst-wien.at oder +43 676 844116204
            </p>
          </section>

          <div className="divider-electric" />

          <section>
            <h2 style={{ fontFamily: 'var(--font-headline)', color: '#eef3ff', fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              7. DATENSICHERHEIT
            </h2>
            <p>
              Alle Übertragungen erfolgen verschlüsselt (TLS/HTTPS). Zugang zu Patientendaten ist auf autorisierte Personen beschränkt. Alle Infrastruktur befindet sich ausschließlich auf EU-Servern.
            </p>
          </section>

          <p className="text-xs mt-8" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(238,243,255,0.3)' }}>
            Stand: {new Date().getFullYear()} · Zahnarzt Notdienst (Privat), Wien
          </p>
        </div>
      </div>
    </div>
  )
}
