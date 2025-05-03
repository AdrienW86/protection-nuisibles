import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Protection Nuisibles',
  description:
    "Protection Nuisibles – Experts en élimination de nuisibles dans le 66. Interventions rapides et efficaces pour éradiquer rats, insectes, et autres nuisibles. Service de qualité, prévention et conseils personnalisés dans tout le département des Pyrénées-Orientales.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* Chargement de Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17043170000"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17043170000');
          `}
        </Script>

        {/* Événement de conversion */}
        <Script id="google-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-17043170000/pPJ0CNDQm8EaENDF6L4_'});
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}

