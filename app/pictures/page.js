import Header from '@/components/Header/Header'
import Gallery from '@/components/Gallery/Gallery'
import Footer from '@/components/Footer/Footer'
import styles from '../page.module.css'

export const metadata = {
  title: 'Nos interventions en images – Protection Nuisibles',
  description: "Découvrez en images nos interventions de lutte contre les nuisibles dans le département des Pyrénées-Orientales.",
}

export default function Pictures() {
  return (
    <main className={styles.main}>
      <Header />
     <h2 className={styles.h2}>  Nos interventions </h2>
      <Gallery />
      <Footer />     
    </main>
  )
}
