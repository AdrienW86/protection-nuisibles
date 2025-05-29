import Header from '@/components/Header/Header'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Notre savoir-faire – Protection Nuisibles',
  description: "Découvrez notre expertise en lutte contre les nuisibles : dératisation, désinsectisation, dépigeonnage et prévention sur mesure.",
}

export default function page() {
  return (
    <main>
      <Header />
      <SimpleBanner />
      <About />
      <Footer />     
    </main>
  )
}