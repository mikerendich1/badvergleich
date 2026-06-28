import Image from 'next/image';
import UpdatedDate from './UpdatedDate';

export default function Hero() {
  return (
    <header className="hero">
      <div className="meta-line">
        Anzeige · Autorin: <b>Lena Brandt</b> · Aktualisiert: <UpdatedDate /> · Editiert von: <b>Holger Waidmann</b>
      </div>
      <h1>Duschkopf mit Filter im Test 2026: meine 5 Favoriten im Vergleich</h1>
      <div className="hero-media">
        <Image
          src="/images/hero-shower.jpg"
          alt="Duschkopf in einem hellen, gefliesten Badezimmer"
          fill
          priority
          sizes="(max-width: 1000px) 100vw, 760px"
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
        />
      </div>
    </header>
  );
}
