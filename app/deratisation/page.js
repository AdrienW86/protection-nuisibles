import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import DeratisationMenu from '@/components/DeratisationMenu/Menu'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Dératisation à Perpignan - Protection Nuisibles 66',
  description: "Expert en dératisation à Perpignan et dans les Pyrénées-Orientales (66). Élimination rapide et durable des rats et souris avec Protection Nuisibles.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/deratisation',
  },
  openGraph: {
    title: 'Dératisation à Perpignan - Protection Nuisibles 66',
    description: "Expert en dératisation à Perpignan et dans les Pyrénées-Orientales (66). Élimination rapide et durable des rats et souris avec Protection Nuisibles.",
    url: 'https://www.protection-nuisibles.fr/deratisation',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function page() {
  return (
    <>
      <Header />
      <main>
        <SimpleBanner />
        <DeratisationMenu />
      </main>
      <Footer />
    </>
  )
}
