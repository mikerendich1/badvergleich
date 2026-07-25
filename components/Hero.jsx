import Image from 'next/image';
import UpdatedDate from './UpdatedDate';

export default function Hero() {
  return (
    <header className="hero">
      <div className="meta-line">
        Anzeige · Autorin: <b>Lena Brandt</b> · Aktualisiert: <UpdatedDate />
        <span className="meta-editor"> · Editiert von: <b>Holger Waidmann</b></span>
      </div>
      <h1>Duschkopf mit Filter im Test 2026: meine 5 Favoriten im Vergleich</h1>
      <div className="hero-media">
        <Image
          src="/images/hero.jpg"
          alt="Autorin Lena Brandt in einem hellen, gefliesten Badezimmer"
          fill
          priority
          sizes="(max-width: 1000px) 100vw, 760px"
          style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
        />
      </div>

      {/* Mobile-only: Sprung-CTA zu Platz 1 (Testsieger) */}
      <a href="#platz-1" className="jump-cta">
        Direkt zu Platz 1 springen
        <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}
