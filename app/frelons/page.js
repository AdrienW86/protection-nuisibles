import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import FrelonsMenu from '@/components/FrelonsMenu/Menu'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <FrelonsMenu />
      <Footer />     
    </main>
  )
}
