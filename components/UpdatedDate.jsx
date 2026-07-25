'use client';

import { useEffect, useState } from 'react';

const MONATE = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

// Zeigt immer ein Datum, das 10 Tage in der Vergangenheit liegt,
// und aktualisiert sich bei jedem Seitenaufruf automatisch.
export default function UpdatedDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() - 10);
    setDate(`${d.getDate()}. ${MONATE[d.getMonth()]} ${d.getFullYear()}`);
  }, []);

  // Uhrzeit in eigenem Span, damit sie auf Mobil separat ausgeblendet werden kann.
  return (
    <span>
      {date}
      <span className="meta-time">, 13:26 Uhr</span>
    </span>
  );
}
