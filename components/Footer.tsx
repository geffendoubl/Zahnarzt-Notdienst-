import Link from 'next/link'
import { PHONE, PHONE_HREF, ADDRESS, WHATSAPP_HREF } from '@/lib/openingHours'

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        background: 'rgba(12, 12, 24, 0.95)',
        borderTop: '1px solid rgba(26, 237, 255, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div
            className="text-xl mb-3"
            style={{ fontFamily: 'var(--font-headline)', letterSpacing: '0.08em', color: '#f5f0e8' }}
          >
            ZAHNARZT{' '}
            <span style={{ color: '#1aedff' }}>NOTDIENST</span>
          </div>
          <p
            className="text-xs mb-1"
            style={{ fontFamily: 'var(--font-mono)', color: '#6b6b8a', letterSpacing: '0.1em' }}
          >
            <strong style={{ color: '#f5f0e8' }}>PRIVAT</strong> ORDINATION
          </p>
          <p className="text-sm mt-3" style={{ color: 'rgba(245,240,232,0.5)', lineHeight: 1.6 }}>
            Akute Zahnschmerzen, Zahnbeschwerden und Notfälle — täglich geöffnet.
          </p>
        </div>

        {/* Contact */}
        <div>
          <div
            className="text-xs mb-4 tracking-widest"
            style={{ fontFamily: 'var(--font-mono)', color: '#6b6b8a' }}
          >
            KONTAKT
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 no-underline transition-colors hover:text-electric"
              style={{ color: '#f5f0e8', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline transition-colors"
              style={{ color: '#f5f0e8', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`https://maps.google.com/?q=Darwingasse+37,+1020+Wien`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline"
              style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {ADDRESS}
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <div
            className="text-xs mb-4 tracking-widest"
            style={{ fontFamily: 'var(--font-mono)', color: '#6b6b8a' }}
          >
            ÖFFNUNGSZEITEN
          </div>
          <div
            className="text-xs grid grid-cols-2 gap-y-1.5"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(245,240,232,0.55)' }}
          >
            <span>Mo–Do</span><span>10:00–21:00</span>
            <span>Fr</span><span>10:00–19:00</span>
            <span>Sa</span><span style={{ color: '#ff3e2f' }}>20:00–22:30*</span>
            <span>So</span><span>10:00–21:00</span>
          </div>
          <p className="text-xs mt-2" style={{ color: 'rgba(245,240,232,0.3)', fontFamily: 'var(--font-mono)' }}>
            *Samstag: Notdienst
          </p>
        </div>
      </div>

      <div
        className="divider-electric"
        style={{ margin: '0 1.5rem' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-xs"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(245,240,232,0.25)' }}
        >
          © {new Date().getFullYear()} Zahnarzt Notdienst (Privat) · Wien
        </p>
        <div className="flex gap-5">
          {[
            ['Impressum', '/impressum'],
            ['Datenschutz', '/datenschutz'],
            ['Kontakt', '/kontakt'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-xs no-underline transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'rgba(245,240,232,0.3)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
