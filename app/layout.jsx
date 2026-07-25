import './globals.css';

export const metadata = {
  title: 'Duschkopf mit Filter Test 2026: Die 5 besten Filterduschköpfe im Vergleich | BadVergleich',
  description:
    'Filterduschkopf Vergleich 2026: Wir haben 5 beliebte Modelle (Caldris, Hello Klean, Doyoo, Dupor, Sanquell) nach Filterleistung, Preis, Refill-Kosten und Lieferumfang verglichen. Testsieger ab 79 €.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
