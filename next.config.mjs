/** @type {import('next').NextConfig} */
const nextConfig = {
  // Alle Bilder werden lokal aus /public/images über next/image ausgeliefert,
  // daher ist keine images.remotePatterns-Konfiguration mehr nötig.
  images: {
    // Moderne, kleinere Formate für schnellere mobile Ladezeiten.
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/duschkopf-sieger',
        destination: 'https://www.caldris-home.com/products/caldris-flow-shower-head',
        permanent: false,
      },
      {
        // Eigener Link für die Landingpage "Haarausfall" (separate Klick-Zuordnung).
        source: '/duschkopf-haarausfall',
        destination: 'https://www.caldris-home.com/products/caldris-flow-shower-head',
        permanent: false,
      },
      {
        // Eigener Link für die Landingpage "Trockene Haut".
        source: '/duschkopf-trockene-haut',
        destination: 'https://www.caldris-home.com/products/caldris-flow-shower-head',
        permanent: false,
      },
      {
        // Eigener Link für die Landingpage "Sprödes/glänzendes Haar".
        source: '/duschkopf-glanz',
        destination: 'https://www.caldris-home.com/products/caldris-flow-shower-head',
        permanent: false,
      },
      {
        // Eigener Link für die Landingpage "Weniger Kalkablagerungen".
        source: '/duschkopf-kalk',
        destination: 'https://www.caldris-home.com/products/caldris-flow-shower-head',
        permanent: false,
      },
      {
        // Eigener Link für die Dusch-WC-Vergleichsseite (CaldrisWave Pro).
        source: '/dusch-wc-sieger',
        destination: 'https://www.caldris-home.com/products/smart-dusch-wc',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
