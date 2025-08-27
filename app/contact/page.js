import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import styles from '../page.module.css'

export const metadata = {
  title: 'Contact – Protection Nuisibles',
  description: "Contactez Protection Nuisibles pour une intervention rapide contre les nuisibles dans les Pyrénées-Orientales. Demandez un devis gratuit.",
}

export default function Contact() {
  return (
    <main className={styles.container}>
     <h2 className={styles.h2}>  Nous contacter </h2>    
      <Map />
      <Form />  
    </main>
  )
}
