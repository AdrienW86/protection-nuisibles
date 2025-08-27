import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import FrelonsMenu from '@/components/FrelonsMenu/Menu'

export const metadata = {
  title: 'Destruction de nids de frelons – Protection Nuisibles',
  description: "Destruction rapide et sécurisée des nids de frelons et guêpes dans tout le 66. Intervention d'urgence sur Perpignan et alentours.",
}

export default function page() {
  return (
    <main>
      <SimpleBanner />
      <FrelonsMenu /> 
    </main>
  )
}
