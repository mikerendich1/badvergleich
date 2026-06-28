'use client';

import { useEffect, useState } from 'react';

const MONATE = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

// Zeigt immer ein Datum, das 10 Tage in der Vergangenheit liegt,
// und aktualisiert sich bei jedem Seitenaufruf automatisch.
export default function UpdatedDate() {
  const [text, setText] = useState('');

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() - 10);
    // Uhrzeit bewusst fest auf 13:26 Uhr.
    setText(`${d.getDate()}. ${MONATE[d.getMonth()]} ${d.getFullYear()}, 13:26 Uhr`);
  }, []);

  return <span>{text}</span>;
}
