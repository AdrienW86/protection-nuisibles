import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import DesinsectisationMenu from '@/components/DesinsectisationMenu/Menu'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Désinsectisation – Insectes & Parasites',
  description: "Traitement contre cafards, blattes, puces et autres insectes. Service de désinsectisation dans les Pyrénées-Orientales par des experts agréés.",
}

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <DesinsectisationMenu />
      <Footer />     
    </main>
  )
}
