import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Qui sommes-nous ? </h1>
            <p className={styles.p}>
                Protection Nuisibles, c’est avant tout une équipe d’experts dédiée à la protection de votre cadre de vie, 
                avec des solutions efficaces contre tous types de nuisibles. Basée dans les Pyrénées-Orientales (66), 
                notre entreprise repose sur des valeurs solides : réactivité, professionnalisme et engagement qualité.
            </p>
        <h2 className={styles.h2}> Une entreprise à taille humaine, proche de ses clients </h2>
            <p className={styles.p}>
                Chez Protection Nuisibles, chaque intervention est personnalisée. Nous plaçons l'écoute et le conseil au cœur de notre démarche, 
                pour vous proposer des traitements adaptés à votre situation. Particuliers, professionnels ou collectivités, 
                nous intervenons rapidement et en toute discrétion.
            </p>
        <h2 className={styles.h2}> Des techniciens certifiés, un savoir-faire reconnu </h2>
            <p className={styles.p}>
                Notre équipe est composée de techniciens formés aux méthodes les plus récentes de lutte anti-nuisibles 
                (dératisation, désinsectisation, désinfection). Nous utilisons des produits homologués et des techniques 
                respectueuses de l’environnement et de votre sécurité.
            </p>
        <h2 className={styles.h2}> Une exigence de qualité à chaque étape </h2>
        <p className={styles.p}>
            De votre premier appel à la finalisation de l’intervention, nous veillons à respecter les délais, 
            à garantir une intervention soignée, et à assurer votre satisfaction totale. Chaque prestation est suivie 
            d’un contrôle qualité rigoureux et, si nécessaire, de recommandations pour éviter toute récidive.
        </p>
        <p className={styles.p}>
            Protection Nuisibles, votre partenaire de confiance dans le 66 pour un environnement sain, sécurisé et sans nuisibles.
        </p>
    </section>
  )
}
