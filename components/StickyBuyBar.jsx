'use client';

import { useEffect, useState } from 'react';

// Dezente, fixierte Kauf-Leiste am unteren Rand (nur Mobil, per CSS).
// Blendet sich ein, sobald der Hero nach oben aus dem Bild gescrollt ist,
// und wieder aus, wenn der Abschluss-CTA sichtbar wird, damit keine
// wichtigen Inhalte verdeckt werden und die Leiste nicht redundant wirkt.
export default function StickyBuyBar({ href, name = 'Caldris Flow Plus', price = '79 €' }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero-media');
    const end = document.getElementById('final-cta');

    const compute = () => {
      const vh = window.innerHeight;
      // Hero ist nach oben aus dem Bild gescrollt?
      const heroPassed = hero ? hero.getBoundingClientRect().bottom < 0 : true;
      // Abschluss-CTA gerade im Sichtbereich? Dann Leiste ausblenden.
      let endVisible = false;
      if (end) {
        const r = end.getBoundingClientRect();
        endVisible = r.top < vh && r.bottom > 0;
      }
      setShow(heroPassed && !endVisible);
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, []);

  return (
    <div className={show ? 'buybar show' : 'buybar'} aria-hidden={!show}>
      <div className="buybar-info">
        <span className="buybar-name">{name}</span>
        <span className="buybar-meta">Testsieger · ab {price}</span>
      </div>
      <a className="btn buybar-btn" href={href}>
        Zum Anbieter →
      </a>
    </div>
  );
}
