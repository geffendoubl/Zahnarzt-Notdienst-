import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, telefon, anliegen, rueckruf, nachricht } = data

    if (!name || !telefon) {
      return NextResponse.json({ error: 'Name und Telefon sind erforderlich.' }, { status: 400 })
    }

    const subject = `Neue Patientenanfrage: ${anliegen || 'Sonstiges'} — ${name}`
    const body = `
Neue Anfrage von der Website:

Name: ${name}
Telefon: ${telefon}
Anliegen: ${anliegen || '—'}
Rückrufzeit: ${rueckruf || '—'}
Nachricht: ${nachricht || '—'}

Eingegangen: ${new Date().toLocaleString('de-AT', { timeZone: 'Europe/Vienna' })}
    `.trim()

    // Send via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Notification to practice
      await resend.emails.send({
        from: 'website@zahnarzt-notdienst-wien.at',
        to: process.env.PRACTICE_EMAIL || 'ordination@zahnarzt-notdienst-wien.at',
        subject,
        text: body,
      })

      // Auto-reply to patient (if email provided)
      if (data.email) {
        await resend.emails.send({
          from: 'ordination@zahnarzt-notdienst-wien.at',
          to: data.email,
          subject: 'Ihre Anfrage beim Zahnarzt Notdienst Wien',
          html: `
<div style="background:#080810;color:#f5f0e8;font-family:sans-serif;padding:32px;max-width:560px;margin:0 auto;">
  <div style="border-left:3px solid #1aedff;padding-left:16px;margin-bottom:24px;">
    <h1 style="font-size:1.5rem;letter-spacing:0.05em;margin:0 0 4px;color:#f5f0e8;">ZAHNARZT NOTDIENST WIEN</h1>
    <p style="color:#9ca3af;margin:0;font-size:0.8rem;letter-spacing:0.1em;">PRIVATORDINATION · 1020 WIEN</p>
  </div>
  <p style="color:rgba(245,240,232,0.8);line-height:1.6;">Sehr geehrte/r ${name},</p>
  <p style="color:rgba(245,240,232,0.8);line-height:1.6;">wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich.</p>
  <p style="color:rgba(245,240,232,0.8);line-height:1.6;">Bei <strong style="color:#ff3e2f;">akuten Beschwerden</strong> rufen Sie bitte direkt an:</p>
  <a href="tel:+43676844116204" style="display:inline-block;background:#ff3e2f;color:#fff;text-decoration:none;padding:12px 24px;font-weight:bold;letter-spacing:0.06em;margin:8px 0 24px;">
    +43 676 844116204
  </a>
  <div style="border-top:1px solid rgba(26,237,255,0.15);padding-top:16px;font-size:0.75rem;color:rgba(245,240,232,0.35);">
    Darwingasse 37, 1020 Wien · Mo–Do &amp; So 10–21 Uhr · Fr 10–19 Uhr · Sa 20–22:30 Uhr
  </div>
</div>`,
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 })
  }
}
