export const PHONE = '+43 676 844116204';
export const PHONE_HREF = 'tel:+43676844116204';
export const WHATSAPP_HREF =
  'https://wa.me/43676844116204?text=Guten%20Tag%2C%20ich%20habe%20akute%20Zahnschmerzen%20und%20brauche%20dringend%20einen%20Termin.';
export const ADDRESS = 'Darwingasse 37, 1020 Wien';
export const ADDRESS_MAPS =
  'https://maps.google.com/?q=Darwingasse+37,+1020+Wien';

export const HOURS: Record<number, { open: string; close: string }> = {
  0: { open: '10:00', close: '21:00' }, // Sun
  1: { open: '10:00', close: '21:00' }, // Mon
  2: { open: '10:00', close: '21:00' }, // Tue
  3: { open: '10:00', close: '21:00' }, // Wed
  4: { open: '10:00', close: '21:00' }, // Thu
  5: { open: '10:00', close: '19:00' }, // Fri
  6: { open: '20:00', close: '22:30' }, // Sat — late-night emergency only
};

export const DAY_NAMES = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
];

export const DAY_NAMES_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

export function getViennaDate(): Date {
  return new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Vienna' })
  );
}

export function isOpenNow(): boolean {
  const now = getViennaDate();
  const day = now.getDay();
  const current = now.getHours() * 60 + now.getMinutes();
  const { open, close } = HOURS[day];
  return current >= toMinutes(open) && current < toMinutes(close);
}

export function isSaturdayEmergency(): boolean {
  const now = getViennaDate();
  if (now.getDay() !== 6) return false;
  const current = now.getHours() * 60 + now.getMinutes();
  return current >= toMinutes('20:00') && current < toMinutes('22:30');
}

export function getTodayClose(): string {
  return HOURS[getViennaDate().getDay()].close;
}

export function getTodayOpen(): string {
  return HOURS[getViennaDate().getDay()].open;
}

export interface NextOpening {
  label: string;
  time: string;
  minutesUntil: number;
}

export function getNextOpening(): NextOpening {
  const now = getViennaDate();
  const today = now.getDay();
  const current = now.getHours() * 60 + now.getMinutes();

  // Check if opens later today
  const todayOpen = toMinutes(HOURS[today].open);
  if (current < todayOpen) {
    return {
      label: 'Heute',
      time: HOURS[today].open,
      minutesUntil: todayOpen - current,
    };
  }

  // Check next 7 days
  for (let i = 1; i <= 7; i++) {
    const nextDay = (today + i) % 7;
    const minutesUntil = i * 24 * 60 - current + toMinutes(HOURS[nextDay].open);
    return {
      label: i === 1 ? 'Morgen' : DAY_NAMES[nextDay],
      time: HOURS[nextDay].open,
      minutesUntil,
    };
  }

  return { label: 'Morgen', time: '10:00', minutesUntil: 1440 };
}

export function formatCountdown(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0) return `${h}h ${m.toString().padStart(2, '0')}min`;
  return `${m}min`;
}
