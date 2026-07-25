import Image from 'next/image';
import UpdatedDate from './UpdatedDate';

export default function Hero({
  title = 'Duschkopf mit Filter im Test 2026: meine 5 Favoriten im Vergleich',
}) {
  // Titel am ersten Doppelpunkt teilen: erster Teil dunkel, zweiter Teil als
  // farbiger Akzent (dunkles Grün). Ohne Doppelpunkt bleibt der Titel einteilig.
  const colon = title.indexOf(':');
  const titleHead = colon >= 0 ? title.slice(0, colon + 1) : title;
  const titleAccent = colon >= 0 ? title.slice(colon + 1).trim() : null;

  return (
    <header className="hero">
      <div className="meta-line">
        Anzeige · Autorin: <b>Lena Brandt</b> · Aktualisiert: <UpdatedDate />
        <span className="meta-editor"> · Editiert von: <b>Holger Waidmann</b></span>
      </div>
      <h1>
        {titleHead}
        {titleAccent && (
          <>
            {' '}
            <span className="h1-accent">{titleAccent}</span>
          </>
        )}
      </h1>
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
