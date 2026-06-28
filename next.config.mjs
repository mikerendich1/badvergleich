/** @type {import('next').NextConfig} */
const nextConfig = {
  // Alle Bilder werden lokal aus /public/images über next/image ausgeliefert,
  // daher ist keine images.remotePatterns-Konfiguration mehr nötig.
  async redirects() {
    return [
      {
        source: '/duschkopf-sieger',
        destination: 'https://www.caldris-home.com/products/caldris-flow-shower-head',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
