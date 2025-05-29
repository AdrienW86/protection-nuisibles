import Header from '@/components/Header/Header'
import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import Footer from '@/components/Footer/Footer'
import styles from '../page.module.css'

export const metadata = {
  title: 'Contact – Protection Nuisibles',
  description: "Contactez Protection Nuisibles pour une intervention rapide contre les nuisibles dans les Pyrénées-Orientales. Demandez un devis gratuit.",
}

export default function Contact() {
  return (
    <main className={styles.container}>
      <Header />
     <h2 className={styles.h2}>  Nous contacter </h2>    
      <Map />
      <Form />
      <Footer />    
    </main>
  )
}
