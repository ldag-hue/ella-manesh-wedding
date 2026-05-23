import { WEDDING } from './constants';

export function downloadCalendarEvent() {
  const start = formatICSDate(WEDDING.date);
  const end = formatICSDate(new Date(WEDDING.date.getTime() + 8 * 60 * 60 * 1000));

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:Mariage de ${WEDDING.groomName} & ${WEDDING.brideName}`,
    `DESCRIPTION:${WEDDING.events.map(e => `${e.time} - ${e.title} (${e.location})`).join('\\n')}`,
    `LOCATION:${WEDDING.venue.name}\\, ${WEDDING.venue.address}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `mariage-${WEDDING.groomName.toLowerCase()}-${WEDDING.brideName.toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function formatICSDate(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}
