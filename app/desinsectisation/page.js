import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import DesinsectisationMenu from '@/components/DesinsectisationMenu/Menu'
import Footer from '@/components/Footer/Footer'

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
