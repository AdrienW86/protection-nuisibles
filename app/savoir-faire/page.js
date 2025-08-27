import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import About from '@/components/About/About'

export const metadata = {
  title: 'Notre savoir-faire – Protection Nuisibles',
  description: "Découvrez notre expertise en lutte contre les nuisibles : dératisation, désinsectisation, dépigeonnage et prévention sur mesure.",
}

export default function page() {
  return (
    <main>
      <SimpleBanner />
      <About />    
    </main>
  )
}