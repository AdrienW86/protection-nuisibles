import styles from '@/app/legalPages.module.css';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Protection Nuisibles',
}

export default function MentionsLegales() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Mentions légales</h1>
      
      <h2 className={styles.subtitle}>Éditeur du site</h2>
      <p className={styles.text}>
        Nom : GREGORY ROBLES<br/>
        Forme juridique : Auto-entrepreneur<br/>
        Dénomination commerciale : Protection Nuisibles<br/>
        Adresse : 88 chemin des charettes, 66000 Perpignan, France<br/>
        Téléphone : +33 7 57 51 64 14<br/>
        Email : <a href="mailto:protection.nuisibles66@gmail.com" className={styles.link}>protection.nuisibles66@gmail.com</a><br/>
        Directeur de publication : Gregory ROBLES<br/>
        SIREN : 834799751<br/>
        SIRET : 83479975100013<br/>
        TVA Intracom : FR87838906659
      </p>

      <h2 className={styles.subtitle}>Hébergeur</h2>
      <p className={styles.text}>
        Nom : Vercel Inc.<br/>
        Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br/>
        Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.link}>https://vercel.com</a>
      </p>

      <h2 className={styles.subtitle}>Conditions d'utilisation</h2>
      <p className={styles.text}>
        Le site Protection Nuisibles est accessible à l'URL : https://protection-nuisibles.fr.<br/>
        Son utilisation est régie par les présentes conditions. En utilisant le site, vous acceptez ces conditions. Elles peuvent être modifiées à tout moment sans préavis.
      </p>

      <h2 className={styles.subtitle}>Limitation de responsabilité</h2>
      <p className={styles.text}>
        Les informations présentes sur ce site sont fournies de bonne foi, mais peuvent contenir des inexactitudes ou omissions. L'entreprise Protection Nuisibles ne saurait être tenue responsable de toute utilisation ou interprétation erronée.
      </p>

      <h2 className={styles.subtitle}>Litiges</h2>
      <p className={styles.text}>
        Les présentes conditions sont régies par la loi française et tout litige relève des tribunaux français. La langue de référence pour tout contentieux est le français.
      </p>
    </main>
  )
}
