import Image from 'next/image';

function Medal() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

function Bolt() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

// Einheitlicher Test-Header pro Produkt (Rang, Note, Bewertung, Eignung).
export default function DetailHeader({ rank, name, brand, image, grade, rating, stars, count, idealFor, top = false, href }) {
  return (
    <header className="dh">
      <span className={top ? 'dh-rank gold' : 'dh-rank'}>
        <Medal />#{rank}
      </span>
      <h3 className="dh-title">
        {rank}. {name}
      </h3>
      <div className="dh-brand">von {brand}</div>

      <div className="dh-cards">
        <div className="dh-card dh-imgcard">
          <div className="dh-img">
            <Image src={image} alt={name} fill sizes="(max-width: 680px) 100vw, 240px" />
            {href && <a className="img-link" href={href} aria-label={`${name} – zum Anbieter`} />}
          </div>
        </div>
        <div className="dh-card">
          <span className="dh-k">Testergebnis</span>
          <strong className="dh-grade">{grade}</strong>
        </div>
        <div className="dh-card">
          <span className="dh-k">Bewertung</span>
          <strong className="dh-rating">{rating}/10</strong>
          <div className="dh-stars">{stars}</div>
          <span className="dh-count">({count})</span>
        </div>
      </div>

      <div className="dh-ideal">
        <Bolt />
        <span>
          <b>Ideal für:</b> {idealFor}
        </span>
      </div>
    </header>
  );
}
