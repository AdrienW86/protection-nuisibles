import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import GoogleReviews from '@/components/Reviews/Reviews'
import Description from '@/components/Description/Description'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <GoogleReviews />
      <Equipment />
      <Description />    
    </main>
  )
}
