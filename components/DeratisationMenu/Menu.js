import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>La dératisation avec Protection Nuisibles</h1>
            <p className={styles.p}>
                Chez Protection Nuisibles, nous sommes spécialisés dans le traitement et l’élimination des rats. 
                Grâce à des méthodes professionnelles et adaptées, nous intervenons rapidement pour sécuriser votre environnement.
            </p>
        <h2 className={styles.h2}>1. Diagnostic et évaluation</h2>
            <p className={styles.p}>
                Tout commence par une inspection minutieuse. Nous identifions les zones d’infestation, 
                les points d’entrée et les signes d’activité pour établir un diagnostic précis. 
                À la suite de cette analyse, nous vous proposons un plan d'action clair et efficace.
            </p>    
        <h2 className={styles.h2}>2. Préparation de l'intervention</h2>
            <p className={styles.p}>
                Avant d’agir, nous sécurisons les lieux et mettons en place des protocoles adaptés. 
                Nous choisissons les méthodes et les produits les plus efficaces en fonction de votre situation spécifique.
            </p> 
        <h2 className={styles.h2}>3. Traitement contre les rats</h2>
            <ul className={styles.ul}>
                <li className={styles.li}>Pose de pièges et appâts professionnels</li>
                <li className={styles.li}>Utilisation de solutions respectueuses des normes sanitaires</li>
                <li className={styles.li}>Traitement ciblé pour éradiquer rapidement les rats</li>
                <li className={styles.li}>Suivi pour s'assurer de l'élimination totale</li>
            </ul>
            <p className={styles.p}>
                Chaque intervention est réalisée avec soin afin de garantir un résultat rapide, 
                durable et limiter les risques de récidive.
            </p>
        <h2 className={styles.h2}>4. Suivi et sécurisation</h2>
            <p className={styles.p}>
                Après le traitement, nous vérifions l'efficacité de l'intervention et mettons en place 
                des mesures préventives : colmatage des accès, conseils d'entretien et surveillance.
            </p>
        <h2 className={styles.h2}>5. Conseils et accompagnement</h2>
            <p className={styles.p}>
                Notre équipe vous accompagne dans la durée pour maintenir votre habitation ou votre local protégé. 
                Nous vous fournissons des recommandations personnalisées pour éviter toute nouvelle infestation.
            </p>
            <p className={styles.p}>
                Avec Protection Nuisibles, vous choisissez un partenaire fiable pour un traitement des rats 
                rapide, efficace et durable. Faites appel à notre expertise pour retrouver un environnement sain.
            </p>
    </section>
  )
}
