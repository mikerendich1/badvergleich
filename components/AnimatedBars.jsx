'use client';

import { useEffect } from 'react';

// Lässt alle Bewertungsbalken (.fill / .vfill mit data-width) beim Scrollen
// von 0 % auf ihren Zielwert animieren, sobald sie ins Sichtfeld kommen.
export default function AnimatedBars() {
  useEffect(() => {
    const bars = Array.from(document.querySelectorAll('[data-width]'));
    if (bars.length === 0) return;

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Ohne IntersectionObserver oder bei reduzierter Bewegung: sofort füllen.
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      bars.forEach((b) => {
        b.style.width = b.dataset.width;
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    bars.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  return null;
}
