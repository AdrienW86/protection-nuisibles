import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Le déroulement de vos interventions de désinsectisation avec Protection Nuisibles</h1>
            <p className={styles.p}>
                Chez Protection Nuisibles, nous intervenons rapidement pour éliminer tous types d'insectes nuisibles. 
                Que ce soit pour des fourmis, des cafards, des guêpes ou d'autres envahisseurs, notre équipe agit efficacement pour assainir votre environnement.
            </p>
        <h2 className={styles.h2}>1. Diagnostic et identification des insectes</h2>
            <p className={styles.p}>
                Nous réalisons une visite complète de votre domicile ou de vos locaux pour identifier 
                précisément les espèces d'insectes présentes et évaluer l'ampleur de l'infestation. 
                Un devis clair et adapté vous est remis après analyse.
            </p>    
        <h2 className={styles.h2}>2. Préparation de l'intervention</h2>
            <p className={styles.p}>
                Nous sécurisons les lieux, protégeons vos biens et planifions les méthodes d'intervention 
                les plus adaptées selon le type d'insectes détectés : traitements chimiques, biologiques ou mécaniques.
            </p> 
        <h2 className={styles.h2}>3. Traitement de désinsectisation</h2>
            <ul className={styles.ul}>
                <li className={styles.li}>Éradication de cafards, fourmis, puces, moustiques, punaises de lit, etc.</li>
                <li className={styles.li}>Utilisation de produits professionnels certifiés</li>
                <li className={styles.li}>Application de gels, pulvérisations ou fumigations selon les besoins</li>
                <li className={styles.li}>Traitement curatif et préventif</li>
            </ul>
            <p className={styles.p}>
                Nos interventions sont précises et respectueuses de votre environnement pour assurer 
                une désinsectisation efficace et durable.
            </p>
        <h2 className={styles.h2}>4. Prévention et recommandations</h2>
            <p className={styles.p}>
                Après le traitement, nous vous conseillons sur les bonnes pratiques pour éviter 
                toute nouvelle infestation : hygiène, colmatage des accès, entretien régulier, etc.
            </p>
        <h2 className={styles.h2}>5. Contrôle et suivi post-intervention</h2>
            <p className={styles.p}>
                Nous réalisons un contrôle final pour s'assurer de l'efficacité du traitement et 
                vous proposons des solutions d'entretien et de suivi si nécessaire.
            </p>
            <p className={styles.p}>
                Avec Protection Nuisibles, débarrassez-vous rapidement et durablement des insectes grâce à l’expertise 
                d’une équipe professionnelle, réactive et à votre écoute.
            </p>
    </section>
  )
}
