import type { Metadata } from 'next'
import { Bebas_Neue, Space_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import { StatusBanner } from '@/components/StatusBanner'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { PrivatDismissible } from '@/components/PrivatDismissible'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Zahnarzt Notdienst Wien | Privatordination 1020 | Heute bis 21 Uhr',
    template: '%s | Zahnarzt Notdienst Wien',
  },
  description:
    'Zahnarztnotdienst in Wien Leopoldstadt (1020). Privatordination für akute Zahnschmerzen & Notfälle. Mo–Do & So 10–21 Uhr, Fr 10–19 Uhr, Sa 20–22:30 Uhr. ☎ +43 676 844116204',
  keywords: [
    'zahnarzt notdienst wien',
    'notfall zahnarzt wien',
    'zahnarzt 1020',
    'zahnarzt leopoldstadt',
    'privatordination wien',
    'zahnarzt wochenende wien',
  ],
  metadataBase: new URL('https://zahnarzt-notdienst-wien.at'),
  alternates: {
    canonical: '/',
    languages: { 'de-AT': '/' },
  },
  openGraph: {
    title: 'Zahnarzt Notdienst Wien — Heute bis 21 Uhr geöffnet',
    description: 'Akute Zahnschmerzen? Privatordination in Wien 1020. Täglich geöffnet. Jetzt anrufen.',
    locale: 'de_AT',
    type: 'website',
    siteName: 'Zahnarzt Notdienst Wien',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Zahnarzt Notdienst (Privat)',
  description: 'Privatordination für akute Zahnschmerzen und Notfälle in Wien Leopoldstadt',
  url: 'https://zahnarzt-notdienst-wien.at',
  telephone: '+43676844116204',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Darwingasse 37',
    addressLocality: 'Wien',
    postalCode: '1020',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.2184,
    longitude: 16.3864,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '55',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
      opens: '10:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '20:00',
      closes: '22:30',
    },
  ],
  priceRange: '€€',
  paymentAccepted: 'Cash, Credit Card',
  medicalSpecialty: 'Dentistry',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${bebasNeue.variable} ${spaceMono.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#080810" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <StatusBanner />
        <div style={{ marginTop: '2.75rem' }}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppFloat />
        <PrivatDismissible />
      </body>
    </html>
  )
}
