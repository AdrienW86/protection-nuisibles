import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>L'élimination des nids de guêpes et frelons avec Protection Nuisibles</h1>
            <p className={styles.p}>
                Chez Protection Nuisibles, nous intervenons rapidement et en toute sécurité pour détruire 
                les nids de guêpes et frelons. Protégez votre famille, vos clients ou vos employés grâce à notre expertise professionnelle.
            </p>
        <h2 className={styles.h2}>1. Évaluation de la situation</h2>
            <p className={styles.p}>
                Nous réalisons une inspection complète pour localiser précisément le ou les nids 
                (toitures, arbres, combles, murs, etc.) et évaluer le niveau de danger. 
                Un devis clair vous est remis avant toute intervention.
            </p>    
        <h2 className={styles.h2}>2. Préparation sécurisée de l'intervention</h2>
            <p className={styles.p}>
                Avant d'agir, nous sécurisons la zone d'intervention pour protéger les habitants et 
                limitons les risques de piqûres. Nos techniciens utilisent des équipements de protection individuelle adaptés.
            </p> 
        <h2 className={styles.h2}>3. Destruction du nid</h2>
            <ul className={styles.ul}>
                <li className={styles.li}>Traitement spécifique pour guêpes et frelons européens ou asiatiques</li>
                <li className={styles.li}>Utilisation d'insecticides professionnels homologués</li>
                <li className={styles.li}>Destruction complète du nid ou enlèvement sécurisé</li>
                <li className={styles.li}>Intervention rapide et efficace</li>
            </ul>
            <p className={styles.p}>
                Nos méthodes garantissent une élimination totale du nid, limitant le risque de reformation et assurant votre sécurité.
            </p>
        <h2 className={styles.h2}>4. Conseils de prévention</h2>
            <p className={styles.p}>
                Après la destruction, nous vous donnons des conseils pour éviter le retour des guêpes ou frelons : 
                fermeture des accès, surveillance des zones sensibles, entretien régulier.
            </p>
        <h2 className={styles.h2}>5. Nettoyage et vérification</h2>
            <p className={styles.p}>
                Nous nous assurons que la zone est totalement sécurisée après notre intervention 
                et procédons à un nettoyage si nécessaire. Nous réalisons un dernier contrôle avant de quitter les lieux.
            </p>
            <p className={styles.p}>
                Avec Protection Nuisibles, éliminez en toute sécurité les nids de guêpes et frelons grâce à des professionnels qualifiés 
                et des interventions rapides dans tout votre secteur.
            </p>
    </section>
  )
}
