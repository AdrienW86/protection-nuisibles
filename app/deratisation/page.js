import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import DeratisationnMenu from '@/components/DeratisationMenu/Menu'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <DeratisationnMenu />
      <Footer />     
    </main>
  )
}
