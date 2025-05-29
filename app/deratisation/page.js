import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import DeratisationMenu from '@/components/DeratisationMenu/Menu'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Dératisation – Protection Nuisibles 66',
  description: "Éliminez rats et souris avec Protection Nuisibles. Dératisation efficace à Perpignan et dans tout le 66. Intervention rapide et discrète.",
}

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <DeratisationMenu />
      <Footer />     
    </main>
  )
}
